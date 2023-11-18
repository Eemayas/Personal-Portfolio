import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "@/lib/utils/motion";

import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { SectionWrapper } from "@/lib/hoc";
import { styles } from "@/app/style";
import {
  deleteTestimonial,
  patchTestimonial,
  postTestimonial,
} from "@/lib/action/testinomialAction";
import { DeleteIcons } from "./Icons";

const Feedbacks = () => {
  const [form, setForm] = useState({
    name: "",
    testimonial: "",
    designation: "",
    image: "",
    company: "",
  });
  const [id, setId] = useState("0");
  const testimonials = useSelector((state) => state.TestimonialReducer);
  const adminState = useSelector((state) => state.AdminReducer);
  // console.log(testimonials);
  return (
    <>
      <div className="mt-12 bg-black-100 pb-5 rounded-[20px] ">
        <div
          className={`${styles.padding} bg-tertiary  rounded-2xl min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </motion.div>
        </div>
        <div className={`${styles.paddingX} -mt-20 pd-14 flex flex-wrap gap-7`}>
          {testimonials.length ? (
            <div className=" mt-20 flex flex-wrap justify-center gap-7">
              {testimonials.map((testimonial, index) => (
                <FeedBackCard
                  adminState={adminState}
                  key={`testinomial-${index} `}
                  index={index}
                  {...testimonial}
                  // _id={id}
                  setForm={setForm}
                  setId={setId}
                />
              ))}
            </div>
          ) : (
            <h1>Loading..............</h1>
          )}
        </div>
      </div>
      <TestinomialForm
        adminState={adminState}
        form={form}
        setId={setId}
        setForm={setForm}
        id={id}
      />
    </>
  );
};
const FeedBackCard = ({
  index,
  adminState,
  testimonial,
  name,
  designation,
  company,
  image,
  setForm,
  setId,
  _id,
}) => {
  const dispatch = useDispatch();
  // console.log(_id);

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0, 75)}
      // className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <div className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
        <p className="text-white font-black text-[48px]">"</p>
        <div className="mt-1 ">
          <p className="text-white tracking-wider text-[18px] ">
            {testimonial}
          </p>
          <div className="mt-7 flex justify-between items-center gap-1 ">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px] ">
                <span className="blue-text-gradient">@</span> {name}
              </p>
              <p className="mt-1 text-secondary text-[12px]">
                {designation} of {company}
              </p>
            </div>
            <img
              loading="lazy"
              src={image}
              alt={`Feedback-by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        className="flex items-end flex-col justify-normal  xs:justify-end"
        style={{ display: adminState ? "block" : "none" }}
      >
        <button
          aria-label="BTN"
          onClick={() => {
            console.log(_id);
            setId(_id);
            setForm({
              name: name,
              testimonial: testimonial,
              designation: designation,
              image: image,
              company: company,
            });
          }}
          className="bg-tertiary flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
        >
          <img
            src={"/assets/icons/edit.svg"}
            className="h-[20px] w-[20px]"
            alt="Edit Icon"
          />
        </button>
        <button
          aria-label="BTN"
          onClick={() => {
            dispatch(deleteTestimonial(_id));
          }}
          className="bg-tertiary flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
        >
          <DeleteIcons />
        </button>
      </div>
    </motion.div>
  );
};

const TestinomialForm = ({ adminState, setId, form, setForm, id }) => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    setLoading(true);
    console.log(form);
    e.preventDefault();
    if (id != "0") {
      dispatch(patchTestimonial(id, form));
    } else {
      dispatch(postTestimonial(form));
    }
    setId("0");
    setForm({
      name: "",
      testimonial: "",
      designation: "",
      image: "",
      company: "",
    });
    setLoading(false);
  };
  // console.log(id);
  return (
    <>
      <div
        className={`mt-12 flex  xl:flex-row flex-col gap-10 overflow-hidden`}
        style={{ display: adminState ? "block" : "none" }}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Person's Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Person's Names"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Testinomials</span>
              <textarea
                rows={7}
                name="message"
                value={form.testimonial}
                onChange={(e) =>
                  setForm({ ...form, testimonial: e.target.value })
                }
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Designation</span>
              <input
                type="text"
                name="name"
                value={form.designation}
                onChange={(e) =>
                  setForm({ ...form, designation: e.target.value })
                }
                placeholder="CTO ,CEO"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Company Name</span>
              <input
                type="text"
                name="name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Tesla,Apple"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Select an Image
              </span>
              <div className="cursor-pointer bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-blue-600 transition duration-300">
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setForm({ ...form, image: base64 })}
                />
              </div>
            </label>
            {form.image && (
              <div className="mt-4">
                <span className="text-white font-medium mb-4">
                  Selected Image:
                </span>
                <img
                  src={form.image}
                  alt="Selected"
                  className="w-40 h-40 mt-2 rounded-[40px] border-4 border-red-500"
                />
              </div>
            )}{" "}
            {/*  */}
            <button
              aria-label="BTN"
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "feedback");
