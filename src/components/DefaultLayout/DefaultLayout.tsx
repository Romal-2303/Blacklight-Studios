import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./DefaultLayout.module.scss";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classes["default-layout"]}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
