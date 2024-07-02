"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { SectionWrapper } from "@/lib/hoc";
import { styles } from "@/app/style";
import { textVariant } from "@/lib/utils/motion";
import { contacts } from "@/constants";
import SocialMediaForm from "./components/SocialMediaForm";
import ContactCard from "./components/ContactCard";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    logo: "",
    links: "",
  });
  const [id, setId] = useState("0");
  const socialMedias = useSelector((state) => state.SocialMediaReducer);
  const adminState = useSelector((state) => state.AdminReducer);
  return (
    <>
      <div className=" green-pink-gradient p-[2px] rounded-2xl shadow-card dark:shadow-card-dark">
        <div className="dark:bg-background-dark bg-background-light rounded-[14px]">
          <div className="p-8">
            <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>Get In Touch.</p>
              <h2 className={styles.sectionHeadText}>Contacts</h2>
            </motion.div>
          </div>{" "}
          <div className="flex flex-row flex-wrap justify-center gap-10 pb-10">
            {(socialMedias.length ? socialMedias : contacts).map(
              (socialMedia, index) => (
                <ContactCard
                  adminState={adminState}
                  setForm={setForm}
                  setId={setId}
                  index={index}
                  key={`socialMedia-${index}`}
                  name={socialMedia.name}
                  links={socialMedia.links}
                  logo={socialMedia.logo}
                  _id={socialMedia._id}
                />
              )
            )}
          </div>
        </div>
      </div>
      <SocialMediaForm
        adminState={adminState}
        setId={setId}
        form={form}
        setForm={setForm}
        id={id}
      />
    </>
  );
};

export default SectionWrapper(Contact, "contact");