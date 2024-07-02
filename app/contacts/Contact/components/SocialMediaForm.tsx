// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { useDispatch } from "react-redux";
// import FileBase from "react-file-base64";
// import Image from "next/image";
// import {
//   patchSocialMedia,
//   postSocialMedia,
// } from "@/lib/action/socialMediaAction";
// import { Action } from "@reduxjs/toolkit";
// import { slideIn } from "@/lib/utils/motion";
// import InputField from "@/components/InputField";

// interface SocialMediaFormProps {
//   adminState: boolean;
//   setId: React.Dispatch<React.SetStateAction<string>>;
//   form: { name: string; logo: string; links: string };
//   setForm: React.Dispatch<
//     React.SetStateAction<{ name: string; logo: string; links: string }>
//   >;
//   id: string;
// }

// const SocialMediaForm: React.FC<SocialMediaFormProps> = ({
//   adminState,
//   setId,
//   form,
//   setForm,
//   id,
// }) => {
//   const dispatch = useDispatch();
//   const formRef = useRef<HTMLFormElement>(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     setLoading(true);
//     e.preventDefault();

//     if (id !== "0") {
//       await dispatch(patchSocialMedia(id, form) as unknown as Action);
//     } else {
//       await dispatch(postSocialMedia(form) as unknown as Action);
//     }
//     setId("0");
//     setForm({
//       name: "",
//       logo: "",
//       links: "",
//     });

//     setLoading(false);
//   };

//   return (
//     adminState && (
//       // <div className="green-pink-gradient mb-6 p-[2px] rounded-2xl shadow-card dark:shadow-card-dark">
//       //   <div className="dark:bg-background-dark bg-background-light md:w-96  flex items-center flex-col justify-evenly w-full p-5 min-h-[200px] sm:w-[360px] rounded-[14px] ">
//       <div className="mt-12 flex md:w-[80%] xl:flex-row flex-col gap-10 overflow-hidden">
//         <motion.div
//           variants={slideIn("left", "tween", 0.2, 1)}
//           className="mt-12 flex-[0.75] bg-black-100 green-pink-gradient p-[2px] rounded-2xl shadow-card dark:shadow-card-dark "
//         >
//           <form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             className=" flex flex-col gap-8 dark:bg-background-dark bg-background-light p-5 rounded-[14px]"
//           >
//             <InputField
//               label="Name"
//               type="text"
//               name="name"
//               value={form.name}
//               placeholder="Facebook/Twitter"
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               required
//             />
//             <InputField
//               label="Links"
//               type="url"
//               name="links"
//               value={form.links}
//               placeholder="https://www.facebook.com/"
//               onChange={(e) => setForm({ ...form, links: e.target.value })}
//               required
//             />

//             <label className="flex flex-col">
//               <span className="text-white font-medium mb-4">Select a Logo</span>
//               <div className="cursor-pointer dark:bg-tertiary bg-tertiarylight py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-blue-600 transition duration-300">
//                 <FileBase
//                   type="file"
//                   multiple={false}
//                   onDone={({ base64 }) => setForm({ ...form, logo: base64 })}
//                 />
//               </div>
//             </label>

//             {form.logo && (
//               <div className="mt-4">
//                 <span className="text-white font-medium mb-4">
//                   Selected Image:
//                 </span>
//                 <Image
//                   width={240}
//                   height={240}
//                   src={form.logo}
//                   alt="Selected"
//                   loading="lazy"
//                   className="max-w-full mt-2 rounded-[40px] border-4 border-red-500"
//                 />
//               </div>
//             )}

//             <button
//               aria-label="Submit"
//               type="submit"
//               className="dark:bg-tertiary bg-tertiarylight py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
//             >
//               {loading ? "Sending..." : "Send"}
//             </button>
//           </form>
//         </motion.div>
//       </div>
//     )
//   );
// };

// export default SocialMediaForm;
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import {
  patchSocialMedia,
  postSocialMedia,
} from "@/lib/action/socialMediaAction";
import { Action } from "@reduxjs/toolkit";
import { slideIn } from "@/lib/utils/motion";
import InputField from "@/components/InputField";
import "css/tailwind.css";

interface SocialMediaFormProps {
  adminState: boolean;
  setId: React.Dispatch<React.SetStateAction<string>>;
  form: { name: string; logo: string; links: string };
  setForm: React.Dispatch<
    React.SetStateAction<{ name: string; logo: string; links: string }>
  >;
  id: string;
}

const SocialMediaForm: React.FC<SocialMediaFormProps> = ({
  adminState,
  setId,
  form,
  setForm,
  id,
}) => {
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    if (id !== "0") {
      await dispatch(patchSocialMedia(id, form) as unknown as Action);
    } else {
      await dispatch(postSocialMedia(form) as unknown as Action);
    }
    setId("0");
    setForm({
      name: "",
      logo: "",
      links: "",
    });

    setLoading(false);
  };

  return (
    adminState && (
      <div className=" flex md:w-[80%] xl:flex-row flex-col gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="my-12 flex-[0.75] bg-black-100 green-pink-gradient p-[2px] rounded-2xl shadow-card dark:shadow-card-dark "
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" flex flex-col gap-8 dark:bg-background-dark bg-background-light p-5 rounded-[14px]"
          >
            <InputField
              label="Name"
              type="text"
              name="name"
              value={form.name}
              placeholder="Facebook/Twitter"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <InputField
              label="Links"
              type="url"
              name="links"
              value={form.links}
              placeholder="https://www.facebook.com/"
              onChange={(e) => setForm({ ...form, links: e.target.value })}
              required
            />
            <InputField
              label="Select a Logo"
              type="file"
              name="logo"
              value={form.logo}
              placeholder="Upload a logo"
              setForm={setForm}
              form={form}
              onChange={(e) => setForm({ ...form, links: e.target.value })}
              required
            />
            <button
              aria-label="Submit"
              type="submit"
              className="dark:bg-tertiary bg-tertiarylight py-3 px-8 rounded-xl outline-none w-fit  shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>{" "}
      </div>
    )
  );
};

export default SocialMediaForm;
