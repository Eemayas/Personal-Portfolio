import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./VerticalTimelineElement.css";

const VerticalTimelineElement = ({
  children,
  className = "",
  date = "",
  dateClassName = "",
  icon = null,
  iconClassName = "",
  iconOnClick = null,
  onTimelineElementClick = null,
  iconStyle = null,
  id = "",
  position = "",
  style = null,
  textClassName = "",
  contentClassName = "",
  contentArrowclassName = "",
  rootMargin = "0px 0px -40px 0px", // Default root margin
  triggerOnce = true, // Default trigger once
  visible = false,
  shadowSize = "small", // small | medium | large
}) => {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        rootMargin,
        threshold: 0,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [rootMargin]);

  return (
    <div
      ref={elementRef}
      id={id}
      className={classNames(className, "vertical-timeline-element", {
        "vertical-timeline-element--left": position === "left",
        "vertical-timeline-element--right": position === "right",
        "vertical-timeline-element--no-children": children === "",
      })}
      style={style}
    >
      <React.Fragment>
        <span
          style={iconStyle}
          onClick={iconOnClick}
          className={classNames(
            iconClassName,
            "vertical-timeline-element-icon",
            `shadow-size-${shadowSize}`, // for shadow size
            {
              "bounce-in": inView || visible,
              "is-hidden": !(inView || visible),
            }
          )}
        >
          {icon}
        </span>
        <div
          onClick={onTimelineElementClick}
          className={classNames(
            textClassName,
            contentClassName,
            `vertical-timeline-element-content green-pink-gradient p-[2px] rounded-2xl shadow-card dark:shadow-card-dark`,
            {
              "bounce-in": inView || visible,
              "is-hidden": !(inView || visible),
            }
          )}
        >
          <div
            className={classNames(
              contentArrowclassName,
              "vertical-timeline-element-content-arrow "
            )}
          />
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="p-[30px] rounded-[14px] dark:bg-background-dark bg-background-light"
          >
            <span
              className={classNames(
                dateClassName,
                "vertical-timeline-element-date"
              )}
            >
              {date}
            </span>
            {children}
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

VerticalTimelineElement.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  contentArrowStyle: PropTypes.shape({}),
  contentStyle: PropTypes.shape({}),
  date: PropTypes.node,
  dateClassName: PropTypes.string,
  icon: PropTypes.element,
  iconClassName: PropTypes.string,
  iconStyle: PropTypes.shape({}),
  iconOnClick: PropTypes.func,
  onTimelineElementClick: PropTypes.func,
  id: PropTypes.string,
  position: PropTypes.string,
  style: PropTypes.shape({}),
  textClassName: PropTypes.string,
  contentArrowclassName: PropTypes.string,
  contentClassName: PropTypes.string,
  visible: PropTypes.bool,
  shadowSize: PropTypes.string,
  rootMargin: PropTypes.string,
  triggerOnce: PropTypes.bool,
};

export default VerticalTimelineElement;
