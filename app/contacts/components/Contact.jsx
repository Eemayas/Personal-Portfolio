"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { SectionWrapper } from "@/lib/hoc";
import { styles } from "@/app/style";
import { fadeIn, slideIn, textVariant } from "@/lib/utils/motion";
import {
  deleteSocialMedia,
  patchSocialMedia,
  postSocialMedia,
} from "@/lib/action/socialMediaAction";
import { DeleteIcons, EditIcons } from "@/components/social-icons/icons";
import { contacts } from "@/constants";
import Image from "next/image";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    logo: "",
    links: "",
  });
  const [id, setId] = useState("0");
  const socialMedias = useSelector((state) => state.SocialMediaReducer);
  const adminState = useSelector((state) => state.AdminReducer);
  return (
    <div>
      <div className=" green-pink-gradient p-[2px] rounded-2xl shadow-card dark:shadow-card-dark">
        <div className="dark:bg-background-dark bg-background-light rounded-[14px]">
          <div className="p-8">
            <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>Get In Touch.</p>
              <h2 className={styles.sectionHeadText}>Contacts</h2>
            </motion.div>
          </div>{" "}
          <div className="flex flex-row flex-wrap justify-center gap-10 pb-10">
            {(socialMedias.length ? socialMedias : contacts).map(
              (socialMedia, index) => (
                <ContactCard
                  adminState={adminState}
                  setForm={setForm}
                  setId={setId}
                  index={index}
                  key={`socialMedia-${index}`}
                  name={socialMedia.name}
                  links={socialMedia.links}
                  logo={socialMedia.logo}
                  _id={socialMedia._id}
                />
              )
            )}
          </div>
        </div>
      </div>
      <SocialMediaForm
        adminState={adminState}
        setId={setId}
        form={form}
        setForm={setForm}
        id={id}
      />
    </div>
  );
};

const ContactCard = ({
  adminState,
  index,
  name,
  links,
  logo,
  _id,
  setForm,
  setId,
}) => {
  const dispatch = useDispatch();
  return (
    <motion.div variants={textVariant()}>
      <Tilt className="xs:w-[110px] w-[110px] ">
        {/* <motion.div variants={fadeIn("right", "spring", 0.25 * index, 0.55)}> */}
        <div className="w-full green-pink-gradient p-[2px] rounded-[30px] shadow-card dark:shadow-card-dark ">
          <div
            className="dark:bg-tertiary bg-tertiarylight rounded-[28px] "
            onClick={() => window.open(links, "_blank")}
          >
            <Image
              width={100}
              height={100}
              loading="lazy"
              src={logo}
              alt={name}
              className="w-full h-full object-contain py-5 px-5"
            />

            <div className=" pb-2 truncate w-full flex flex-col items-center justify-center">
              {name}
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
              setForm({ name: name, logo: logo, links: links });
            }}
            className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
          >
            <EditIcons />
          </button>
          <button
            aria-label="BTN"
            onClick={() => {
              dispatch(deleteSocialMedia(_id));
            }}
            className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
          >
            <DeleteIcons />
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};

const SocialMediaForm = ({ adminState, setId, form, setForm, id }) => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    setLoading(true);
    console.log(form);
    e.preventDefault();

    if (id != "0") {
      await dispatch(patchSocialMedia(id, form));
    } else {
      await dispatch(postSocialMedia(form));
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
        className={`mt-12 flex md:w-[80%]  xl:flex-row flex-col gap-10 overflow-hidden`}
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
              <span className="text-white font-medium mb-4">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Facebook/Twitter"
                className="dark:bg-tertiary bg-tertiarylight py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Links</span>
              <input
                type="url"
                name="name"
                value={form.links}
                onChange={(e) => setForm({ ...form, links: e.target.value })}
                placeholder="https://www.facebook.com/"
                className="dark:bg-tertiary bg-tertiarylight py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Select an Logo
              </span>
              <div className="cursor-pointer dark:bg-tertiary bg-tertiarylight py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-blue-600 transition duration-300">
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setForm({ ...form, logo: base64 })}
                />
              </div>
            </label>

            {form.logo && (
              <div className="mt-4">
                <span className="text-white font-medium mb-4">
                  Selected Image:
                </span>
                <Image
                  width={240}
                  height={240}
                  src={form.logo}
                  alt="Selected"
                  loading="lazy"
                  // className="max-w-full mt-2 rounded-sm"
                  className="max-w-full mt-2 rounded-[40px] border-4 border-red-500"
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

export default SectionWrapper(Contact, "contact");
