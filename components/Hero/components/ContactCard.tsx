"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { fadeIn } from "@/lib/utils/motion";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";

type ContactCardProps = {
  name: string;
  links: string;
  logo: string;
  index: number;
};

const ContactCard: React.FC<ContactCardProps> = React.memo(
  ({ name, links, logo, index }) => {
    const { resolvedTheme } = useTheme();

    const handleOpenLink = () => {
      window.open(links, "_blank");
    };

    return (
      <DisableAnimationOnMobile>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn({ direction: "up", delay: 0.5 * index })}
          className="green-pink-gradient w-[45px] rounded-[10px] p-[2px]"
        >
          <div
            className={`rounded-[8px] bg-tertiarylight p-[6px] dark:bg-tertiary`}
            onClick={handleOpenLink}
          >
            <Image
              src={logo}
              alt={name}
              width={50}
              height={50}
              loading="lazy"
              className="h-full w-full object-contain"
              style={{
                filter:
                  resolvedTheme == "dark"
                    ? "invert(100%) sepia(72%) saturate(310%) hue-rotate(177deg) brightness(95%) contrast(94%)"
                    : "invert(22%) sepia(4%) saturate(3517%) hue-rotate(179deg) brightness(96%) contrast(88%)",
              }}
            />
          </div>
        </motion.div>
      </DisableAnimationOnMobile>
    );
  },
);

ContactCard.displayName = "ContactCard";
export default ContactCard;
