"use client";
import React, { useState, useEffect } from "react";
import anime from "animejs";
import Image from "next/image";
import { ProfilePic2Path } from "@/constants";
import { TypeAnimation } from "react-type-animation";
import { styles } from "@/app/style";
import { Avatar } from "@nextui-org/react";
const SplashScreen = ({ finishedLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  // const animate = () => {
  //   const loader = anime.timeline({
  //     complete: () => finishedLoading(),
  //   });
  //   loader
  //     .add({
  //       targets: "#logo",
  //       delay: 0,
  //       scale: 1,
  //       duration: 300,
  //       easing: "cubicBezier(.5, .05, .1, .3)",
  //     })

  //     .add({
  //       targets: "#logo",
  //       delay: 0,
  //       scale: 2,
  //       duration: 300,
  //       easing: "spring(1, 80, 10, 0)",
  //       // easing: "easeInOutSine",
  //     });
  // };

  useEffect(() => {
    // const timeout = setTimeout(() => setIsMounted(true), 15);
    const timeout = setTimeout(() => finishedLoading(), 2000);
    // animate();
    // finishedLoading();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <Image
        loading="lazy"
        width={120}
        height={120}
        id="logo"
        src={ProfilePic2Path}
        alt={"profile Pic"}
        className="rounded-full border-4 border-[#915eff]"
      />
      {/* <Avatar
        style={{ height: "120px", width: "120px", marginBottom: "125px" }}
        className=" border-4 border-[#915eff] "
        id="logo"
        src={ProfilePic2Path}
        alt={"profile Pic"}
      /> */}
      <span
        className={`lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] text-[#915eff] text-center `}
      >
        <TypeAnimation
          sequence={["Prashant Manandhar", 1000]}
          wrapper="span"
          cursor={false}
        />
      </span>
      <span className="font-medium lg:text-[20px] sm:text-[21px] xs:text-[15px] text-[11px] text-[#915eff] text-center">
        <TypeAnimation
          sequence={["Eemayas", 1000]}
          wrapper="span"
          cursor={false}
        />
      </span>
      <span
        className={`lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[20px] text-[#915eff] text-center `}
      >
        <TypeAnimation
          sequence={["Computer Engineer", 1000]}
          wrapper="span"
          cursor={false}
        />
      </span>
    </div>
  );
};

export default SplashScreen;
