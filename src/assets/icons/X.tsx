interface SvgProps {
  color?: string;
  width?: string;
  height?: string;
}

const X = ({ color = "black", width = "20", height = "26" }: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.3251 0H27.7375L18.1 11.0125L29.4375 26H20.5625L13.6063 16.9125L5.6563 26H1.23755L11.5438 14.2188L0.675049 0H9.77505L16.0563 8.30625L23.3251 0ZM21.775 23.3625H24.2188L8.4438 2.5H5.8188L21.775 23.3625Z"
        fill={color}
      />
    </svg>
  );
};

export default X;
