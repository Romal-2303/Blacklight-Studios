interface SvgProps {
  color?: string;
  width?: string;
  height?: string;
}

const Rating = ({ color = "white", width = "16", height = "16" }: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <g transform="translate(0 -1028.4)">
        <path
          d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
          fill="#f39c12"
        />
        <path
          d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
          fill="#f1c40f"
        />
      </g>
    </svg>
  );
};

export default Rating;
