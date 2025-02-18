interface ArrowProps {
  color?: string;
  height?: string;
  width?: string;
  rotation?: number;
}

const Arrow = ({
  color = "none",
  height = "6",
  width = "9",
  rotation = 0,
}: ArrowProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 6"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M1 1.25L4.5 4.75L8 1.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
