interface SvgProps {
  color?: string;
  width?: string;
  height?: string;
}

const Pause = ({ color = "black", width = "12", height = "12" }: SvgProps) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 52 52"
      enableBackground="new 0 0 52 52"
    >
      <path d="M30,43c0,1,0.9,2,2,2h4c1.1,0,2-1.1,2-2V9c0-1-0.9-2-2-2h-4c-1.1,0-2,1.1-2,2V43z" />
      <path d="M14,43c0,1,0.9,2,2,2h4c1.1,0,2-1.1,2-2V9c0-1-0.9-2-2-2h-4c-1.1,0-2,1.1-2,2V43z" />
    </svg>
  );
};

export default Pause;
