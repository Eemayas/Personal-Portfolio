"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "@/lib/hoc";
import { useDispatch, useSelector } from "react-redux";
import { fadeIn, slideIn, textVariant } from "@/lib/utils/motion";
import FileBase from "react-file-base64";
import { DeleteIcons, EditIcons } from "@/components/social-icons/icons";
import { technologies } from "@/constants";
import Image from "next/image";
import {
  deleteBioSkill,
  patchBioSkill,
  postBioSkill,
} from "@/lib/action/bioSkillAction";

const Skills = () => {
  const [form, setForm] = useState({
    title: "",
    selectedImage: "",
  });
  const [id, setId] = useState("0");
  const bioSkils = useSelector((state) => state.BioSkillReducer);
  const adminState = useSelector((state) => state.AdminReducer);
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
        {bioSkils.length ? (
          bioSkils.map((technology, index) => (
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
        ) : (
          <h1></h1>
        )}
      </div>
      <TechForm
        adminState={adminState}
        setId={setId}
        id={id}
        form={form}
        setForm={setForm}
      />
    </>
  );
};
const SkillsCard = ({
  adminState,
  setForm,
  setId,
  _id,
  index,
  title,
  selectedImage,
}) => {
  const dispatch = useDispatch();
  return (
    <Tilt className="xs:w-[120px] w-[120px] ">
      <motion.div variants={textVariant()}>
        {/* <motion.div variants={fadeIn("right", "spring", 0.25 * index, 0.55)}> */}
        <div className="w-full green-pink-gradient p-[2px] rounded-[30px] shadow-card dark:shadow-card-dark ">
          <div className="dark:bg-tertiary  bg-tertiarylight  rounded-[28px] ">
            <Image
              src={selectedImage}
              width={100}
              height={100}
              alt={title}
              loading="lazy"
              className="w-full h-[110px] object-contain py-5 px-5"
            />

            <div className=" pb-2 truncate  w-full flex flex-col items-center justify-center">
              {title}
            </div>
          </div>
        </div>
        <div
          className="flex items-end flex-col justify-normal  xs:justify-end"
          style={{ display: adminState ? "block" : "none" }}
        >
          <button
            aria-label="BTN"
            onClick={() => {
              setId(_id);
              setForm({ title: title, selectedImage: selectedImage });
            }}
            className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
          >
            <EditIcons />
          </button>
          <button
            aria-label="BTN"
            onClick={() => {
              dispatch(deleteBioSkill(_id));
            }}
            className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
          >
            <DeleteIcons />
          </button>
        </div>
      </motion.div>
    </Tilt>
  );
};
const TechForm = ({ adminState, setId, id, form, setForm }) => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    setLoading(true);
    console.log(form);
    e.preventDefault();
    if (id != "0") {
      await dispatch(patchBioSkill(id, form));
    } else {
      await dispatch(postBioSkill(form));
    }
    setId("0");
    setForm({
      title: "",
      selectedImage: "",
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
              <span className="text-white font-medium mb-4">Title</span>
              <input
                type="text"
                name="name"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="C/C++/Flutter/...."
                className="dark:bg-tertiary bg-tertiarylight py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
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
                  onDone={({ base64 }) =>
                    setForm({ ...form, selectedImage: base64 })
                  }
                />
              </div>
            </label>

            {form.selectedImage && (
              <div className="mt-4">
                <span className="text-white font-medium mb-4">
                  Selected Image:
                </span>
                <Image
                  loading="lazy"
                  width={160}
                  height={160}
                  src={form.selectedImage}
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
export default SectionWrapper(Skills, "tech");