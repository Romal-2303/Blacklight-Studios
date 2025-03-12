import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./DefaultLayout.module.scss";
import CookieComponent from "../CookieComponent/CookieComponent";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classes["default-layout"]}>
      <LoadingScreen>
        <Header />
        {children}
        <Footer />
        <CookieComponent />
      </LoadingScreen>
    </div>
  );
};

export default DefaultLayout;
