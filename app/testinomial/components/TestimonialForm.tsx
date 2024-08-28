import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/utils/motion";
import store from "@/app/store";
import { patchTestimonial, postTestimonial } from "../slices/testimonialSlices";
import { TTestimonial } from "../types";
import InputField from "@/components/InputField";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";

interface TestimonialFormProps {
  setId: React.Dispatch<React.SetStateAction<string>>;
  form: TTestimonial;
  setForm: React.Dispatch<React.SetStateAction<TTestimonial>>;
  id: string;
}
const TestimonialForm: React.FC<TestimonialFormProps> = ({
  setId,
  form,
  setForm,
  id,
}) => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (id !== "0") {
      await store.dispatch(patchTestimonial({ id, updatedTestimonial: form }));
    } else {
      await store.dispatch(postTestimonial(form));
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

  return (
    <div className=" flex md:w-[80%] xl:flex-row flex-col gap-10 overflow-hidden">
      <DisableAnimationOnMobile>
        <motion.div
          initial="hidden"
          animate="show"
          variants={slideIn("left", "tween", 0.2, 1)}
          className="my-12 flex-[0.75] bg-black-100 green-pink-gradient p-[2px] rounded-2xl shadow-card dark:shadow-card-dark "
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" flex flex-col gap-8 dark:bg-background-dark bg-background-light p-5 rounded-[14px]"
          >
            <InputField
              label="Person's Name"
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Person's Names"
              required
            />
            <InputField
              label="Testimonials"
              type="textarea"
              name="message"
              value={form.testimonial}
              onChange={(e) =>
                setForm({ ...form, testimonial: e.target.value })
              }
              placeholder="What you want to say?"
              required
            />
            <InputField
              label="Designation"
              type="text"
              name="name"
              value={form.designation}
              onChange={(e) =>
                setForm({ ...form, designation: e.target.value })
              }
              placeholder="CTO ,CEO"
              required
            />
            <InputField
              label="Company Name"
              type="text"
              name="name"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="Tesla,Apple"
              required
            />
            <InputField
              label="Select an Image"
              type="file"
              name="image"
              value={form.image}
              placeholder="Upload a image"
              setForm={setForm}
              form={form}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              required
            />

            <button
              aria-label="Submit"
              type="submit"
              className="dark:bg-tertiary bg-tertiarylight py-3 px-8 rounded-xl outline-none w-fit  shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </DisableAnimationOnMobile>
    </div>
  );
};
export default TestimonialForm;
