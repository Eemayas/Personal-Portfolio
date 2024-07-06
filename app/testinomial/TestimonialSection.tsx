"use client";
import React, { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { SectionWrapper } from "@/lib/hoc";
import { styles } from "@/app/style";
import store, { RootState } from "../store";
import IntersectionObserverComponent from "@/components/IntersectionObserverComponent";
import { textVariant } from "@/lib/utils/motion";
import { TestimonialCard } from "./components/TestimonialCard";
// import { TestimonialForm } from "./components/TestimonialForm";
import { fetchTestimonial } from "./slices/testimonialSlices";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";
import dynamic from "next/dynamic";
import { SectionTitle } from "@/components/TextAnimations";

// Dynamically import AboutEditForm
const TestimonialForm = dynamic(() => import("./components/TestimonialForm"), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <p>Loading...</p>, // Fallback content while loading
});

const TestimonialSection: React.FC = () => {
  const dispatch = useDispatch();
  const [hasFetched, setHasFetched] = useState(false);
  const [form, setForm] = useState({
    name: "",
    testimonial: "",
    designation: "",
    image: "",
    company: "",
  });
  const [id, setId] = useState("0");
  const { testimonials } = useSelector(
    (state: RootState) => state.testimonialReducer
  );
  const adminState = useSelector((state: RootState) => state.adminReducer);

  const fetchData = useCallback(async () => {
    if (!hasFetched) {
      await store.dispatch(fetchTestimonial());
      setHasFetched(true);
    }
  }, [dispatch, hasFetched]);

  return (
    <>
      <IntersectionObserverComponent onIntersect={fetchData}>
        <div className="mt-12 green-pink-gradient p-[2px] rounded-[20px]">
          <div className="dark:bg-background-dark bg-background-light rounded-[18px] pb-5">
            <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
              <SectionTitle
                SecondaryTitle={"What others say"}
                PrimaryTitle={"Testimonials"}
              />
            </div>
            <div
              className={`${styles.paddingX} -mt-28 pd-14 flex flex-wrap gap-7`}
            >
              <DisableAnimationOnMobile>
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={textVariant()}
                  className="mt-20 flex flex-wrap justify-center gap-7"
                >
                  {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                      index={index}
                      adminState={adminState}
                      {...testimonial}
                      key={`testimonial-${index}`}
                      setForm={setForm}
                      setId={setId}
                      _id={testimonial._id}
                    />
                  ))}
                </motion.div>
              </DisableAnimationOnMobile>
            </div>
          </div>
        </div>
      </IntersectionObserverComponent>
      {adminState && (
        <TestimonialForm form={form} setId={setId} setForm={setForm} id={id} />
      )}
    </>
  );
};

export default SectionWrapper(TestimonialSection, "feedback");
