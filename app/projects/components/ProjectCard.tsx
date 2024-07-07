import React from "react";
import Image from "next/image";
import { Project } from "../types";
import store from "@/app/store";
import { deleteProject } from "../slices/projectSlice";
import dynamic from "next/dynamic";

const EditAndDeleteButton = dynamic(
  () => import("@/components/EditAndDeleteButton"),
  {
    ssr: false, // Disable server-side rendering for this component
    loading: () => <p>...</p>, // Fallback content while loading
  }
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
    <>
      <div className="green-pink-gradient p-[2px] rounded-2xl w-[300px] sm:w-[360px]  shadow-card dark:shadow-card-dark">
        <div className="dark:bg-tertiary bg-tertiarylight  p-[18px] rounded-[14px]">
          <div className="relative w-full h-[230px]">
            <Image
              width={240}
              height={240}
              loading="lazy"
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  width={"20"}
                  height={"20"}
                  loading="lazy"
                  src={"/assets/contacts/Github.webp"}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className=" font-bold text-[24px]">{name}</h3>
            <p className="mt-2  text-[14px]">{description}</p>
          </div>
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
        </div>
      </div>
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
    </>
  );
};

export default ProjectCard;
