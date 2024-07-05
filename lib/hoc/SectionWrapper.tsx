import React from "react";
// import { motion } from "framer-motion";

import { styles } from "@/app/style";
// import { staggerContainer } from "../utils/motion";
const SectionWrapper = (Components: any, idName: string | undefined) =>
  function HOC() {
    return (
      <div className={`${styles.padding} relative z-0`}>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Components />
      </div>
      //       <motion.section
      //         variants={staggerContainer()}
      //         initial="hidden"
      //         whileInView={"show"}
      //         viewport={{ once: true, amount: 0.001 }}
      //         className={`${styles.padding} relative z-0`}
      //       >
      //         <span className="hash-span" id={idName}>
      //           &nbsp;
      //         </span>
      //         <Components />
      //       </motion.section>
    );
  };

export default SectionWrapper;

// "use client";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { styles } from "@/app/style";
// import { staggerContainer } from "../utils/motion";

// const SectionWrapper = (Component: React.ComponentType, idName?: string) =>
//   function HOC() {
//     const [key, setKey] = useState(0);

//     useEffect(() => {
//       setKey((prevKey) => prevKey + 1);
//     }, [Component]);

//     return (
//       <motion.section
//         key={key}
//         variants={staggerContainer()}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.001 }}
//         className={`${styles.padding} relative z-0`}
//       >
//         <span className="hash-span" id={idName}>
//           &nbsp;
//         </span>
//         <Component />
//       </motion.section>
//     );
//   };

// export default SectionWrapper;
