import ParticleText from "../ParticleText/ParticleText";
import ParticleGroup from "../ParticleGroup/ParticleGroup";
import classes from "./Homepage.module.scss";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <div className={classes["particle-group-container"]}>
        <ParticleGroup />
      </div>
      <div className={classes["sm-links-section"]}>
        <div className={classes["link-holder"]}>
          <Link href="" className={classes["sm-link"]}>
            Facebook
          </Link>
          <Link href="" className={classes["sm-link"]}>
            X
          </Link>
          <Link href="" className={classes["sm-link"]}>
            Instagram
          </Link>
        </div>
      </div>
      <div className={classes["content-container"]}>
        <h1>Building the Future of Web</h1>
      </div>
    </div>
  );
};

export default Homepage;
