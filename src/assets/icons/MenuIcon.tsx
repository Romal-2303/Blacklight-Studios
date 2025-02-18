interface SvgProps {
  color?: string;
  width?: string;
  height?: string;
}

const MenuIcon = ({
  width = "26",
  height = "26",
  color = "white",
}: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z" fill={color} />
    </svg>
  );
};

export default MenuIcon;
