"use client";

import { useState } from "react";
import TextSpinner from "@/components/TextSpinner/TextSpinner";
import classes from "./MenuContainer.module.scss";
import styles from "../../../designSystem/_classes.module.scss";
import { useRouter } from "next/navigation";
import useIsMobile from "@/hooks/useIsMobile";
import MenuIcon from "@/assets/icons/MenuIcon";
import CloseIcon from "@/assets/icons/CloseIcon";

const MenuContainer = () => {
  const router = useRouter();
  const isMobile = useIsMobile(650);
  const [btnHovered, setBtnHovered] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);

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

  const menuClickHandler = () => {
    setMenuVisibility((prevState) => !prevState);
  };

  return (
    <div className={classes["menu-container"]}>
      {isMobile ? (
        <>
          <div
            className={classes["menu-icon-container"]}
            onClick={menuClickHandler}
          >
            {menuVisibility ? (
              <CloseIcon color="white" width="16" height="16" />
            ) : (
              <MenuIcon />
            )}
          </div>

          {menuVisibility && (
            <div className={classes["menu-pop-up-container"]}>
              <p onClick={scrollToSection("ourwork")}>Showcase</p>
              <p onClick={scrollToSection("services")}>Services</p>
              <p onClick={scrollToSection("contactus")}>Contact Us</p>
            </div>
          )}
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default MenuContainer;
