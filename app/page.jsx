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

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";

require("dotenv").config();

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: IS_ADMIN, payload: false });
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
      <Popup />
    </div>
  );
}
const Popup = () => {
  const bios = useSelector((state) => state.BioReducer);
  const adminState = useSelector((state) => state.AdminReducer);
  const dispatch = useDispatch();
  const formRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [adminPin, setAdminPin] = useState("");
  const [loading, setLoading] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    console.log(adminPin);
    if (adminPin == bios[0].password) {
      dispatch({ type: IS_ADMIN, payload: !adminState });
    }
    setAdminPin("");
    setShowPopup(!showPopup);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5">
      <div className="flex flex-col items-center justify-center ">
        <button
          onClick={togglePopup}
          className="bg-transparent text-transparent hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-full"
        >
          .
        </button>
        {showPopup && (
          //
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div
              className={` flex  bg-black-100 p-8 rounded-2xl xl:flex-row flex-col gap-10 overflow-hidden`}
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className=" flex flex-col gap-8"
              >
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">PIN</span>
                  <input
                    type="text"
                    name="name"
                    value={adminPin}
                    onChange={(e) => {
                      setAdminPin(e.target.value);
                    }}
                    placeholder="PIN"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                    required
                  />
                </label>
                <div className="flex flex-row gap-4">
                  <button
                    type="submit"
                    className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                  <button
                    className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                    onClick={() => setShowPopup(!showPopup)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
