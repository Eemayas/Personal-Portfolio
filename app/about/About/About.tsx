"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { styles } from "@/app/style";
import { RootState } from "@/app/store";
import { fadeIn, textVariant } from "@/lib/utils/motion";
import ProfileAvatars from "./components/ProfileAvatars";
import { Bio, ProfilePic2Path } from "@/constants";
import AboutEditForm from "./components/AboutEditForm";
import { SectionWrapper } from "@/lib/hoc";

const About: React.FC = () => {
  const { bios } = useSelector((state: RootState) => state.bioReducer);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <div className="md:flex-row flex flex-col-reverse justify-around">
        <motion.p
          className="md:w-[50%] mt-4 w-[100%] text-justify text-text-light dark:text-text-dark text-[17px]  leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          {!bios.length ? Bio : bios[0].bio}
        </motion.p>

        <ProfileAvatars
          imgsrc={bios.length ? bios[0].selectedImage : ProfilePic2Path}
        />
      </div>
      <AboutEditForm formI={bios} />
    </>
  );
};

export default SectionWrapper(About, "about");
