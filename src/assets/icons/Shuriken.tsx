interface SvgProps {
  color?: string;
  height?: string;
  width?: string;
}

const Shuriken = ({
  color = "rgb(220, 220, 220)",
  height = "10",
  width = "13",
}: SvgProps) => {
  return (
    <svg
      height={height}
      width={width}
      fill={color}
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g>
        <path
          d="M318.214,193.785L255.996,0l-62.211,193.785L0,255.996l193.785,62.219L255.996,512l62.219-193.786L512,255.996
           L318.214,193.785z M255.996,282.491c-14.628,0-26.495-11.858-26.495-26.495c0-14.628,11.867-26.495,26.495-26.495
           c14.637,0,26.503,11.867,26.503,26.495C282.499,270.633,270.633,282.491,255.996,282.491z"
        />
      </g>
    </svg>
  );
};

export default Shuriken;
