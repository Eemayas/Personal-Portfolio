"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { textVariant } from "@/lib/utils/motion";
import { styles } from "@/app/style";
import { DisableAnimationOnMobile } from "./DisableAnimationOnMobile";

export const SectionTitle = ({ SecondaryTitle, PrimaryTitle }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <DisableAnimationOnMobile>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : {}}
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>{SecondaryTitle}</p>
        <h2 className={styles.sectionHeadText}>{PrimaryTitle}</h2>
      </motion.div>
    </DisableAnimationOnMobile>
  );
};

export const BioDescriptionAnimation = ({ description }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <DisableAnimationOnMobile>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : {}}
        variants={textVariant()}
        className="md:w-[50%] mt-4 w-[100%] text-justify text-text-light dark:text-text-dark text-[17px] leading-[30px]"
      >
        {description}
      </motion.div>
    </DisableAnimationOnMobile>
  );
};

export const DescriptionAnimation = ({ description }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <DisableAnimationOnMobile>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : {}}
        variants={textVariant()}
        className="mt-3 text-[17px] max-w-3xl leading-[30px] "
      >
        {description}
      </motion.div>
    </DisableAnimationOnMobile>
  );
};
