import MainSection from "./MainSection/MainSection";
import classes from "./Homepage.module.scss";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";

const Homepage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <MainSection />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default Homepage;
