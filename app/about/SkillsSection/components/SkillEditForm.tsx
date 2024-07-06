import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import store from "@/app/store";
import { patchBioSkill, postBioSkill } from "../slices/skillSlice";
import { TBioSkill } from "../types";
import { slideIn } from "@/lib/utils/motion";
import InputField from "@/components/InputField";

interface SkillEditFormProps {
  setId: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  form: TBioSkill;
  setForm: React.Dispatch<React.SetStateAction<TBioSkill>>;
}

const SkillEditForm: React.FC<SkillEditFormProps> = ({
  setId,
  id,
  form,
  setForm,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (id !== "0") {
      await store.dispatch(patchBioSkill({ id, updatedBioSkill: form }));
    } else {
      await store.dispatch(postBioSkill(form));
    }
    setId("0");
    setForm({ title: "", selectedImage: "" });
    setLoading(false);
  };

  return (
    <div className=" flex md:w-[80%] xl:flex-row flex-col gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={"show"}
        variants={slideIn("left", "tween", 0.2, 1)}
        className="my-12 flex-[0.75] bg-black-100 green-pink-gradient p-[2px] rounded-2xl shadow-card dark:shadow-card-dark "
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=" flex flex-col gap-8 dark:bg-background-dark bg-background-light p-5 rounded-[14px]"
        >
          <InputField
            label="Title"
            type="text"
            name="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="C/C++/Flutter/...."
            required
          />
          <InputField
            label="Select an Image"
            type="file"
            name="selectedImage"
            value={form.selectedImage}
            placeholder="Upload a logo"
            setForm={setForm}
            form={form}
            onChange={(e) =>
              setForm({ ...form, selectedImage: e.target.value })
            }
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
    </div>
  );
};
export default SkillEditForm;
