"use client";

import classes from "./GetInTouchBtn.module.scss";
import SharpArrowWithTail from "@/assets/icons/SharpArrowWithTail";
import TextSpinner from "@/components/TextSpinner/TextSpinner";
import { useState } from "react";

const GetInTouchBtn = () => {
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
    <div
      className={classes["get-in-touch-btn"]}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={scrollToSection("contactus")}
    >
      {!btnHovered ? (
        <>Get In Touch</>
      ) : (
        <TextSpinner speed={50} content="Get In Touch"></TextSpinner>
      )}
      <div className={classes["arrow-container"]}>
        <SharpArrowWithTail />
      </div>
    </div>
  );
};

export default GetInTouchBtn;
