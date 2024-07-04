import React from "react";
import Image from "next/image";
import { ProfilePicPath } from "@/constants";

const ProfileAvatars: React.FC = () => {
  return (
    <div className="w-full h-60 flex justify-center items-center md:h-80 md:w-80">
      <div className="w-60 relative flex justify-center items-center md:w-full h-full">
        <Image
          src={ProfilePicPath}
          alt="Profile Pic"
          width={150}
          height={150}
          loading="eager"
          className="shadow-slate-500 shadow-md w-60 h-60 aspect-square rounded-2xl bg-center bg-cover duration-500 object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileAvatars;
