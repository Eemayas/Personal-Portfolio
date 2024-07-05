"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { fadeIn } from "@/lib/utils/motion";

type ContactCardProps = {
  name: string;
  links: string;
  logo: string;
};

const ContactCard: React.FC<ContactCardProps> = React.memo(
  ({ name, links, logo }) => {
    const { resolvedTheme } = useTheme();

    const handleOpenLink = () => {
      window.open(links, "_blank");
    };

    return (
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn("up")}
        className="w-[50px] green-pink-gradient p-[1.5px] rounded-[10px]"
      >
        <div
          className={`dark:bg-tertiary bg-tertiarylight rounded-[10px] p-[8px]`}
          onClick={handleOpenLink}
        >
          <Image
            src={logo}
            alt={name}
            width={50}
            height={50}
            loading="lazy"
            className="w-full h-full object-contain"
            style={{
              filter:
                resolvedTheme === "dark"
                  ? "invert(100%) sepia(72%) saturate(310%) hue-rotate(177deg) brightness(95%) contrast(94%)"
                  : "invert(22%) sepia(4%) saturate(3517%) hue-rotate(179deg) brightness(96%) contrast(88%)",
            }}
          />
        </div>
      </motion.div>
    );
  }
);

ContactCard.displayName = "ContactCard";
export default ContactCard;
