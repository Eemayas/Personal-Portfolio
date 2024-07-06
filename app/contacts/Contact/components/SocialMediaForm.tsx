import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/utils/motion";
import InputField from "@/components/InputField";
import "css/tailwind.css";
import { patchSocialMedia, postSocialMedia } from "../slices/socialMediaSlice";
import store from "@/app/store";
import { TSocialMediaContact } from "../types";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";

interface SocialMediaFormProps {
  adminState: boolean;
  setId: React.Dispatch<React.SetStateAction<string>>;
  form: TSocialMediaContact;
  setForm: React.Dispatch<React.SetStateAction<TSocialMediaContact>>;
  id: string;
}

const SocialMediaForm: React.FC<SocialMediaFormProps> = ({
  adminState,
  setId,
  form,
  setForm,
  id,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    if (id !== "0") {
      await store.dispatch(patchSocialMedia({ id, updatedSocialMedia: form }));
    } else {
      await store.dispatch(postSocialMedia(form));
    }
    setId("0");
    setForm({
      name: "",
      logo: "",
      links: "",
    });

    setLoading(false);
  };

  return (
    adminState && (
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
                label="Name"
                type="text"
                name="name"
                value={form.name}
                placeholder="Facebook/Twitter"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <InputField
                label="Links"
                type="url"
                name="links"
                value={form.links}
                placeholder="https://www.facebook.com/"
                onChange={(e) => setForm({ ...form, links: e.target.value })}
                required
              />
              <InputField
                label="Select a Logo"
                type="file"
                name="logo"
                value={form.logo}
                placeholder="Upload a logo"
                setForm={setForm}
                form={form}
                onChange={(e) => setForm({ ...form, links: e.target.value })}
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
        </DisableAnimationOnMobile>{" "}
      </div>
    )
  );
};

export default SocialMediaForm;
