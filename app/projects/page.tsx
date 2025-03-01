/** @format */

"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { SectionWrapper } from "@/lib/hoc";
import { motion, AnimatePresence } from "framer-motion";
import IntersectionObserverComponent from "@/components/IntersectionObserverComponent";
import { projects as defaultProjects } from "@/constants";
import { Project } from "./types";
import store, { RootState } from "../store";
import { textVariant } from "@/lib/utils/motion";
import { fetchProject } from "./slices/projectSlice";
import { styles } from "../style";
import ProjectCard from "./components/ProjectCard";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";
import { DescriptionAnimation } from "@/components/TextAnimations";
import dynamic from "next/dynamic";

const ProjectForm = dynamic(() => import("./components/ProjectForm"), {
  ssr: false,
  loading: () => <p>...</p>,
});

const TABS = ["All", "Web Development","React",, "Mobile", "Others"];

const tabVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.3, ease: "easeInOut" } },
};

const Projects: React.FC = () => {
  const [hasFetched, setHasFetched] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [displayedProjects, setDisplayedProjects] =
    useState<Project[]>(defaultProjects);
  const [form, setForm] = useState<Project>({
    name: "",
    description: "",
    tags: [],
    image: "",
    source_code_link: "",
    websitelinks: "",
  });
  const [id, setId] = useState<string>("0");
  const { projects } = useSelector((state: RootState) => state.projectReducer);
  const adminState = useSelector((state: RootState) => state.adminReducer);

  const projectDescription = `Below are a few selected projects that demonstrate my skills and experience, showcasing real-world examples of my work.`;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isHome = !window.location.href.includes("project");
      setIsHomePage(isHome);
    }
  }, []);

  const fetchData = useCallback(async () => {
    if (!hasFetched) {
      await store.dispatch(fetchProject());
      setHasFetched(true);
    }
  }, [hasFetched]);

  useEffect(() => {
    setDisplayedProjects(isHomePage ? projects.slice(0, 3) : projects);
  }, [isHomePage, projects]);

  return (
    <IntersectionObserverComponent onIntersect={fetchData}>
      <DisableAnimationOnMobile>
        <motion.div initial="hidden" animate="show" variants={textVariant()}>
          <p className={styles.sectionSubText}>My work</p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
        </motion.div>
      </DisableAnimationOnMobile>
      <DescriptionAnimation description={projectDescription} />

      <div className="my-4 w-full rounded-md border border-gray-200 bg-tertiarylight text-gray-900 dark:border-gray-500 dark:bg-tertiary dark:text-gray-100">
        <div className="relative right-0">
          <ul
            className="relative flex list-none flex-wrap rounded-md bg-[#1e293b] px-1.5 py-1.5"
            data-tabs="tabs"
            role="list"
          >
            {TABS.map((tab) => (
              <li key={tab} className="z-30 flex-auto text-center">
                <a
                  className={`z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-md border-0 px-0 py-2 text-sm transition-all ease-in-out ${
                    activeTab === tab
                      ? "bg-[#6366f1] text-white shadow"
                      : "text-gray-300"
                  }`}
                  onClick={() => setActiveTab(tab)}
                  data-tab-target=""
                  role="tab"
                  aria-selected={activeTab === tab}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={tabVariants}
          className="mt-10 flex flex-wrap justify-center gap-7"
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard
              adminState={adminState}
              key={`project-${index}`}
              setForm={setForm}
              setId={setId}
              index={index}
              {...project}
            />
          ))}
        </motion.div>
      </AnimatePresence>
      {adminState && (
        <ProjectForm
          adminState={adminState}
          setId={setId}
          form={form}
          setForm={setForm}
          id={id}
        />
      )}
    </IntersectionObserverComponent>
  );
};

export default SectionWrapper(Projects, "project");
