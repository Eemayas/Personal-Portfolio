import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/utils/motion";
import { TServiceCard } from "../types";
import store from "@/app/store";
import { patchBioCard, postBioCard } from "../slices/serviceCardSlice";
import InputField from "@/components/InputField";

interface ServiceCardEditFormProps {
  setId: (id: string) => void;
  id: string;
  form: TServiceCard;
  setForm: (form: TServiceCard) => void;
  adminState: boolean;
}

const ServiceCardEditForm: React.FC<ServiceCardEditFormProps> = ({
  setId,
  id,
  form,
  setForm,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (id !== "0") {
      await store.dispatch(patchBioCard({ id, updatedBioCard: form }));
    } else {
      await store.dispatch(postBioCard(form));
    }
    setId("0");
    setForm({ _id: "0", title: "", selectedImage: "" });
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
            placeholder="Web Developer/Flutter Developer/..."
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

export default ServiceCardEditForm;
