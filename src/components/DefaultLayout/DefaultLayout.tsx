import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./DefaultLayout.module.scss";
import CookieComponent from "../CookieComponent/CookieComponent";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { ToastContainer } from "react-toastify";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classes["default-layout"]}>
      <LoadingScreen>
        <Header />
        {children}
        <Footer />
        <CookieComponent />
        <ToastContainer />
      </LoadingScreen>
    </div>
  );
};

export default DefaultLayout;
