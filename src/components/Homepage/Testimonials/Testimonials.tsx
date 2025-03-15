"use client";

import Arrow from "@/assets/icons/Arrow";
import classes from "./Testimonials.module.scss";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

let testimonialsArr = [
  {
    name: "Mark Stevens",
    designation: "CEO at BrightTech Solutions",
    img: "",
    comment:
      "Our website went from outdated to modern and sleek in no time. The process was smooth, and the final result exceeded expectations. Highly recommend!",
  },
  {
    name: "Sarah Patel",
    designation: "Marketing Director at NexaGrowth",
    img: "",
    comment:
      "We needed a business website that not only looked great but also performed well. The team delivered a high-quality site with impressive speed and optimization!",
  },
  {
    name: "James O’Connor",
    designation: "Founder of Elevate Commerce",
    img: "",
    comment:
      "Our enterprise website was built with scalability in mind. The seamless user experience and high performance have directly impacted our conversions",
  },
  {
    name: "Emily Carter",
    designation: "COO at Horizon Ventures",
    img: "",
    comment:
      "We struggled with low engagement until we got a complete website revamp. The new design, responsiveness, and SEO improvements have significantly boosted traffic!",
  },
  {
    name: "David Thompson",
    designation: "Managing Partner at Urban Edge Design",
    img: "",
    comment:
      "From concept to execution, the team understood our vision and brought it to life. The result was a website that truly represents our brand.",
  },
];

const Testimonials = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const isMobile = useIsMobile(650);

  const leftClickHandler = () => {
    setActiveCardIndex((prevIndex) => {
      if (prevIndex - 1 < 0) {
        return 0;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const rightClickHandler = () => {
    setActiveCardIndex((prevIndex) => {
      if (prevIndex < testimonialsArr.length - 1) {
        return prevIndex + 1;
      } else {
        return testimonialsArr.length - 1;
      }
    });
  };

  const dotClickHandler = (recievedIndex: number) => () => {
    setActiveCardIndex(recievedIndex);
  };

  return (
    <div className={classes["testimonials-container"]}>
      <p className={classes["testimonials-header"]}>Testimonials</p>
      <div className={classes["testimonials-content-container"]}>
        {!isMobile && (
          <motion.button
            className={classes["arrow-container"]}
            onClick={leftClickHandler}
            whileTap={{ scale: 0.9 }}
          >
            <Arrow width="16" height="16" color="white" rotation={90} />
          </motion.button>
        )}

        <div className={classes["testimony-container"]}>
          {testimonialsArr.map((el, cardIndex) => (
            <div
              key={cardIndex}
              className={classes["testimonial-card"]}
              style={{ left: `${(cardIndex - activeCardIndex) * 100}%` }}
            >
              <p className={classes["comment"]}>"{el?.comment}"</p>
              <p className={classes["name"]}>{el?.name}</p>
              <p className={classes["designation"]}>{el?.designation}</p>
            </div>
          ))}

          <div className={classes["dots-container"]}>
            {Array(testimonialsArr.length)
              .fill(0)
              .map((el, dotIndex) => (
                <Fragment key={dotIndex}>
                  {dotIndex === activeCardIndex ? (
                    <div
                      className={`${classes["dot"]} ${classes["filled-dot"]}`}
                    ></div>
                  ) : (
                    <div
                      className={classes["dot"]}
                      onClick={dotClickHandler(dotIndex)}
                    ></div>
                  )}
                </Fragment>
              ))}
          </div>
        </div>
        {!isMobile && (
          <motion.button
            className={classes["arrow-container"]}
            onClick={rightClickHandler}
            whileTap={{ scale: 0.9 }}
          >
            <Arrow width="16" height="16" color="white" rotation={-90} />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
