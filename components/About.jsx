import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { patchBio, postBio } from "@/lib/action/bioAction";
import { useSelector } from "react-redux";
import { styles } from "@/app/style";
import { SectionWrapper } from "@/lib/hoc";
import { fadeIn, slideIn, textVariant } from "@/lib/utils/motion";
import { Avatar } from "@nextui-org/react";
// import { CircularProgress } from "@material-ui/core";

const About = () => {
  const bios = useSelector((state) => state.BioReducer);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <div className="md:flex-row flex flex-col-reverse justify-around">
        <motion.p
          className="md:w-[50%] mt-4 w-[100%] text-justify text-secondary text-[17px]  leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          {!bios.length ? "Loading......" : bios[0].bio}
        </motion.p>
        {!bios.length ? (
          <p></p>
        ) : (
          <ProfileAvatars imgsrc={bios[0].selectedImage} />
        )}
      </div>
      <Form formI={bios} />
    </>
  );
};

const ProfileAvatars = (imgsrc) => {
  return (
    <div className="w-full h-60  flex justify-center items-center md:h-80 md:w-80">
      <div className="w-60 relative flex justify-center items-center md:w-full h-full">
        <Avatar
          style={{ height: "80%", width: "80%" }}
          className=" border-4 border-transparent animate-circle-rotate"
          // src={ProfilePic2}
          src={imgsrc.imgsrc}
          alt={"profile Pic"}
        />
        <div className="absolute w-full h-full border-t-4 border-b-4 border-t-lime-500 border-b-blue-500 border-opacity-50 rounded-full animate-spin-right"></div>
        <div className="absolute w-[85%] h-[85%] border-l-4 border-r-4 border-l-[#ff0000] border-r-[#ff8000] border-opacity-50 rounded-full animate-spin-left"></div>
      </div>
    </div>
  );
};

const Form = ({ formI }) => {
  // console.log(formI);
  const formRef = useRef();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const adminState = useSelector((state) => state.AdminReducer);
  const [form, setForm] = useState({
    bio: "",
    selectedImage: "",
  });

  const handleSubmit = (e) => {
    setLoading(true);
    console.log(form);
    e.preventDefault();
    if (formI == 0) {
      dispatch(postBio(form));
    } else {
      dispatch(patchBio(formI[0]._id, form));
    }
    setLoading(false);
  };

  useEffect(() => {
    if (formI.length != 0) {
      setForm({
        bio: formI[0].bio,
        selectedImage: formI[0].selectedImage,
      });
    }
  }, [formI]);
  return (
    <>
      <div
        className={` mt-12 flex md:w-[80%]  xl:flex-row flex-col gap-10 overflow-hidden`}
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
              <span className="text-white font-medium mb-4">Bio</span>
              <textarea
                rows={7}
                name="message"
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Select an Image
              </span>
              <div className="cursor-pointer bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-blue-600 transition duration-300">
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
                <img
                  src={form.selectedImage}
                  alt="Selected"
                  // className="max-w-full mt-2 rounded-sm"
                  className="max-w-full object-cover mt-2 h-60 w-60 rounded-[40px] border-4 border-red-500"
                />
              </div>
            )}

            <button
              aria-label="BTN"
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
