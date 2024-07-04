"use client";
import { useCallback, useState } from "react";
import { fetchExperiences } from "./slices/experiencesSlices";
import store, { RootState } from "../store";
import { useSelector } from "react-redux";
import IntersectionObserverComponent from "@/components/IntersectionObserverComponent";
import { motion } from "framer-motion";
import { TExperience } from "./types";
import { textVariant } from "@/lib/utils/motion";
import { styles } from "../style";
import VerticalTimeline from "@/components/VerticalTimeline/VerticalTimeline";
import ExperienceCard from "./components/ExperienceCard";
import ExperienceEditForm from "./components/ExperienceEditForm";
import { SectionWrapper } from "@/lib/hoc";
import { experiencess } from "@/constants";
import "@/components/VerticalTimeline/style.min.css";

const Experience: React.FC = () => {
  const adminState = useSelector((state: RootState) => state.adminReducer);
  const [form, setForm] = useState<TExperience>({
    title: "",
    company_name: "",
    iconSrc: "",
    iconBg: "",
    date: "",
    points: [],
  });
  const [id, setId] = useState("0");

  const [hasFetched, setHasFetched] = useState(false);

  const fetchData = useCallback(async () => {
    if (!hasFetched) {
      await store.dispatch(fetchExperiences());
      setHasFetched(true);
    }
  }, [store.dispatch, hasFetched]);

  const { experiences } = useSelector(
    (state: RootState) => state.experiencesReducer
  );

  return (
    <IntersectionObserverComponent onIntersect={fetchData}>
      <motion.div initial="hidden" animate="show" variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so Far</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <div className="mt-20 flex flex-col ">
        <VerticalTimeline animate layout="2-columns" lineColor={"#bc13fe"}>
          {experiencess.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              setForm={setForm}
              setId={setId}
              _id={experience._id!}
            />
          ))}
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              adminState={adminState}
              setForm={setForm}
              setId={setId}
              _id={experience._id!}
            />
          ))}
        </VerticalTimeline>
      </div>
      <ExperienceEditForm
        adminState={adminState}
        setId={setId}
        id={id}
        form={form}
        setForm={setForm}
      />
    </IntersectionObserverComponent>
  );
};

export default SectionWrapper(Experience, "work");
