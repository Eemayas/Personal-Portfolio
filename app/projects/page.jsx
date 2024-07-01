"use client";
import React, { useRef, useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { SectionWrapper } from "@/lib/hoc";
import { fadeIn, slideIn, textVariant } from "@/lib/utils/motion";
import { styles } from "@/app/style";
import { motion } from "framer-motion";
import { projects } from "@/constants";
import {
  deleteProject,
  patchProject,
  postProject,
} from "@/lib/action/projectAction";
import { DeleteIcons, EditIcons } from "@/components/social-icons/icons";
import { Tilt } from "react-tilt";
import Image from "next/image";
import "css/tailwind.css";
const tagColorList = [
  "green-text-gradient",
  "pink-text-gradient",
  "orange-text-gradient",
];

const Projects = () => {
  const [isHomePage, setIsHomePage] = useState(true);
  const [form, setForm] = useState({
    name: "",
    description: "",
    tags: [],
    image: "",
    source_code_link: "",
    websitelinks: "",
  });
  const [id, setId] = useState("0");
  const projectss = useSelector((state) => state.ProjectReducer);
  const adminState = useSelector((state) => state.AdminReducer);
  const projectDescription = `Below are a few selected projects that demonstrate my skills and experience, showcasing real-world examples of my work. Each project is accompanied by a brief description, as well as links to code repositories and live demos. These projects serve as tangible evidence of my ability to tackle intricate challenges, adapt to various technologies, and efficiently handle project management`;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isHome = !window.location.href.includes("project");
      setIsHomePage(isHome);
    }
  }, []);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[17px] max-w-3xl leading-[30px] "
        >
          {projectDescription}
        </motion.p>
      </div>
      {/* {projectss.length ? ( */}
      <div className=" mt-20 flex flex-wrap justify-center gap-7">
        {(isHomePage
          ? projectss.length
            ? projectss.slice(0, 3)
            : projects.slice(0, 3)
          : projectss.length
          ? projectss
          : projects
        ).map((project, index) => (
          <ProjectCard
            adminState={adminState}
            key={`project-${index}`}
            setForm={setForm}
            setId={setId}
            index={index}
            {...project}
          />
        ))}
      </div>
      {/* ) : (
        <div className=" mt-20 flex flex-wrap justify-center gap-7">
          {projects.map((project, index) => (
            <ProjectCard
              adminState={adminState}
              key={`project-${index}`}
              setForm={setForm}
              setId={setId}
              index={index}
              {...project}
            />
          ))}
        </div>
      )} */}
      <ProjectForm
        adminState={adminState}
        setId={setId}
        form={form}
        setForm={setForm}
        id={id}
      />
    </>
  );
};

const ProjectCard = ({
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
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
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
          aria-label="BTN"
          onClick={() => {
            setId(_id);
            setForm({
              name: name,
              description: description,
              image: image,
              source_code_link: source_code_link,
              tags: tags,
              websitelinks: websitelinks,
            });
          }}
          className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
        >
          <EditIcons />
        </button>
        <button
          aria-label="BTN"
          onClick={() => {
            dispatch(deleteProject(_id));
          }}
          className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
        >
          <DeleteIcons />
        </button>
      </div>
    </motion.div>
  );
};

const ProjectForm = ({ adminState, setId, form, setForm, id }) => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    setLoading(true);
    console.log(form);
    e.preventDefault();
    if (id != "0") {
      await dispatch(patchProject(id, form));
    } else {
      await dispatch(postProject(form));
    }
    setId("0");
    setForm({
      name: "",
      description: "",
      tags: [],
      image: "",
      source_code_link: "",
      websitelinks: "",
    });
    setLoading(false);
  };
  return (
    <>
      <div
        className={`mt-12 flex  xl:flex-row flex-col gap-10 overflow-hidden`}
        style={{ display: adminState ? "block" : "none" }}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Project Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Projects Names"
                className="dark:bg-tertiary bg-tertiarylight py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Project Descripton
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                placeholder="What you want to say?"
                className="dark:bg-tertiary bg-tertiarylight py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Project Tags</span>
              <input
                type="text"
                name="name"
                value={form.tags}
                onChange={(e) =>
                  setForm({ ...form, tags: e.target.value.split(",") })
                }
                placeholder="#flutter,#MongoDB"
                className="dark:bg-tertiary bg-tertiarylight py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Github Links</span>
              <input
                type="url"
                name="name"
                value={form.source_code_link}
                onChange={(e) =>
                  setForm({ ...form, source_code_link: e.target.value })
                }
                placeholder="https://github.com/"
                className="dark:bg-tertiary bg-tertiarylight py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Website Links</span>
              <input
                type="url"
                name="name"
                value={form.websitelinks}
                onChange={(e) =>
                  setForm({ ...form, websitelinks: e.target.value })
                }
                placeholder="https://www.manandharprashant.com.np/"
                className="dark:bg-tertiary bg-tertiarylight py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Select an Image
              </span>
              <div className="cursor-pointer dark:bg-tertiary bg-tertiarylight py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-blue-600 transition duration-300">
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setForm({ ...form, image: base64 })}
                />
              </div>
            </label>

            {form.image && (
              <div className="mt-4">
                <span className="text-white font-medium mb-4">
                  Selected Image:
                </span>
                <Image
                  loading="lazy"
                  width={160}
                  height={160}
                  src={form.image}
                  alt="Selected"
                  className="w-40 h-40 mt-2 rounded-[40px] border-4 border-red-500"
                />
              </div>
            )}
            <button
              aria-label="BTN"
              type="submit"
              className="dark:bg-tertiary bg-tertiarylight py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};
export default SectionWrapper(Projects, "project");
