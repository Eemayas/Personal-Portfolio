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
import {
  fetchSocialMedia,
  fetchBio,
  fetchBioCard,
  fetchBioSkill,
  fetchProject,
  fetchContact,
  fetchTestimonial,
  fetchExperience,
  IS_ADMIN,
} from "@/lib/action/index";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, []);
  return isLoading && isHome ? (
    <SplashScreen finishedLoading={() => setIsLoading(false)} />
  ) : (
    <div className="relative z-0 ">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <NavBar />
        <Hero />
      </div>
      <About />
      <About2 />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Feedbacks />
      <div className="relative z-0 ">
        <LetSTalk />
        <Contact />
      </div>
    </div>
  );
}
