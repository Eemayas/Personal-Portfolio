import React from "react";
import { SectionWrapper } from "../../lib/hoc";
import { styles } from "@/app/style";
import { contacts } from "@/constants";
import ContactCard from "./components/ContactCard";
import ProfileAvatars from "./components/ProfileAvatars";
import TypeAnimationComp from "./components/TypeAnimationComp";
import UpDownCircle from "./components/UpDownCircle";

const Hero: React.FC = () => {
  return (
    <section className="-mt-10 mx-auto">
      <div
        className={`bg-opacity-10 backdrop-blur-2xl rounded-[50px] drop-shadow-lg w-full h-fit md:min-h-[80%] max-w-7xl mx-auto flex flex-col-reverse md:flex-row p-6 md:p-20 gap-5 items-center border-transparent  bg-white`}
      >
        {/* animate-circle-rotate */}
        <div>
          <div
            className={`inset-0 md:w-[60%] w-full mx-auto flex flex-row items-center justify-center gap-5`}
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
                <TypeAnimationComp
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
                />
              </p>
            </div>
          </div>
          <div className="pt-9 flex flex-row flex-wrap justify-center gap-5 md:gap-10">
            {contacts.map((contact, index) => (
              <ContactCard
                index={index}
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
            <UpDownCircle />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "Hero");
