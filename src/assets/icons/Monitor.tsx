import React from 'react';

interface MonitorProps {
  fill?: string; // Optional prop for the stroke color
}

const Monitor: React.FC<MonitorProps> = ({ fill = "#000000" }) => {
  return (
    <svg 
      width="15px" 
      height="15px" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      stroke={fill} 
      strokeWidth="1" 
      strokeLinecap="round" 
      strokeLinejoin="miter"
    >
      <rect x="2" y="3" width="20" height="14" rx="0"></rect>
      <line x1="12" y1="21" x2="12" y2="18"></line>
      <line x1="8" y1="21" x2="16" y2="21"></line>
    </svg>
  );
};

export default Monitor;
