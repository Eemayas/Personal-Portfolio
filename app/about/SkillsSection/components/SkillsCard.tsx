import React from "react";
import { Tilt } from "react-tilt";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { textVariant } from "@/lib/utils/motion";
import { deleteBioSkill } from "../slices/skillSlice";
import store from "@/app/store";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";
import dynamic from "next/dynamic";

const EditAndDeleteButton = dynamic(
  () => import("@/components/EditAndDeleteButton"),
  {
    ssr: false, // Disable server-side rendering for this component
    loading: () => <p>...</p>, // Fallback content while loading
  }
);

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
            <EditAndDeleteButton
              onEditClick={() => {
                setId(_id!);
                setForm({ title, selectedImage });
              }}
              onDeleteClick={() => {
                store.dispatch(deleteBioSkill(_id!));
              }}
            />
          )}
        </motion.div>
      </DisableAnimationOnMobile>
    </Tilt>
  );
};

export default SkillsCard;
