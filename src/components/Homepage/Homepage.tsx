import MainSection from "./MainSection/MainSection";
import classes from "./Homepage.module.scss";
import AboutUs from "./AboutUs/AboutUs";

const Homepage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <MainSection />
      <AboutUs />
    </div>
  );
};

export default Homepage;
