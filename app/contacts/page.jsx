"use client";
import LetSTalk from "./components/Let'sTalk";
import Contact from "./components/Contact";
import { fetchContact, fetchSocialMedia } from "@/lib/action/index";
import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import IntersectionObserverComponent from "@/components/IntersectionObserverComponent";
const ContactPage = () => {
  const dispatch = useDispatch();
  const [hasFetched, setHasFetched] = useState(false);
  const fetchData = useCallback(async () => {
    if (!hasFetched) {
      await dispatch(fetchContact());
      await dispatch(fetchSocialMedia());
      setHasFetched(true);
    }
  }, [dispatch, hasFetched]);
  return (
    <IntersectionObserverComponent onIntersect={fetchData}>
      <div className="relative z-0 ">
        <LetSTalk />
        <Contact />
      </div>
    </IntersectionObserverComponent>
  );
};

export default ContactPage;
