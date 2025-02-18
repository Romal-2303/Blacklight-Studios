import React from "react";

interface SvgProps {
  color?: string;
  width?: string;
  height?: string;
}

const XIcon = ({ color = "white", width = "32", height = "32" }: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24.3251 3H28.7375L19.1 14.0125L30.4375 29H21.5625L14.6063 19.9125L6.6563 29H2.23755L12.5438 17.2188L1.67505 3H10.775L17.0563 11.3062L24.3251 3ZM22.775 26.3625H25.2188L9.4438 5.5H6.8188L22.775 26.3625Z" />
    </svg>
  );
};

export default XIcon;
