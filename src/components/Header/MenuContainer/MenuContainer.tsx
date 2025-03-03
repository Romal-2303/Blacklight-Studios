"use client";

import TextSpinner from "@/components/TextSpinner/TextSpinner";
import classes from "./MenuContainer.module.scss";
import styles from "../../../designSystem/_classes.module.scss";
import { useState } from "react";

const MenuContainer = () => {
  const [btnHovered, setBtnHovered] = useState(false);

  const mouseEnterHandler = () => {
    setBtnHovered(true);
  };

  const mouseLeaveHandler = () => {
    setBtnHovered(false);
  };

  return (
    <div className={classes["menu-container"]}>
      <div
        className={`${classes["showcase-container"]} ${styles["underline-on-hover"]}`}
      >
        Showcase
      </div>
      <div
        className={`${classes["services-container"]} ${styles["underline-on-hover"]}`}
      >
        Services
      </div>
      <div
        className={classes["contactus-btn"]}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
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
