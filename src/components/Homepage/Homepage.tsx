import MainSection from "./MainSection/MainSection";
import classes from "./Homepage.module.scss";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import OurServices from "./OurServices/OurServices";
import Pricing from "./Pricing/Pricing";
import Testimonials from "./Testimonials/Testimonials";
import OurWork from "./OurWork/OurWork";
import Promotion from "./Promotion/Promotion";

const Homepage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <MainSection />
      {/* <AboutUs />
      <OurServices />
      <OurWork />
      <Testimonials />
      <Pricing />
      <ContactUs /> */}
    </div>
  );
};

export default Homepage;
