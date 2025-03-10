interface SvgProps {
  color?: string;
  width?: string;
  height?: string;
}

const TargetIcon2 = ({
  color = "#000000",
  width = "45",
  height = "45",
}: SvgProps) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 16.001 16.001"
      id="target-16px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Path_189"
        data-name="Path 189"
        d="M45,8a8,8,0,1,1-8-8,.5.5,0,0,1,0,1,7,7,0,1,0,7,7,.5.5,0,0,1,1,0ZM37,4a.5.5,0,0,0,0-1,5,5,0,1,0,5,5,.5.5,0,0,0-1,0,4,4,0,1,1-4-4Zm.671,4.731a1,1,0,0,1-.288.192.991.991,0,0,1-.766,0,1,1,0,0,1-.288-.192c-.011-.01-.025-.013-.036-.024s-.012-.022-.021-.032a.97.97,0,0,1,0-1.35c.009-.01.011-.023.021-.032l1.218-1.218A1.96,1.96,0,0,0,37,6a2.034,2.034,0,1,0,1.926,1.489L37.707,8.707C37.7,8.718,37.682,8.721,37.671,8.731ZM38,5.586V3.5a.5.5,0,0,1,.146-.354l3-3A.5.5,0,0,1,42,.5V2.293l1.146-1.147a.5.5,0,0,1,.708.708L42.707,3H44.5a.5.5,0,0,1,.354.854l-3,3A.5.5,0,0,1,41.5,7H38.707L37.354,8.354a.5.5,0,0,1-.708-.708L38,6.293Zm1-1.879V5.293l2-2V1.707ZM39.707,6h1.586l2-2H41.707Z"
        transform="translate(-29 0.001)"
      />
    </svg>
  );
};

export default TargetIcon2;
