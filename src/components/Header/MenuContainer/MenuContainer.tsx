"use client";

import { useState } from "react";
import TextSpinner from "@/components/TextSpinner/TextSpinner";
import classes from "./MenuContainer.module.scss";
import styles from "../../../designSystem/_classes.module.scss";
import { useRouter } from "next/navigation";

const MenuContainer = () => {
  const router = useRouter();
  const [btnHovered, setBtnHovered] = useState(false);

  const mouseEnterHandler = () => {
    setBtnHovered(true);
  };

  const mouseLeaveHandler = () => {
    setBtnHovered(false);
  };

  const scrollToSection = (receivedStr: string) => () => {
    const section = document.getElementById(receivedStr);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={classes["menu-container"]}>
      <div
        className={`${classes["showcase-container"]} ${styles["underline-on-hover"]}`}
        onClick={scrollToSection("ourwork")}
      >
        Showcase
      </div>
      <div
        className={`${classes["services-container"]} ${styles["underline-on-hover"]}`}
        onClick={scrollToSection("services")}
      >
        Services
      </div>
      <div
        className={classes["contactus-btn"]}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onClick={scrollToSection("contactus")}
      >
        <span>
          {!btnHovered ? (
            <>Contact Us</>
          ) : (
            <TextSpinner speed={50} content="Contact Us"></TextSpinner>
          )}
        </span>
      </div>
    </div>
  );
};

export default MenuContainer;
