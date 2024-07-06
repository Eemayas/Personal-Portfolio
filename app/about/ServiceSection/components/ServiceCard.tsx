import React from "react";
import { Tilt } from "react-tilt";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { DeleteIcons, EditIcons } from "@/components/social-icons/icons";
import { fadeIn } from "@/lib/utils/motion";
import { TServiceCard } from "../types";
import store from "@/app/store";
import { deleteBioCard } from "../slices/serviceCardSlice";

interface ServiceCardProps {
  adminState: boolean;
  setId?: (id: string) => void;
  _id?: string;
  index: number;
  title: string;
  selectedImage: string;
  setForm?: (form: TServiceCard) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  adminState,
  setId,
  _id,
  index,
  title,
  selectedImage,
  setForm,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : {}}
        className="w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card dark:shadow-card-dark"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          className="dark:bg-tertiary bg-tertiarylight rounded-[18px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
          //   options={{ max: 45, scale: 1, speed: 450 }}
        >
          <Image
            width={64}
            height={64}
            id={_id}
            loading="lazy"
            src={selectedImage}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
      {adminState && (
        <div className="flex items-end flex-col justify-normal xs:justify-end">
          <button
            aria-label="Edit"
            onClick={() => {
              setId(_id || "0");
              setForm({ title, selectedImage, _id: _id || "0" });
            }}
            className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
          >
            <EditIcons />
          </button>
          <button
            aria-label="Delete"
            onClick={() => {
              if (_id) {
                store.dispatch(deleteBioCard(_id));
              }
            }}
            className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
          >
            <DeleteIcons />
          </button>
        </div>
      )}
    </Tilt>
  );
};

export default ServiceCard;
