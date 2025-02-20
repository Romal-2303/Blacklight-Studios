import classes from "./Header.module.scss";
import MenuContainer from "./MenuContainer/MenuContainer";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <div className={classes["header-content"]}>
        <div className={classes["name-container"]}>
          <p className={classes["text"]}>BLACKLIGHT STUDIOS</p>
        </div>
        <div className={classes["logo-container"]}></div>
        <div className={classes["menu-container"]}>
          <MenuContainer />
        </div>
      </div>
    </div>
  );
};

export default Header;
