import React from "react";
import Image from "next/image";
import store from "@/app/store";
import { deleteTestimonial } from "../slices/testimonialSlices";
import { TTestimonial } from "../types";
import dynamic from "next/dynamic";

const EditAndDeleteButton = dynamic(
  () => import("@/components/EditAndDeleteButton"),
  {
    ssr: false, // Disable server-side rendering for this component
    loading: () => <p>...</p>, // Fallback content while loading
  }
);

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
      {adminState && (
        <EditAndDeleteButton
          onEditClick={() => {
            setId(_id);
            setForm({
              name: name,
              testimonial: testimonial,
              designation: designation,
              image: image,
              company: company,
            });
          }}
          onDeleteClick={() => {
            store.dispatch(deleteTestimonial(_id));
          }}
        />
      )}
    </>
  );
};
