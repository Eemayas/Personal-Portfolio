import React from "react";
import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/react";
import { textVariant } from "@/lib/utils/motion";

interface ProfileAvatarsProps {
  imgsrc: string;
}

const ProfileAvatars: React.FC<ProfileAvatarsProps> = ({ imgsrc }) => {
  return (
    <motion.div
      variants={textVariant()}
      className="w-full h-60 flex justify-center items-center md:h-80 md:w-80"
    >
      <div className="w-60 relative flex justify-center items-center md:w-full h-full">
        <Avatar
          style={{ height: "80%", width: "80%" }}
          className="border-4 border-transparent animate-circle-rotate"
          src={imgsrc}
          alt={"profile Pic"}
        />
        <div className="absolute w-full h-full border-t-4 border-b-4 border-t-lime-500 border-b-blue-500 border-opacity-50 rounded-full animate-spin-right"></div>
        <div className="absolute w-[85%] h-[85%] border-l-4 border-r-4 border-l-[#ff0000] border-r-[#ff8000] border-opacity-50 rounded-full animate-spin-left"></div>
      </div>
    </motion.div>
  );
};

export default ProfileAvatars;