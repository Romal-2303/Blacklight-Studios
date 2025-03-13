"use client";

import XIcon from "@/assets/icons/XIcon";
import classes from "./ContactUs.module.scss";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import Instagram from "@/assets/icons/Instagram";
import YoutubeIcon from "@/assets/icons/YoutubeIcon";
import Form from "./Form/Form";
import TextSpinner from "@/components/TextSpinner/TextSpinner";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ContactUs = () => {
  const [formVisibility, setFormVisibility] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  useEffect(() => {
    if (formVisibility) {
      // Disable scrolling
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
    };
  }, [formVisibility]);

  const btnClickHandler = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Smooth scrolling effect
    });
    setFormVisibility(true);
  };

  const mouseEnterHandler = () => {
    setBtnHovered(true);
  };

  const mouseLeaveHandler = () => {
    setBtnHovered(false);
  };

  return (
    <div id="contactus" className={classes["contact-us-container"]}>
      <div className={classes["heading-container"]}>
        <h1 className={classes["section-header"]}>
          One click, endless possibilities—call us!
        </h1>
        <motion.div
          className={classes["lets-talk-btn"]}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          onClick={btnClickHandler}
          whileTap={{ scale: 0.9 }}
        >
          {!btnHovered ? (
            <>Let's Talk</>
          ) : (
            <TextSpinner
              speed={50}
              content="Let's Talk"
              lettersToNotRotate={4}
            ></TextSpinner>
          )}
        </motion.div>
      </div>

      <div className={classes["tags-container"]}>
        <div className={classes["tag-1"]}>Web Design</div>
        <div className={classes["tag-2"]}>E-commerce Development</div>
        <div className={classes["tag-3"]}>Portfolio Websites</div>
        <div className={classes["tag-3"]}>SEO Optimization</div>
        <div className={classes["tag-3"]}>Website Support & Maintainance</div>
      </div>

      <div className={classes["icons-copyright-container"]}>
        <div className={classes["icons-container"]}>
          <XIcon color="white" width="25" height="25" />
          <LinkedInIcon color="white" width="25" height="25" />
          <Instagram color="white" width="28" height="28" />
          <YoutubeIcon color="white" width="28" height="28" />
        </div>

        <div className={classes["copyright-container"]}>
          © ID Studio Web Agency Ltd.Privacy
          <p>Policy</p>
          <p> Terms & Conditions</p>
        </div>
      </div>
      <Form
        formVisbility={formVisibility}
        setFormVisibility={setFormVisibility}
      />
    </div>
  );
};

export default ContactUs;
