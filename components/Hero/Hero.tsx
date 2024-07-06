"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { SectionWrapper } from "../../lib/hoc";
import { styles } from "@/app/style";
import { contacts } from "@/constants";
import ContactCard from "./components/ContactCard";
import ProfileAvatars from "./components/ProfileAvatars";
import { DisableAnimationOnMobile } from "../DisableAnimationOnMobile";

const Hero: React.FC = () => {
  return (
    <section className="mt-20 md:mt-10 mx-auto">
      <div
        className={`bg-opacity-10 backdrop-blur-2xl rounded-[50px] drop-shadow-lg w-full h-fit md:min-h-[80%] max-w-7xl mx-auto flex flex-col-reverse md:flex-row p-6 md:p-20 gap-5 items-center border-transparent animate-circle-rotate bg-white`}
      >
        <div className="m-0 w-[60%]">
          <div
            className={`inset-0 sm:w-[60%] mx-auto flex flex-row items-center justify-center gap-5`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <div>
              <h1 className={`${styles.heroHeadText}`}>
                Hi, I'm{" "}
                <span className="text-[#915eff] ">Prashant Manandhar</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 `}>
                {/* <TypeAnimation
                  sequence={[
                    "Flutter Developer..",
                    1000,
                    "React Developer..",
                    1000,
                    "Web Developer..",
                    1000,
                  ]}
                  cursor={true}
                  repeat={Infinity}
                  wrapper="span"
                /> */}
              </p>
            </div>
          </div>
          <div className="pt-9 flex flex-row flex-wrap justify-center gap-5 md:gap-10">
            {contacts.map((contact, index) => (
              <ContactCard
                key={`contacts-${index}`}
                name={contact.name}
                links={contact.links}
                logo={contact.logo}
              />
            ))}
          </div>
        </div>

        <ProfileAvatars />
      </div>
      <div className="mt-2 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to About Section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 dark:border-secondarys-dark border-secondarys-light flex justify-center items-start p-2">
            <DisableAnimationOnMobile>
              <motion.div
                initial="hidden"
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  reportType: "loop",
                }}
                className="w-3 h-3 rounded-full dark:bg-secondarys-dark bg-secondarys-light mb-1"
              />{" "}
            </DisableAnimationOnMobile>
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "Hero");
