import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Project } from "../types";
import store from "@/app/store";
import { patchProject, postProject } from "../slices/projectSlice";
import { slideIn } from "@/lib/utils/motion";
import InputField from "@/components/InputField";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";

interface ProjectFormProps {
  adminState: boolean;
  setId: React.Dispatch<React.SetStateAction<string>>;
  form: Project;
  setForm: React.Dispatch<React.SetStateAction<Project>>;
  id: string;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
  adminState,
  setId,
  form,
  setForm,
  id,
}) => {
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (id !== "0") {
      await store.dispatch(patchProject({ id, updatedProject: form }));
    } else {
      await store.dispatch(postProject(form));
    }
    setId("0");
    setForm({
      name: "",
      description: "",
      tags: [],
      image: "",
      source_code_link: "",
      websitelinks: "",
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
          className="my-12 flex-[0.75] green-pink-gradient p-[2px] rounded-2xl shadow-card dark:shadow-card-dark "
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" flex flex-col gap-8 dark:bg-background-dark bg-background-light p-5 rounded-[14px]"
          >
            <InputField
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Project Name"
              label="Project Name"
              required
            />
            <InputField
              type="textarea"
              name="description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              placeholder="Project description"
              label="Project Descripton"
              required
            />
            <InputField
              type="text"
              name="tags"
              value={form.tags.join(",")}
              onChange={(e) =>
                setForm({ ...form, tags: e.target.value.split(",") })
              }
              placeholder="#flutter,#MongoDB"
              label="Project Tags"
              required
            />
            <InputField
              type="url"
              name="source_code_link"
              value={form.source_code_link}
              onChange={(e) =>
                setForm({ ...form, source_code_link: e.target.value })
              }
              placeholder="https://github.com/"
              label="Github Links"
              required
            />
            <InputField
              type="url"
              name="websitelinks"
              value={form.websitelinks}
              onChange={(e) =>
                setForm({ ...form, websitelinks: e.target.value })
              }
              placeholder="https://www.example.com/"
              label="Website Links"
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

export default ProjectForm;
