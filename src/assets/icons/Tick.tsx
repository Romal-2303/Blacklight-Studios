import React from "react";

interface SvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const Tick = ({ width = 12, height = 12, color = "white" }: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
    >
      <path d="M20.285 6.707a1 1 0 0 0-1.57-1.414l-9.285 10.3-4.287-4.3a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.428-.014l10-11z" />
    </svg>
  );
};

export default Tick;
