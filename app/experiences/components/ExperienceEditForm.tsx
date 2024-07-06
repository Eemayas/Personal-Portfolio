import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import store from "@/app/store";
import { TExperience } from "../types";
import { slideIn } from "@/lib/utils/motion";
import InputField from "@/components/InputField";
import { patchExperiences, postExperiences } from "../slices/experiencesSlices";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";

interface ExperienceEditFormProps {
  setId: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  form: TExperience;
  setForm: React.Dispatch<React.SetStateAction<TExperience>>;
}

const ExperienceEditForm: React.FC<ExperienceEditFormProps> = ({
  setId,
  id,
  form,
  setForm,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [point, setPoint] = useState("");

  useEffect(() => {
    setPoint(form.points.join("\n"));
  }, [form]);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    const pointsArray = point
      .split("\n")
      .filter((point) => point.trim() !== "");
    const updatedForm = { ...form, points: pointsArray };
    setForm(updatedForm);
    if (id !== "0") {
      await store.dispatch(
        patchExperiences({ id, updatedExperiences: updatedForm })
      );
    } else {
      await store.dispatch(postExperiences(updatedForm));
    }

    console.log({ form });
    setId("0");
    setForm({
      title: "",
      company_name: "",
      iconSrc: "",
      iconBg: "",
      date: "",
      points: [],
    });
    setLoading(false);
  };

  return (
    <div className="flex md:w-[80%] xl:flex-row flex-col gap-10 overflow-hidden">
      <DisableAnimationOnMobile>
        <motion.div
          initial="hidden"
          animate="show"
          variants={slideIn("left", "tween", 0.2, 1)}
          className="my-12 flex-[0.75] green-pink-gradient p-[2px] rounded-2xl shadow-card dark:shadow-card-dark"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 dark:bg-background-dark bg-background-light p-5 rounded-[14px]"
          >
            <InputField
              label="Title"
              type="text"
              name="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="React.js Developer"
              required
            />
            <InputField
              label="Company Name"
              type="text"
              name="company_name"
              value={form.company_name}
              onChange={(e) =>
                setForm({ ...form, company_name: e.target.value })
              }
              placeholder="Omnecal Pvt. Ltd."
              required
            />
            <InputField
              label="Icon Source"
              type="file"
              name="iconSrc"
              value={form.iconSrc}
              placeholder="Upload a logo"
              setForm={setForm}
              form={form}
              onChange={(e) => setForm({ ...form, iconSrc: e.target.value })}
              required
            />

            <InputField
              label="Icon Background"
              type="text"
              name="iconBg"
              value={form.iconBg}
              onChange={(e) => setForm({ ...form, iconBg: e.target.value })}
              placeholder="#383E56"
              required
            />
            <InputField
              label="Date"
              type="text"
              name="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              placeholder="February 2024 - April 2024"
              required
            />
            <InputField
              label="Points (one per line)"
              type="textarea"
              name="points"
              value={point}
              onChange={(e) => setPoint(e.target.value)}
              placeholder="Developing and maintaining web applications using React.js and other related technologies.\nCollaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products."
              required
            />

            <button
              aria-label="Submit"
              type="submit"
              className="dark:bg-tertiary bg-tertiarylight py-3 px-8 rounded-xl outline-none w-fit shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </DisableAnimationOnMobile>
    </div>
  );
};

export default ExperienceEditForm;
