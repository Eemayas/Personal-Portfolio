"use client";
import LetSTalk from "./components/Let'sTalk";

import { fetchContact, fetchSocialMedia } from "@/lib/action/index";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Contact from "./Contact/Contact";
const ContactPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchContact());
      await dispatch(fetchSocialMedia());
    };

    // Call the async function
    fetchData();
  }, [dispatch]);
  return (
    <div className="relative z-0 ">
      <LetSTalk />
      <Contact />
    </div>
  );
};

export default ContactPage;
