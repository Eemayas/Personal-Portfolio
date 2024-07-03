"use client";
import { SectionWrapper } from "@/lib/hoc";
import React, { useEffect, useRef, useState } from "react";
// import {
//   VerticalTimeline,
// VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/utils/motion";
import { styles } from "@/app/style";
import Image from "next/image";
import { experiences } from "@/constants";
import VerticalTimelineElement from "@/components/VerticalTimeline/VerticalTimelineElement";
import VerticalTimeline from "@/components/VerticalTimeline/VerticalTimeline";
import "@/components/VerticalTimeline/style.min.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{ background: "transparent", border: "0px" }}
      contentArrowclassName="border-r-7 border-red-900"
      contentClassName="rounded-2xl shadow-card dark:shadow-card-dark"
      className={"m-0 p-0 "}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full bg-background-dark rounded-full">
          <Image
            width={240}
            height={240}
            loading="lazy"
            src={experience.iconSrc}
            alt={experience.company_name}
            className="w-[80%] h-[80%] object-contain rounded-full"
          />
        </div>
      }
    >
      <div key="experience-content">
        <h3 className="text-[20px] font-bold">{experience.title}</h3>
        <p className="font-semibold text-[16px]" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <ul className="m-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
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
        <VerticalTimeline animate layout="2-columns" lineColor={"#bc13fe"}>
          {experiences.map((experience, index) => {
            return <ExperienceCard key={index} experience={experience} />;
          })}
        </VerticalTimeline>
      </div>{" "}
    </>
  );
};

export default SectionWrapper(Experience, "work");
