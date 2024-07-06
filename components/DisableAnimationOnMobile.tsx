import { Children, isValidElement, cloneElement } from "react";
import { AnimationProps } from "framer-motion";

import { useState, useEffect } from "react";

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const useBreakpoint = (breakpointKey: keyof typeof breakpoints) => {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  useEffect(() => {
    const updateBreakpoint = () => {
      const match = window.matchMedia(
        `(min-width: ${breakpoints[breakpointKey]}px)`
      );
      setIsBreakpoint(!match.matches);
    };

    updateBreakpoint();

    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, [breakpointKey]);

  return {
    [`is${breakpointKey.charAt(0).toUpperCase() + breakpointKey.slice(1)}`]:
      isBreakpoint,
  };
};

export function DisableAnimationOnMobile({
  children,
  defaultAnimateVariant,
}: {
  children: any | any[];
  defaultAnimateVariant?: string;
}) {
  const { isMd: isMobile } = useBreakpoint("md");

  if (!isMobile) return children;

  const modifiedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const emptyAnimationProps = {
        animate: "default",
        initial: undefined,
        exit: undefined,
        transition: { duration: 0 },
        variants: { default: { opacity: 1, top: 0, bottom: 0 } },
      } as AnimationProps;

      return cloneElement(child, emptyAnimationProps);
    }

    return child;
  });

  return modifiedChildren;
}
