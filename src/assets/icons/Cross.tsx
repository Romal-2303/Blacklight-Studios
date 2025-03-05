type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const Cross = (props: Props) => {
  return (
    <svg
      width={props.width || "10"}
      height={props.height || "10"}
      viewBox="0 0 10 10"
      fill={props.color || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.40289 0.999939L9.40289 8.99994M1.40289 8.99994L9.40289 0.999939"
        stroke={props.color || "#97A0AF"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Cross;
