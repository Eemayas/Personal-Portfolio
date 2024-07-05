import React from "react";
import Image from "next/image";
import { ProfilePicPath } from "@/constants";

const ProfileAvatars: React.FC = React.memo(() => {
  return (
    <div className="w-full  flex justify-center items-center  md:w-80">
      <Image
        src={ProfilePicPath}
        alt="Profile Pic"
        width={150}
        height={150}
        loading="eager"
        className="shadow-slate-500 shadow-md md:w-72 md:h-64 aspect-square rounded-2xl bg-center bg-cover duration-500 object-cover"
        priority
      />
    </div>
  );
});

ProfileAvatars.displayName = "ProfileAvatars";
export default ProfileAvatars;
