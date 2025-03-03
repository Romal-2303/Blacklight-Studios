import MainSection from "./MainSection/MainSection";
import classes from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <MainSection />
    </div>
  );
};

export default Homepage;
