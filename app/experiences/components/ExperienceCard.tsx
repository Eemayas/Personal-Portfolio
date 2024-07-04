import React from "react";
import Image from "next/image";
import { TExperience } from "../types";
import VerticalTimelineElement from "@/components/VerticalTimeline/VerticalTimelineElement";
import { DeleteIcons, EditIcons } from "@/components/social-icons/icons";
import { deleteExperiences } from "../slices/experiencesSlices";
import store from "@/app/store";

interface ExperienceCardProps {
  experience: TExperience;
  adminState?: boolean;
  setForm: (form: TExperience) => void;
  setId: (id: string) => void;
  _id: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  adminState = false,
  setForm,
  setId,
  _id,
}) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{ background: "transparent", border: "0px" }}
      contentArrowclassName="border-r-7 border-red-900"
      contentClassName="rounded-2xl shadow-card dark:shadow-card-dark"
      className={"m-0 p-0 "}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full bg-background-dark rounded-full">
          <Image
            width={240}
            height={240}
            loading="lazy"
            src={experience.iconSrc}
            alt={experience.company_name}
            className="w-[80%] h-[80%] object-contain rounded-full"
          />
        </div>
      }
    >
      <div key="experience-content">
        <h3 className="text-[20px] font-bold">{experience.title}</h3>
        <p className="font-semibold text-[16px]" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <ul className="m-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
      {adminState && (
        <div className="flex items-end flex-col justify-normal xs:justify-end">
          <button
            aria-label="Edit"
            onClick={() => {
              setId(_id!);
              setForm(experience);
            }}
            className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
          >
            <EditIcons />
          </button>
          <button
            aria-label="Delete"
            onClick={() => {
              store.dispatch(deleteExperiences(_id!));
            }}
            className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
          >
            <DeleteIcons />
          </button>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
