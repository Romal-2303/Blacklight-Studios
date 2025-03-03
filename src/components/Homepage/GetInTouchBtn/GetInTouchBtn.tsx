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

  return (
    <div
      className={classes["get-in-touch-btn"]}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
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
