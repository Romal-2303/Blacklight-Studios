import MainSection from "./MainSection/MainSection";
import classes from "./Homepage.module.scss";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import OurServices from "./OurServices/OurServices";

const Homepage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <MainSection />
      <AboutUs />
      <OurServices />
      <ContactUs />
    </div>
  );
};

export default Homepage;
