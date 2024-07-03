import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { fadeIn } from "@/lib/utils/motion";
import { DeleteIcons, EditIcons } from "@/components/social-icons/icons";
import store from "@/app/store";
import { deleteTestimonial } from "../slices/testimonialSlices";
import { TTestimonial } from "../types";

interface TestimonialCardProps {
  index: number;
  adminState: boolean;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  setForm: React.Dispatch<React.SetStateAction<TTestimonial>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
  _id: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  index,
  adminState,
  testimonial,
  name,
  designation,
  company,
  image,
  setForm,
  setId,
  _id,
}) => {
  return (
    // variants={fadeIn("", "spring", index * 0.5, 0.75)}
    <>
      <div className="green-pink-gradient p-[2px] rounded-3xl">
        <div className="bg-tertiarylight dark:bg-tertiary p-10 rounded-[22px] xs:w-[320px] w-full h-full flex flex-col ">
          <p className="font-black text-[48px]">"</p>
          <p className="tracking-wider text-[16px] max-w-full flex-1">
            {testimonial}
          </p>
          <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="font-medium text-[16px]">
                <span className="blue-text-gradient">@</span> {name}
              </p>
              <p className="mt-1 text-[12px]">
                {designation} of {company}
              </p>
            </div>
            <Image
              width={40}
              height={40}
              loading="lazy"
              src={image}
              alt={`Feedback-by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>{" "}
      <div
        className="flex items-end flex-col justify-normal xs:justify-end"
        style={{ display: adminState ? "block" : "none" }}
      >
        <button
          aria-label="Edit"
          onClick={() => {
            setId(_id);
            setForm({
              name: name,
              testimonial: testimonial,
              designation: designation,
              image: image,
              company: company,
            });
          }}
          className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit font-bold shadow-md shadow-slate-500"
        >
          <EditIcons />
        </button>
        <button
          aria-label="Delete"
          onClick={() => {
            store.dispatch(deleteTestimonial(_id));
          }}
          className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
        >
          <DeleteIcons />
        </button>
      </div>
    </>
  );
};
