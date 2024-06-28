import React from "react";
import { motion } from "framer-motion";

import { styles } from "@/app/style";
import { staggerContainer } from "../utils/motion";
const SectionWrapper = (Components: any, idName: string | undefined) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.001 }}
        // className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        className={`${styles.padding} relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Components />
      </motion.section>
    );
  };

export default SectionWrapper;
