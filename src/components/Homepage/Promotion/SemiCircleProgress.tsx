"use client";


import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./SemiCircleProgress.scss";

interface SemiCircleProgressProps {
  percentage: number;
  size?: number; // Optional size prop, default is 200px
}

const SemiCircleProgress: React.FC<SemiCircleProgressProps> = ({ percentage, size = 200 }) => {
  return (
    <div className="semi-circle-container" style={{ width: size, height: size / 2 }}>
      <CircularProgressbar
        value={percentage}
        strokeWidth={12}
        styles={buildStyles({
          pathColor: "#07c569",
          trailColor: "#ddd",
          strokeLinecap: "round",
          rotation: 0.75, 
          pathTransitionDuration: 0.5
        })}
      />
      <div className="percentage-text" style={{ fontSize: size * 0.15 }}>
        {percentage}%
      </div>
    </div>
  );
};

export default SemiCircleProgress;

