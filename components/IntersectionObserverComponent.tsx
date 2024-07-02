import React, { useEffect, useRef, ReactNode, useCallback } from "react";

interface IntersectionObserverComponentProps {
  onIntersect: () => void;
  threshold?: number;
  rootMargin?: string;
  children: ReactNode;
}

const IntersectionObserverComponent: React.FC<
  IntersectionObserverComponentProps
> = ({ onIntersect, threshold = 0.1, rootMargin = "0px", children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin,
      threshold,
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [handleIntersect, rootMargin, threshold]);

  return <div ref={elementRef}>{children}</div>;
};

export default IntersectionObserverComponent;
