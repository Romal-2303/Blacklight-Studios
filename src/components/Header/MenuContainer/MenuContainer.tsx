"use client";

import { useState } from "react";
import TextSpinner from "@/components/TextSpinner/TextSpinner";
import BuildingBlocksIcon from "@/assets/icons/BuildingBlocks";
import styles from "../../../designSystem/_classes.module.scss";
import classes from "./MenuContainer.module.scss";
import CodeIcon from "@/assets/icons/Code";
import ShopsIcon from "@/assets/icons/ShopsIcon";
import StarRanking from "@/assets/icons/StarRanking";
import SupportIcon from "@/assets/icons/SupportIcon";

const MenuContainer = () => {
  const [popupVisibility, setPopupVisbility] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  const mouseEnterHandler = () => {
    setBtnHovered(true);
  };

  const mouseLeaveHandler = () => {
    setBtnHovered(false);
  };

  const servicesClickHandler = () => {
    setPopupVisbility((prevState) => !prevState);
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
        onClick={servicesClickHandler}
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

      {popupVisibility && (
        <div className={classes["menu-popup-container"]}>
          <div className={classes["menu-item"]}>
            <div className={classes["icon-container"]}>
              <BuildingBlocksIcon />
            </div>
            <div className={classes["content-container"]}>
              <p className={classes["content-title"]}>Web Design</p>
              <p className={classes["content-desc"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                illo.
              </p>
            </div>
          </div>
          <div className={classes["menu-item"]}>
            <div className={classes["icon-container"]}>
              <CodeIcon />
            </div>
            <div className={classes["content-container"]}>
              <p className={classes["content-title"]}>E-Commerce Development</p>
              <p className={classes["content-desc"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                illo.
              </p>
            </div>
          </div>
          <div className={classes["menu-item"]}>
            <div className={classes["icon-container"]}>
              <ShopsIcon />
            </div>
            <div className={classes["content-container"]}>
              <p className={classes["content-title"]}>Portfolio Websites</p>
              <p className={classes["content-desc"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                illo.
              </p>
            </div>
          </div>
          <div className={classes["menu-item"]}>
            <div className={classes["icon-container"]}>
              <StarRanking />
            </div>
            <div className={classes["content-container"]}>
              <p className={classes["content-title"]}>Organic SEO</p>
              <p className={classes["content-desc"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                illo.
              </p>
            </div>
          </div>
          <div className={classes["menu-item"]}>
            <div className={classes["icon-container"]}>
              <SupportIcon />
            </div>
            <div className={classes["content-container"]}>
              <p className={classes["content-title"]}>
                Website Support & Maintainance
              </p>
              <p className={classes["content-desc"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                illo.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuContainer;
