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
import { TestimonialForm } from "./components/TestimonialForm";
import { fetchTestimonial } from "./slices/testimonialSlices";

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
  console.log({ testimonials });
  const adminState = useSelector((state: RootState) => state.AdminReducer);

  const fetchData = useCallback(async () => {
    if (!hasFetched) {
      await store.dispatch(fetchTestimonial());
      setHasFetched(true);
    }
  }, [dispatch, hasFetched]);

  return (
    <>
      <IntersectionObserverComponent onIntersect={fetchData}>
        {/* {testimonials.length ? ( */}
        <div className="mt-12 green-pink-gradient p-[2px] rounded-[20px]">
          <div className="dark:bg-background-dark bg-background-light rounded-[18px] pb-5">
            <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
              <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What others say</p>
                <h2 className={styles.sectionHeadText}>Testimonials.</h2>
              </motion.div>
            </div>
            <div
              className={`${styles.paddingX} -mt-28 pd-14 flex flex-wrap gap-7`}
            >
              <motion.div
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
            </div>
          </div>
        </div>
        {/* ) : (
          <h1></h1>
        )} */}
      </IntersectionObserverComponent>
      <TestimonialForm
        adminState={adminState}
        form={form}
        setId={setId}
        setForm={setForm}
        id={id}
      />
    </>
  );
};

export default SectionWrapper(TestimonialSection, "feedback");
