"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useDispatch, useSelector } from "react-redux";
import { SectionWrapper } from "@/lib/hoc";
import { slideIn } from "@/lib/utils/motion";
import { styles } from "@/app/style";
import {
  deleteContact,
  patchContact,
  postContact,
} from "@/lib/action/contactAction";
import { DeleteIcons, EditIcons } from "./Icons";

const LetsTalk = () => {
  const [form, setForm] = useState({
    title: "",
    detail: "",
  });
  const [id, setId] = useState("0");
  const contacts = useSelector((state) => state.ContactReducer);
  const adminState = useSelector((state) => state.AdminReducer);
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_ar5qbfv",
        "template_i630qnb",
        {
          from_name: form.name,
          to_name: "Prashant",
          from_email: form.email,
          to_email: "prashantmanandhar2002@gmail.com",
          message: form.message,
        },
        "RPLFkx6l9sVg9jnxP"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you!! I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };
  return (
    <>
      <div
        className={`xl:mt-12 flex md:flex-row flex-col gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Let's Talk.</h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <button
              aria-label="BTN"
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <ContactInfo
          adminState={adminState}
          contacts={contacts}
          setForm={setForm}
          setId={setId}
        />
      </div>
      <ContactForm
        adminState={adminState}
        setId={setId}
        form={form}
        setForm={setForm}
        id={id}
      />
    </>
  );
};

const ContactInfo = ({ adminState, contacts, setForm, setId }) => {
  // console.log(contacts.length);
  return contacts.length ? (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="xs:flex-1 xs:mt-5 flex-col flex gap-5 xs:flex-wrap align-middle h-auto"
    >
      {contacts.map((contact, index) => (
        <ContactCard
          key={`contact-${index}`}
          setForm={setForm}
          setId={setId}
          index={index}
          {...contact}
          adminState={adminState}
          // id={contact._id}
        />
      ))}
    </motion.div>
  ) : (
    <h1></h1>
  );
};

const ContactCard = ({
  adminState,
  _id,
  setId,
  setForm,
  icon,
  title,
  detail,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row items-center gap-3 ">
      <div className="md:w-96 mb-6 flex items-center flex-col justify-evenly w-full bg-black-100 p-5 rounded-2xl min-h-[200px] sm:w-[360px]">
        {/* {icon} */}
        <h3 className="m-0 text-white">{title}</h3>
        <hr className="mt-2 mb-2 w-full bg-white" />
        <div className="small text-white">{detail}</div>
      </div>
      <div
        className="flex  flex-col justify-normal  xs:justify-end"
        style={{ display: adminState ? "block" : "none" }}
      >
        <button
          aria-label="BTN"
          onClick={() => {
            setId(_id);
            setForm({
              title: title,
              detail: detail,
            });
          }}
          className="bg-tertiary flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
        >
          <EditIcons />
        </button>
        <button
          aria-label="BTN"
          onClick={() => {
            dispatch(deleteContact(_id));
          }}
          className="bg-tertiary flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
        >
          <DeleteIcons />
        </button>
      </div>
    </div>
  );
};

const ContactForm = ({ adminState, setId, setForm, id, form }) => {
  const dispatch = useDispatch();

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    setLoading(true);
    console.log(form);
    e.preventDefault();

    if (id != "0") {
      await dispatch(patchContact(id, form));
    } else {
      await dispatch(postContact(form));
    }
    setId("0");
    setForm({
      title: "",
      detail: "",
    });

    setLoading(false);
  };
  return (
    <>
      <div
        className={`mt-12 flex md:w-[80%]  xl:flex-row flex-col gap-10 overflow-hidden`}
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
              <span className="text-white font-medium mb-4">Title</span>
              <input
                type="text"
                name="name"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Phone  Number/Email Address"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Detail</span>
              <input
                type="text"
                name="name"
                value={form.detail}
                onChange={(e) => setForm({ ...form, detail: e.target.value })}
                placeholder="..."
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

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
export default SectionWrapper(LetsTalk);
