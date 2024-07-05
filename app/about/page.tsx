// "use client";
// import React, { useCallback, useState } from "react";
// import About from "./About/About";
// import IntersectionObserverComponent from "@/components/IntersectionObserverComponent";
// import { fetchBio } from "./About/slices/bioSlice";
// import store from "../store";
// import { fetchBioCard } from "./ServiceSection/slices/serviceCardSlice";
// import ServiceCardSection from "./ServiceSection";
// import { fetchBioSkill } from "./SkillsSection/slices/skillSlice";
// import SkillSection from "./SkillsSection";

// const AboutPage: React.FC = () => {
//   const [hasFetched, setHasFetched] = useState(false);

//   const fetchData = useCallback(async () => {
//     if (!hasFetched) {
//       await store.dispatch(fetchBio());
//       await store.dispatch(fetchBioCard());
//       await store.dispatch(fetchBioSkill());
//       setHasFetched(true);
//     }
//   }, [store.dispatch, hasFetched]);

//   return (
//     <IntersectionObserverComponent onIntersect={fetchData}>
//       <About />
//       {/* <ServiceCardSection />
//       <SkillSection /> */}
//     </IntersectionObserverComponent>
//   );
// };

// export default AboutPage;
// Import necessary modules from React and Framer Motion
"use client";
// Import necessary modules from React and Framer Motion
import React from "react";
import { motion, useInView } from "framer-motion";

// Define a component that uses the fade-up animation
const FadeUpOnView = ({ children }) => {
  // Set up a ref and useInView hook to track the element's visibility
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <motion.div
      ref={ref} // Attach the ref to the motion.div
      initial={{ opacity: 0, y: 20 }} // Initial state: hidden and slightly below its final position
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate only if the element is in view
      transition={{ duration: 0.5 }} // Transition duration: 0.5 seconds
    >
      {children} // Render the children elements inside the motion.div
    </motion.div>
  );
};

// Define the App component
const App = () => {
  return (
    <div>
      <FadeUpOnView>
        <h1>Fade Up Animation</h1>{" "}
        {/* Apply the fade-up animation to this heading */}
      </FadeUpOnView>
    </div>
  );
};

// Export the App component as the default export
export default App;
