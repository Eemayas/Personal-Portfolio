import React from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import ProfileAvatars from "./components/ProfileAvatars";
import { Bio, ProfilePic2Path } from "@/constants";
import { SectionWrapper } from "@/lib/hoc";
import {
  BioDescriptionAnimation,
  SectionTitle,
} from "@/components/TextAnimations";

// Dynamically import AboutEditForm
const AboutEditForm = dynamic(() => import("./components/AboutEditForm"), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <p>Loading...</p>, // Fallback content while loading
});

const About: React.FC = () => {
  const { bios } = useSelector((state: RootState) => state.bioReducer);
  const adminState = useSelector((state: RootState) => state.adminReducer);

  return (
    <>
      <SectionTitle SecondaryTitle={"Introduction"} PrimaryTitle={"Overview"} />
      <div className="md:flex-row flex flex-col-reverse justify-around">
        <BioDescriptionAnimation
          description={!bios.length ? Bio : bios[0].bio}
        />
        <ProfileAvatars
          imgsrc={bios.length ? bios[0].selectedImage : ProfilePic2Path}
        />
      </div>
      {adminState && <AboutEditForm formI={bios} />}
    </>
  );
};

export default SectionWrapper(About, "about");
