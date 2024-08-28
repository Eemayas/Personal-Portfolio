import React from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import ProfileAvatars from "./components/ProfileAvatars";
import { Bio, ProfilePic2Path } from "@/constants";
import { SectionWrapper } from "@/lib/hoc";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";

const About: React.FC = () => {
  const { bios } = useSelector((state: RootState) => state.bioReducer);
  const adminState = useSelector((state: RootState) => state.adminReducer);

  return (
    <>
      <motion.div initial="hidden" animate="show" variants={textVariant()}>
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
      {adminState && <AboutEditForm formI={bios} />}
    </>
  );
};

export default SectionWrapper(About, "about");
