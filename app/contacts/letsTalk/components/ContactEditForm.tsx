import React, { useRef, FormEvent, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/utils/motion";
import useForm from "../hooks/useForm";
import { Contact } from "../types";
import { patchContact, postContact } from "../slices/contactSlice";
import store from "@/app/store";
import InputField from "@/components/InputField";

interface ContactFormProps {
  adminState: boolean;
  setId: (id: string) => void;
  id: string;
  contactInfoForm: Contact;
}

const ContactEditForm: React.FC<ContactFormProps> = ({
  adminState,
  setId,
  id,
  contactInfoForm,
}) => {
  const { form, setForm, handleChange } = useForm<Contact>(contactInfoForm);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (id !== "0") {
      await store.dispatch(patchContact({ id, updatedContact: form }));
    } else {
      await store.dispatch(postContact(form));
    }

    setId("0");
    setForm({ title: "", detail: "" });
    setLoading(false);
  };

  useEffect(() => {
    setForm(contactInfoForm);
  }, [contactInfoForm]);

  return adminState ? (
    <div className="mt-12 flex md:w-[80%] xl:flex-row flex-col gap-10 overflow-hidden">
      <motion.div
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
            onChange={handleChange}
            placeholder="Phone Number/Email Address"
            required
          />
          <InputField
            label="Detail"
            type="text"
            name="detail"
            value={form.detail}
            onChange={handleChange}
            placeholder="..."
            required
          />
          <button
            aria-label="Submit Button"
            type="submit"
            className="dark:bg-tertiary bg-tertiarylight py-3 px-8 rounded-xl outline-none w-fit  shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  ) : null;
};

export default ContactEditForm;
