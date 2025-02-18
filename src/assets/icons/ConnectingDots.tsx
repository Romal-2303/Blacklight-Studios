interface SvgProps {
  color?: string;
  height?: string;
  width?: string;
}

const ConnectingDots = ({
  color = "black",
  height = "40",
  width = "40",
}: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={width}
      height={height}
    >
      <circle cx="40" cy="160" r="15" fill={color} />
      <circle cx="70" cy="100" r="15" fill={color} />
      <circle cx="120" cy="140" r="15" fill={color} />
      <circle cx="160" cy="40" r="15" fill={color} />

      <path
        d="M 40 160 Q 55 130, 70 100"
        stroke={color}
        strokeWidth="10"
        fill="none"
      />
      <path
        d="M 70 100 Q 95 120, 120 140"
        stroke={color}
        strokeWidth="10"
        fill="none"
      />
      <path
        d="M 120 140 Q 140 90, 160 40"
        stroke={color}
        strokeWidth="10"
        fill="none"
      />
    </svg>
  );
};

export default ConnectingDots;
