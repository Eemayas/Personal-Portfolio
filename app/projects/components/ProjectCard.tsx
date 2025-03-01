import React from "react";
import Image from "next/image";
import { Project } from "../types";
import store from "@/app/store";
import { deleteProject } from "../slices/projectSlice";
import dynamic from "next/dynamic";
import cn from "classnames";
import SocialIcon from "@/components/social-icons";

const EditAndDeleteButton = dynamic(
  () => import("@/components/EditAndDeleteButton"),
  {
    ssr: false,
    loading: () => <p>...</p>,
  },
);

interface ProjectCardProps extends Project {
  index: number;
  adminState: boolean;
  setForm: React.Dispatch<React.SetStateAction<Project>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  setForm,
  adminState,
  setId,
  _id,
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  websitelinks,
}) => {
  const tagColorList = [
    "green-text-gradient",
    "pink-text-gradient",
    "orange-text-gradient",
  ];

  return (
    <div className="green-pink-gradient w-[300px] rounded-2xl p-[2px] shadow-card dark:shadow-card-dark sm:w-[360px]">
      <div className="flex h-full w-full flex-col rounded-[14px] bg-tertiarylight p-[18px] dark:bg-tertiary">
        {/* Image with Hover Effect */}
        <div className="group relative h-[230px] w-full overflow-hidden rounded-2xl">
          <Image
            width={240}
            height={240}
            loading="lazy"
            src={image}
            alt="project_image"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Hover Overlay with Links */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {source_code_link && (
              <div className="mx-2 rounded-full bg-gray-900 p-3 text-white transition hover:bg-gray-700">
                <SocialIcon kind="github" href={source_code_link} size={6} />
              </div>
            )}
            {websitelinks && (
              <a
                href={websitelinks}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 rounded-full bg-blue-600 p-3 text-white transition hover:bg-blue-500"
              >
                🌍
              </a>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-5 flex-grow">
          <h3 className="text-[24px] font-bold">{name}</h3>
          <p className="mt-2 text-[14px]">{description}</p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p
              key={`${name}-${tag}`}
              className={`text-[14px] ${tagColorList[index % 3]}`}
            >
              #{tag}
            </p>
          ))}
        </div>
        <>
          <div className="green-pink-gradient w-fit rounded-2xl p-[2px] shadow-card dark:shadow-card-dark">
            {" "}
            <div className="flex w-fit flex-row space-x-7 rounded-[14px] bg-tertiarylight p-[4px] dark:bg-tertiary">
              <SocialIcon kind="github" href={source_code_link} size={6} />{" "}
              Github
            </div>
          </div>
        </>
      </div>

      {/* Admin Controls */}
      {adminState && (
        <EditAndDeleteButton
          onEditClick={() => {
            setId(_id);
            setForm({
              name,
              description,
              image,
              source_code_link,
              tags,
              websitelinks,
            });
          }}
          onDeleteClick={() => store.dispatch(deleteProject(_id))}
        />
      )}
    </div>
  );
};

export default ProjectCard;
