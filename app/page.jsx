"use client";
import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import About2 from "@/components/About2";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Feedbacks from "@/components/Feedbacks";
import LetSTalk from "@/components/Let'sTalk";
import Contact from "@/components/Contact";

import { fetchSocialMedia } from "@/lib/action/socialMediaAction";
import { fetchBio } from "@/lib/action/bioAction";
import { fetchBioCard } from "@/lib/action/bioCardAction";
import { fetchBioSkill } from "@/lib/action/bioSkillAction";
import { fetchProject } from "@/lib/action/projectAction";
import { fetchContact } from "@/lib/action/contactAction";
import { fetchTestimonial } from "@/lib/action/testinomialAction";
import { fetchExperience } from "@/lib/action/experiencesAction";
import { IS_ADMIN } from "@/lib/constant";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: IS_ADMIN, payload: true });
    dispatch(fetchBio());
    dispatch(fetchBioCard());
    dispatch(fetchBioSkill());
    dispatch(fetchProject());
    dispatch(fetchContact());
    dispatch(fetchSocialMedia());
    dispatch(fetchTestimonial());
    dispatch(fetchExperience());
  }, [dispatch]);
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div>
          <div className=" bg-cover bg-no-repeat bg-center custom-background ">
            {" "}
            <NavBar />
            <Hero />
          </div>

          {/* <div className=" absolute left-4 top-16">
            <h1 className="text-red-700 xs:block">xs</h1>
            <h1 className="text-red-700 sm:block hidden ">sm</h1>
            <h1 className="text-red-700 md:block hidden">md</h1>
            <h1 className="text-red-700 lg:block hidden">lg</h1>
          </div> */}

          <About />
          <About2 />
          <Experience />
          <Skills />
          <Projects />
          <Feedbacks />
          <div className="relative z-0 bg-primary">
            <LetSTalk />
            <Contact />
          </div>
        </div>
        {/* <div className="fixed bottom-5 right-5">
          <Popup />
        </div> */}
      </div>
    </>
  );
}
