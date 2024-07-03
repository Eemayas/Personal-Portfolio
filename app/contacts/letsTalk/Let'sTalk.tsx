import React, { useRef, FormEvent, useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { slideIn } from "@/lib/utils/motion";
import { RootState } from "@/app/store";
import { personalDetails } from "@/constants";
import useForm from "./hooks/useForm";
import { Contact, EmailSender } from "./types";
import { styles } from "@/app/style";
import ContactInfo from "./components/ContactInfo";
import ContactEditForm from "./components/ContactEditForm";
import { SectionWrapper } from "@/lib/hoc";
import InputField from "@/components/InputField";

const LetsTalk: React.FC = () => {
  const {
    form: contactInfoForm,
    setForm: setContactInfoForm,
    handleChange: handleChangeContactInfoForm,
  } = useForm<Contact>({
    title: "",
    detail: "",
  });
  const {
    form: letsTalkForm,
    setForm: setLletsTalkFormetsTalkFormForm,
    handleChange: handleletsTalkFormetsTalkFormFormChange,
  } = useForm<EmailSender>({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [id, setId] = useState<string>("0");
  const {
    contacts,
    loading: contactLoading,
    error,
  } = useSelector((state: RootState) => state.contactReducer);
  const adminState = useSelector((state: RootState) => state.AdminReducer);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log(letsTalkForm);
    emailjs
      .send(
        "service_ar5qbfv",
        "template_i630qnb",
        {
          from_name: letsTalkForm.from_name,
          from_email: letsTalkForm.from_email,
          to_email: "prashantmanandhar2002@gmail.com",
          message: letsTalkForm.message,
        },
        "RPLFkx6l9sVg9jnxP"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you!! I will get back to you as soon as possible.");
          setLletsTalkFormetsTalkFormForm({
            from_email: "",
            from_name: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <>
      <div
        className={`xl:mt-6 flex md:flex-row flex-col gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] green-pink-gradient p-[2px] rounded-2xl mb-10"
        >
          <div className="p-[30px] rounded-[14px] dark:bg-background-dark bg-background-light shadow-card dark:shadow-card-dark">
            <p className={styles.sectionSubText}>Get in touch</p>
            <h2 className={styles.sectionHeadText}>Let's Talk.</h2>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <InputField
                label="Your Name"
                type="text"
                name="from_name"
                value={letsTalkForm.from_name.toString()}
                onChange={handleletsTalkFormetsTalkFormFormChange}
                placeholder="What's your good name?"
                required
              />
              <InputField
                label="Your email"
                type="email"
                name="from_email"
                value={letsTalkForm.from_email.toString()}
                onChange={handleletsTalkFormetsTalkFormFormChange}
                placeholder="What's your email address?"
                required
              />
              {/* <label className="flex flex-col">
                <span className="font-medium mb-4">Your email</span>
                <input
                  type="email"
                  name="from_email"
                  value={letsTalkForm.from_email.toString()}
                  onChange={handleletsTalkFormetsTalkFormFormChange}
                  placeholder="What's your email address?"
                  className="dark:bg-tertiary bg-tertiarylight py-4 px-6 rounded-lg outline-none border-none font-medium"
                  required
                />
              </label> */}
              <label className="flex flex-col">
                <span className="font-medium mb-4">Your Message</span>
                <textarea
                  rows={7}
                  name="message"
                  value={letsTalkForm.message.toString()}
                  onChange={handleletsTalkFormetsTalkFormFormChange}
                  placeholder="What you want to say?"
                  className="dark:bg-tertiary bg-tertiarylight py-4 px-6 rounded-lg outline-none border-none font-medium"
                  required
                />
              </label>
              <button
                aria-label="BTN"
                type="submit"
                className="dark:bg-tertiary bg-tertiarylight py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </motion.div>
        {contacts.length ? (
          <ContactInfo
            adminState={adminState}
            contacts={contacts}
            setForm={setContactInfoForm}
            setId={setId}
          />
        ) : (
          <ContactInfo
            adminState={adminState}
            contacts={personalDetails}
            setForm={setContactInfoForm}
            setId={setId}
          />
        )}
      </div>
      <ContactEditForm
        adminState={adminState}
        setId={setId}
        id={id}
        contactInfoForm={contactInfoForm}
      />
    </>
  );
};

export default SectionWrapper(LetsTalk, "LetsTalk");
