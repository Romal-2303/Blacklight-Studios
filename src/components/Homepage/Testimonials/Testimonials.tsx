"use client";

import Arrow from "@/assets/icons/Arrow";
import classes from "./Testimonials.module.scss";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";

let testimonialsArr = [
  {
    name: "John Smith",
    designation: "CEO of Partner Marketing",
    img: "",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus deleniti ab illo repellendus blanditiis consectetur excepturi labore a perferendis libero?",
  },
  {
    name: "John Smith",
    designation: "CEO of Partner Marketing",
    img: "",
    comment: "Tomorrow night I am gonna smash your boy",
  },
  {
    name: "John Smith",
    designation: "CEO of Partner Marketing",
    img: "",
    comment:
      "From eye-catching visuals to intuitive user experiences, our creative design services breathe life into your brand, ensuring memorable interactions that resonate with your audience.",
  },
];

const Testimonials = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

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
        <motion.button
          className={classes["arrow-container"]}
          onClick={leftClickHandler}
          whileTap={{ scale: 0.9 }}
        >
          <Arrow width="16" height="16" color="white" rotation={90} />
        </motion.button>

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

        <motion.button
          className={classes["arrow-container"]}
          onClick={rightClickHandler}
          whileTap={{ scale: 0.9 }}
        >
          <Arrow width="16" height="16" color="white" rotation={-90} />
        </motion.button>
      </div>
    </div>
  );
};

export default Testimonials;
