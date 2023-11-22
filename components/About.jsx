import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { patchBio, postBio } from "@/lib/action/bioAction";
import { styles } from "@/app/style";
import { SectionWrapper } from "@/lib/hoc";
import { fadeIn, slideIn, textVariant } from "@/lib/utils/motion";
import { Avatar } from "@nextui-org/react";
import { Bio, ProfilePic2Path } from "@/constants";
import Image from "next/image";

const About = () => {
  const bios = useSelector((state) => state.BioReducer);
  console.log(bios);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <div className="md:flex-row flex flex-col-reverse justify-around">
        <motion.p
          className="md:w-[50%] mt-4 w-[100%] text-justify text-[#ffffff] text-[17px]  leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          {!bios.length ? Bio : bios[0].bio}
        </motion.p>

        <ProfileAvatars
          imgsrc={bios.length ? bios[0].selectedImage : ProfilePic2Path}
        />
      </div>
      <Form formI={bios} />
    </>
  );
};

const ProfileAvatars = ({ imgsrc }) => {
  return (
    <div className="w-full h-60  flex justify-center items-center md:h-80 md:w-80">
      <div className="w-60 relative flex justify-center items-center md:w-full h-full">
        <Avatar
          style={{ height: "80%", width: "80%" }}
          className=" border-4 border-transparent animate-circle-rotate"
          src={imgsrc}
          alt={"profile Pic"}
        />
        <div className="absolute w-full h-full border-t-4 border-b-4 border-t-lime-500 border-b-blue-500 border-opacity-50 rounded-full animate-spin-right"></div>
        <div className="absolute w-[85%] h-[85%] border-l-4 border-r-4 border-l-[#ff0000] border-r-[#ff8000] border-opacity-50 rounded-full animate-spin-left"></div>
      </div>
    </div>
  );
};

const Form = ({ formI }) => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const adminState = useSelector((state) => state.AdminReducer);
  const [form, setForm] = useState({
    bio: "",
    selectedImage: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(form);

    if (formI.length === 0) {
      await dispatch(postBio(form));
    } else {
      await dispatch(
        patchBio(formI[0]._id, { ...form, password: formI.password })
      );
    }

    setLoading(false);
  };

  useEffect(() => {
    if (formI.length !== 0) {
      setForm({
        bio: formI[0].bio,
        selectedImage: formI[0].selectedImage,
      });
    }
  }, [formI]);

  return (
    <div
      className={`mt-12 flex md:w-[80%] xl:flex-row flex-col gap-10 overflow-hidden`}
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
          <FormField
            label="Bio"
            type="textarea"
            value={form.bio}
            onChange={(e) => setForm({ ...form, bio: e.target.value })}
            placeholder="What you want to say?"
            required
          />
          <FormField
            label="Select an Image"
            type="file"
            onDone={({ base64 }) => setForm({ ...form, selectedImage: base64 })}
          />
          {form.selectedImage && (
            <div className="mt-4">
              <span className="text-white font-medium mb-4">
                Selected Image:
              </span>
              <Image
                loading="lazy"
                width={240}
                height={240}
                src={form.selectedImage}
                alt="Selected"
                className="max-w-full object-cover mt-2 h-60 w-60 rounded-[40px] border-4 border-red-500"
              />
            </div>
          )}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const FormField = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
  onDone,
}) => {
  return (
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4">{label}</span>
      {type === "textarea" ? (
        <textarea
          rows={7}
          name="message"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          required={required}
        />
      ) : (
        <div className="cursor-pointer bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-blue-600 transition duration-300">
          <FileBase type="file" multiple={false} onDone={onDone} />
        </div>
      )}
    </label>
  );
};

export default SectionWrapper(About, "about");
