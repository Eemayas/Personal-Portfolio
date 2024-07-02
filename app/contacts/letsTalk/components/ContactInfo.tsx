import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/utils/motion";
import { Contact } from "../types";
import ContactCard from "./ContactCard";

interface ContactInfoProps {
  adminState: boolean;
  contacts: Contact[];
  setForm: React.Dispatch<React.SetStateAction<Contact>>;
  setId: (id: string) => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  adminState,
  contacts,
  setForm,
  setId,
}) => {
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
          {...contact}
          adminState={adminState}
        />
      ))}
    </motion.div>
  ) : (
    <h1>No Contacts</h1>
  );
};

export default ContactInfo;
