import React from "react";
import Image from "next/image";
import { TExperience } from "../types";
import VerticalTimelineElement from "@/components/VerticalTimeline/VerticalTimelineElement";
import { deleteExperiences } from "../slices/experiencesSlices";
import store from "@/app/store";
import dynamic from "next/dynamic";

interface ExperienceCardProps {
  experience: TExperience;
  adminState?: boolean;
  setForm: (form: TExperience) => void;
  setId: (id: string) => void;
  _id: string;
}
// Dynamically import AboutEditForm
const EditAndDeleteButton = dynamic(
  () => import("@/components/EditAndDeleteButton"),
  {
    ssr: false, // Disable server-side rendering for this component
    loading: () => <p>...</p>, // Fallback content while loading
  }
);
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
        <EditAndDeleteButton
          onEditClick={() => {
            setId(_id!);
            setForm(experience);
          }}
          onDeleteClick={() => {
            store.dispatch(deleteExperiences(_id!));
          }}
        />
      )}
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
