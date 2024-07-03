"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { SectionWrapper } from "@/lib/hoc";
import { motion } from "framer-motion";
import IntersectionObserverComponent from "@/components/IntersectionObserverComponent";
import { projects as defaultProjects } from "@/constants";
import { Project } from "./types";
import store, { RootState } from "../store";
import { fadeIn, textVariant } from "@/lib/utils/motion";
import { fetchProject } from "./slices/projectSlice";
import { styles } from "../style";
import ProjectForm from "./components/ProjectForm";
import ProjectCard from "./components/ProjectCard";

const Projects: React.FC = () => {
  const [hasFetched, setHasFetched] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
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
  const adminState = useSelector((state: RootState) => state.AdminReducer);

  const projectDescription = `Below are a few selected projects that demonstrate my skills and experience, showcasing real-world examples of my work. Each project is accompanied by a brief description, as well as links to code repositories and live demos. These projects serve as tangible evidence of my ability to tackle intricate challenges, adapt to various technologies, and efficiently handle project management`;

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
    setDisplayedProjects(
      isHomePage
        ? projects.length
          ? projects.slice(0, 3)
          : defaultProjects.slice(0, 3)
        : projects.length
        ? projects
        : defaultProjects
    );
  }, [isHomePage, projects]);

  return (
    <IntersectionObserverComponent onIntersect={fetchData}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[17px] max-w-3xl leading-[30px]"
        >
          {projectDescription}
        </motion.p>
      </div>
      <motion.div
        variants={textVariant()}
        className="mt-20 flex flex-wrap justify-center gap-7"
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
      <ProjectForm
        adminState={adminState}
        setId={setId}
        form={form}
        setForm={setForm}
        id={id}
      />
    </IntersectionObserverComponent>
  );
};

export default SectionWrapper(Projects, "project");
