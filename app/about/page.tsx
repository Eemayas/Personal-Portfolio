// "use client";
// import React, { useEffect } from "react";
// import About from "./components/About";
// import About2 from "./components/About2";
// import { useDispatch } from "react-redux";
// import { fetchBio, fetchBioCard, fetchBioSkill } from "@/lib/action/index";
// import { Action } from "@reduxjs/toolkit";

// const AboutPage = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchData = async () => {
//       await dispatch(fetchBio() as unknown as Action);
//       await dispatch(fetchBioCard() as unknown as Action);
//       await dispatch(fetchBioSkill() as unknown as Action);
//     };

//     // Call the async function
//     fetchData();
//   }, [dispatch]);
//   return (
//     <>
//       <About />
//       <About2 />
//     </>
//   );
// };

// export default AboutPage;

"use client";
import React, { useCallback, useState } from "react";
import About from "./components/About";
import About2 from "./components/About2";
import Skills from "./components/Skills";
import { useDispatch } from "react-redux";
import { fetchBio, fetchBioCard, fetchBioSkill } from "@/lib/action/index";
import { Action } from "@reduxjs/toolkit";
import IntersectionObserverComponent from "@/components/IntersectionObserverComponent";

const AboutPage: React.FC = () => {
  const dispatch = useDispatch();
  const [hasFetched, setHasFetched] = useState(false);

  const fetchData = useCallback(async () => {
    if (!hasFetched) {
      await dispatch(fetchBio() as unknown as Action);
      await dispatch(fetchBioCard() as unknown as Action);
      await dispatch(fetchBioSkill() as unknown as Action);
      setHasFetched(true);
    }
  }, [dispatch, hasFetched]);

  return (
    <IntersectionObserverComponent onIntersect={fetchData}>
      <About />
      <About2 />
      <Skills />
    </IntersectionObserverComponent>
  );
};

export default AboutPage;
