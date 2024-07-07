import React from "react";

import { styles } from "@/app/style";
const SectionWrapper = (Components: any, idName: string | undefined) =>
  function HOC() {
    return (
      <div className={`${styles.padding} relative z-0`}>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Components />
      </div>
    );
  };

export default SectionWrapper;
