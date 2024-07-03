import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { EditIcons, DeleteIcons } from "@/components/social-icons/icons";
import { Tilt } from "react-tilt";
import Image from "next/image";
import { Project } from "../types";
import { fadeIn, textVariant } from "@/lib/utils/motion";
import store from "@/app/store";
import { deleteProject } from "../slices/projectSlice";

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
  const dispatch = useDispatch();
  const tagColorList = [
    "green-text-gradient",
    "pink-text-gradient",
    "orange-text-gradient",
  ];

  return (
    <>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="green-pink-gradient p-[2px] rounded-2xl w-[300px] sm:w-[360px]  shadow-card dark:shadow-card-dark"
      >
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
      </Tilt>
      <div
        className="flex items-end flex-col justify-normal  xs:justify-end"
        style={{ display: adminState ? "block" : "none" }}
      >
        <button
          aria-label="Edit Project"
          onClick={() => {
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
          className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
        >
          <EditIcons />
        </button>
        <button
          aria-label="Delete Project"
          onClick={() => store.dispatch(deleteProject(_id))}
          className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
        >
          <DeleteIcons />
        </button>
      </div>
    </>
  );
};

export default ProjectCard;
