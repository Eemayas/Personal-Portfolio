"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

type Sequence = Array<SequenceElement>;
type SequenceElement =
  | string
  | number
  | ((element: HTMLElement | null) => void | Promise<void>);

const TypeAnimationComp: React.FC<{
  sequence: Sequence;
  cursor: boolean;
  repeat?: number;
}> = React.memo(({ sequence, cursor, repeat }) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      cursor={cursor}
      repeat={repeat}
    />
  );
});

TypeAnimationComp.displayName = "TypeAnimationComp";
export default TypeAnimationComp;
