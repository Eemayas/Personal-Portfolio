import React from "react";
import { Tilt } from "react-tilt";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/lib/utils/motion";
import { TServiceCard } from "../types";
import store from "@/app/store";
import { deleteBioCard } from "../slices/serviceCardSlice";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";
import dynamic from "next/dynamic";

const EditAndDeleteButton = dynamic(
  () => import("@/components/EditAndDeleteButton"),
  {
    ssr: false, // Disable server-side rendering for this component
    loading: () => <p>...</p>, // Fallback content while loading
  }
);
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
      <DisableAnimationOnMobile>
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
      </DisableAnimationOnMobile>

      {adminState && (
        <EditAndDeleteButton
          onEditClick={() => {
            setId(_id || "0");
            setForm({ title, selectedImage, _id: _id || "0" });
          }}
          onDeleteClick={() => {
            if (_id) {
              store.dispatch(deleteBioCard(_id));
            }
          }}
        />
      )}
    </Tilt>
  );
};

export default ServiceCard;
