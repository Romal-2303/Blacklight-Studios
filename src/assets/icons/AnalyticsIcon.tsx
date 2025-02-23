import React from 'react';

interface AnalyticsIconProps {
  fill?: string; // Optional prop for the fill color
}

const AnalyticsIcon: React.FC<AnalyticsIconProps> = ({ fill = "#000000" }) => {
  return (
    <svg 
      fill={fill} 
      width="15px" 
      height="15px" 
      viewBox="0 0 36 36" 
      version="1.1" 
      preserveAspectRatio="xMidYMid meet" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>analytics-line</title>
      <path 
        className="clr-i-outline clr-i-outline-path-1" 
        d="M 32 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.105 2.895 31 4 31 L 32 31 C 33.105 31 34 30.105 34 29 L 34 7 C 34 5.895 33.105 5 32 5 Z M 4 29 L 4 7 L 32 7 L 32 29 Z"
      ></path>
      <polygon 
        points="15.62 15.222 9.602 23.968 5.55 20.384 6.61 19.186 9.308 21.572 15.634 12.38 22.384 22.395 29.138 13.47 30.414 14.436 22.308 25.145" 
        className="clr-i-outline clr-i-outline-path-2"
      ></polygon>
      <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
    </svg>
  );
};

export default AnalyticsIcon;
