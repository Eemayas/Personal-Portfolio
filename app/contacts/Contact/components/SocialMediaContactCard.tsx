import React from "react";
import { motion, useInView } from "framer-motion";
import { Tilt } from "react-tilt";
import Image from "next/image";
import { textVariant } from "@/lib/utils/motion";
import { deleteSocialMedia } from "../slices/socialMediaSlice";
import store from "@/app/store";
import { TSocialMediaContact } from "../types";
import { useTheme } from "next-themes";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";
import dynamic from "next/dynamic";

const EditAndDeleteButton = dynamic(
  () => import("@/components/EditAndDeleteButton"),
  {
    ssr: false, // Disable server-side rendering for this component
    loading: () => <p>...</p>, // Fallback content while loading
  }
);
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
  const { resolvedTheme } = useTheme();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <DisableAnimationOnMobile>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : {}}
        variants={textVariant()}
      >
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
                style={{
                  filter:
                    resolvedTheme == "dark"
                      ? "invert(100%) sepia(72%) saturate(310%) hue-rotate(177deg) brightness(95%) contrast(94%)"
                      : "invert(22%) sepia(4%) saturate(3517%) hue-rotate(179deg) brightness(96%) contrast(88%)",
                }}
                className="w-full h-full object-contain py-5 px-5 "
              />
              <div className="pb-2 truncate w-full flex flex-col items-center justify-center">
                {name}
              </div>
            </div>
          </div>

          {adminState && (
            <EditAndDeleteButton
              onEditClick={() => {
                setId(_id);
                setForm({ name, logo, links });
              }}
              onDeleteClick={() => store.dispatch(deleteSocialMedia(_id))}
            />
          )}
        </Tilt>
      </motion.div>
    </DisableAnimationOnMobile>
  );
};

export default SocialMediaContactCard;
