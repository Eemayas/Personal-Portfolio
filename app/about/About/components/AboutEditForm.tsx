import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import store, { RootState } from "@/app/store";
import { patchBio, postBio } from "../slices/bioSlice";
import { Bio } from "../types";
import { slideIn } from "@/lib/utils/motion";
import InputField from "@/components/InputField";

interface FormProps {
  formI: Bio[];
}

const AboutEditForm: React.FC<FormProps> = ({ formI }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const adminState = useSelector((state: RootState) => state.AdminReducer);
  const [form, setForm] = useState<Bio>({
    bio: "",
    selectedImage: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (formI.length === 0) {
      await store.dispatch(postBio(form));
    } else {
      await store.dispatch(patchBio({ id: formI[0]._id, updatedBio: form }));
    }

    setLoading(false);
  };

  useEffect(() => {
    if (formI.length !== 0) {
      setForm({
        bio: formI[0].bio,
        selectedImage: formI[0].selectedImage,
      });
    }
  }, [formI]);

  return (
    adminState && (
      <div className=" flex md:w-[80%] xl:flex-row flex-col gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="my-12 flex-[0.75] green-pink-gradient p-[2px] rounded-2xl shadow-card dark:shadow-card-dark "
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" flex flex-col gap-8 dark:bg-background-dark bg-background-light p-5 rounded-[14px]"
          >
            <InputField
              label="Bio"
              type="textarea"
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
              placeholder="What you want to say?"
              required
              name={"bio"}
            />
            <InputField
              label="Select an Image"
              type="file"
              name="selectedImage"
              value={form.selectedImage}
              placeholder="Upload a Image"
              setForm={setForm}
              form={form}
              onChange={(e) =>
                setForm({ ...form, selectedImage: e.target.value })
              }
              required
            />
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    )
  );
};

export default AboutEditForm;
