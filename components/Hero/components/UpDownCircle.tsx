"use client";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";
import { motion } from "framer-motion";

const UpDownCircle = () => {
  return (
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
      />
    </DisableAnimationOnMobile>
  );
};

export default UpDownCircle;
