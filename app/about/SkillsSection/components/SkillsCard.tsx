import React from "react";
import { Tilt } from "react-tilt";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { DeleteIcons, EditIcons } from "@/components/social-icons/icons";
import { textVariant } from "@/lib/utils/motion";
import { deleteBioSkill } from "../slices/skillSlice";
import store from "@/app/store";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";

interface SkillsCardProps {
  adminState?: boolean;
  setForm?: React.Dispatch<
    React.SetStateAction<{ title: string; selectedImage: string }>
  >;
  setId?: React.Dispatch<React.SetStateAction<string>>;
  _id?: string;
  title: string;
  selectedImage: string;
  index: number;
}

const SkillsCard: React.FC<SkillsCardProps> = ({
  adminState,
  setForm,
  setId,
  _id,
  title,
  selectedImage,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Tilt className="xs:w-[120px] w-[120px]">
      <DisableAnimationOnMobile>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : {}}
          variants={textVariant()}
        >
          <div className="w-full green-pink-gradient p-[2px] rounded-[30px] shadow-card dark:shadow-card-dark">
            <div className="dark:bg-tertiary bg-tertiarylight rounded-[28px]">
              <Image
                src={selectedImage}
                width={100}
                height={100}
                alt={title}
                loading="lazy"
                className="w-full h-[110px] object-contain py-5 px-5"
              />
              <div className="pb-2 truncate w-full flex flex-col items-center justify-center">
                {title}
              </div>
            </div>
          </div>
          {adminState && (
            <div className="flex items-end flex-col justify-normal xs:justify-end">
              <button
                aria-label="BTN"
                onClick={() => {
                  setId(_id!);
                  setForm({ title, selectedImage });
                }}
                className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
              >
                <EditIcons />
              </button>
              <button
                aria-label="BTN"
                onClick={() => {
                  store.dispatch(deleteBioSkill(_id!));
                }}
                className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
              >
                <DeleteIcons />
              </button>
            </div>
          )}
        </motion.div>
      </DisableAnimationOnMobile>
    </Tilt>
  );
};

export default SkillsCard;
