import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { textVariant } from "@/lib/utils/motion";
import { DeleteIcons, EditIcons } from "@/components/social-icons/icons";
import { deleteSocialMedia } from "../slices/socialMediaSlice";
import store from "@/app/store";
import { TSocialMediaContact } from "../types";

interface SocialMediaContactCardProps {
  adminState: boolean;
  name: string;
  links: string;
  logo: string;
  _id: string;
  setForm: React.Dispatch<React.SetStateAction<TSocialMediaContact>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

const SocialMediaContactCard: React.FC<SocialMediaContactCardProps> = ({
  adminState,
  name,
  links,
  logo,
  _id,
  setForm,
  setId,
}) => {
  return (
    <motion.div initial="hidden" animate="show" variants={textVariant()}>
      <Tilt className="xs:w-[110px] w-[110px]">
        <div className="w-full green-pink-gradient p-[2px] rounded-[30px] shadow-card dark:shadow-card-dark">
          <div
            className="dark:bg-tertiary bg-tertiarylight rounded-[28px]"
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
            <div className="pb-2 truncate w-full flex flex-col items-center justify-center">
              {name}
            </div>
          </div>
        </div>
        {adminState && (
          <div className="flex items-end flex-col justify-normal xs:justify-end">
            <button
              aria-label="Edit"
              onClick={() => {
                setId(_id);
                setForm({ name, logo, links });
              }}
              className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
            >
              <EditIcons />
            </button>
            <button
              aria-label="Delete"
              onClick={() => store.dispatch(deleteSocialMedia(_id))}
              className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
            >
              <DeleteIcons />
            </button>
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

export default SocialMediaContactCard;
