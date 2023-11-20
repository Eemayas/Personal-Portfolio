import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "@/lib/hoc";
import { textVariant } from "@/lib/utils/motion";
import { styles } from "@/app/style";
import Image from "next/image";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            width={240}
            height={240}
            loading="lazy"
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain "
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold "></h3>{" "}
        {experience.title}
        <p
          className="text-secondary font-semibold text-[16px]"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="m-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => {
          return (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          );
        })}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so Far</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return <ExperienceCard key={index} experience={experience} />;
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
