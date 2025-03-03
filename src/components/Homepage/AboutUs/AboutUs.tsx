"use client";

import classes from "./AboutUs.module.scss";
import CounterAnimation from "@/components/CounterAnimation/CounterAnimation";
import { motion } from "framer-motion";
import { useRef } from "react";

const AboutUs = () => {
  const aboutUsRef = useRef(null);

  return (
    <div className={classes["about-us-container"]} ref={aboutUsRef}>
      <div className={classes["about-us-content-container"]}>
        <p className={classes["about-us-heading"]}>Digital Solutions</p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          className={classes["about-us-desc"]}
        >
          With every single one of our clients, we bring forth a deep passion
          for creative problem solving - which is what we deliver Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Ullam, repellat?
        </motion.p>
        <div className={classes["achievements-highlight-section"]}>
          <div className={classes["achievement-box"]}>
            <p className={classes["counter"]}>10 </p>
            <span className={classes["achievement-text"]}>
              Years Of Experience
            </span>
          </div>
          <div className={classes["achievement-box"]}>
            <p className={classes["counter"]}>18 </p>
            <span className={classes["achievement-text"]}>
              Skilled Professionals
            </span>
          </div>
          <div className={classes["achievement-box"]}>
            <p className={classes["counter-big"]}>
              <CounterAnimation maxNumber={100} containerRef={aboutUsRef} />+
            </p>
            <span className={classes["achievement-text"]}>
              Projects Worldwide
            </span>
          </div>
        </div>
      </div>

      <div className={classes["about-us-images-container"]}>
        <motion.div
          initial={{ opacity: 0, y: 50, x: -50 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className={classes["box-1"]}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className={classes["box-2"]}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 70, x: 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className={classes["box-3"]}
        ></motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
