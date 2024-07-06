"use client";
import React, { useCallback, useState } from "react";
import About from "./About/About";
import IntersectionObserverComponent from "@/components/IntersectionObserverComponent";
import { fetchBio } from "./About/slices/bioSlice";
import store from "../store";
import { fetchBioCard } from "./ServiceSection/slices/serviceCardSlice";
import ServiceCardSection from "./ServiceSection";
import { fetchBioSkill } from "./SkillsSection/slices/skillSlice";
import SkillSection from "./SkillsSection";

const AboutPage: React.FC = () => {
  const [hasFetched, setHasFetched] = useState(false);

  const fetchData = useCallback(async () => {
    if (!hasFetched) {
      await store.dispatch(fetchBio());
      await store.dispatch(fetchBioCard());
      await store.dispatch(fetchBioSkill());
      setHasFetched(true);
    }
  }, [store.dispatch, hasFetched]);

  return (
    <IntersectionObserverComponent onIntersect={fetchData}>
      <About />
      <ServiceCardSection />
      <SkillSection />
    </IntersectionObserverComponent>
  );
};

export default AboutPage;
