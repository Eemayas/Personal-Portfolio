"use client";
import store from "../store";
import { fetchSocialMedia } from "./Contact/slices/socialMediaSlice";
import { fetchContact } from "./letsTalk/slices/contactSlice";
import { useCallback, useState } from "react";
import Contact from "./Contact/Contact";
import IntersectionObserverComponent from "@/components/IntersectionObserverComponent";
import LetSTalk from "./letsTalk";
const ContactPage = () => {
  const [hasFetched, setHasFetched] = useState(false);

  const fetchData = useCallback(async () => {
    if (!hasFetched) {
      await store.dispatch(fetchContact());
      await store.dispatch(fetchSocialMedia());
      setHasFetched(true);
    }
  }, [store.dispatch, hasFetched]);

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
