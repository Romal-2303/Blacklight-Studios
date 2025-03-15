import FloatingBox from "@/components/Homepage/AboutUs/FloatingPanelsScene";
import classes from "./About.module.scss";

const AboutUs = () => {
  return (
    <div className={classes["about-us-container"]}>
      <FloatingBox />
    </div>
  );
};

export default AboutUs;
