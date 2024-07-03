"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SectionWrapper } from "@/lib/hoc";
import { RootState } from "@/app/store";
import { technologies } from "@/constants";
import SkillsCard from "./components/SkillsCard";
import SkillEditForm from "./components/SkillEditForm";
import { TBioSkill } from "./types";

const SkillSection: React.FC = () => {
  const [form, setForm] = useState<TBioSkill>({ title: "", selectedImage: "" });
  const [id, setId] = useState("0");
  const { bioSkills } = useSelector((state: RootState) => state.skillreducer);
  const adminState = useSelector((state: RootState) => state.AdminReducer);

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <SkillsCard
            index={index}
            key={technology.name}
            selectedImage={technology.icon}
            title={technology.name}
          />
        ))}
        {bioSkills.length
          ? bioSkills.map((technology, index) => (
              <SkillsCard
                adminState={adminState}
                setForm={setForm}
                setId={setId}
                _id={technology._id}
                index={technologies.length + index}
                key={technology.title}
                selectedImage={technology.selectedImage}
                title={technology.title}
              />
            ))
          : ""}
      </div>
      <SkillEditForm
        adminState={adminState}
        setId={setId}
        id={id}
        form={form}
        setForm={setForm}
      />
    </>
  );
};

export default SectionWrapper(SkillSection, "tech");
