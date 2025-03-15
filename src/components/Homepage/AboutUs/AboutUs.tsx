"use client";

import classes from "./AboutUs.module.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import CounterAnimation from "@/components/CounterAnimation/CounterAnimation";
import FloatingBox from "@/components/Homepage/AboutUs/FloatingPanelsScene";
import useIsMobile from "@/hooks/useIsMobile";

const AboutUs = () => {
  const aboutUsRef = useRef(null);
  const isMobile = useIsMobile(650);

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
          <p>- Growing Fast with 15+ Happy Clients</p>
          <p>- A Dedicated Team of Experts</p>
          <p>- Delivering Excellence – 99% Client Satisfaction</p>
        </div>
      </div>
      {!isMobile && (
        <div className={classes["about-us-images-container"]}>
          <FloatingBox />
        </div>
      )}
    </div>
  );
};

export default AboutUs;

{
  /* - Is you website standing in the way of your marketing goals ? 
          - We’ve
          helped brands scale. What’s stopping yours? */
}
{
  /* <div className={classes["achievement-box"]}>
            <p className={classes["counter"]}>15+ </p>
            <span className={classes["achievement-text"]}>Happy Clients</span>
          </div>
          <div className={classes["achievement-box"]}>
            <p className={classes["counter"]}>5+ </p>
            <span className={classes["achievement-text"]}>
              Skilled Professionals
            </span>
          </div>
          <div className={classes["achievement-box"]}>
            <p className={classes["counter-big"]}>99% </p>
            <span className={classes["achievement-text"]}>
              Client Satisfaction
            </span>
          </div> */
}
