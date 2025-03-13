import ParticleGroup from "@/components/ParticleGroup/ParticleGroup";
import classes from "./MainSection.module.scss";
import Link from "next/link";
import styles from "@/designSystem/_classes.module.scss";
import GetInTouchBtn from "@/components/Homepage/GetInTouchBtn/GetInTouchBtn";

const MainSection = () => {
  return (
    <div className={classes["mainsection-container"]}>
      <div className={classes["particle-group-container"]}>
        <ParticleGroup />
      </div>
      <div className={classes["sm-links-section"]}>
        <div className={classes["link-holder"]}>
          <Link
            href=""
            className={`${classes["sm-link"]} ${styles["underline-on-hover"]}`}
          >
            Facebook
          </Link>
          <Link
            href=""
            className={`${classes["sm-link"]} ${styles["underline-on-hover"]}`}
          >
            X
          </Link>
          <Link
            href=""
            className={`${classes["sm-link"]} ${styles["underline-on-hover"]}`}
          >
            Instagram
          </Link>
        </div>
      </div>
      <div className={classes["content-container"]}>
        <p className={classes["hero-subheading"]}>
          Introducing the Next Generation of Digital Experiences
        </p>
        <h1 className={classes["hero-text"]}>Building the Future of Web</h1>
        <div className={classes["hero-description-container"]}>
          <p className={classes["hero-description-text"]}>
            We craft digital solutions that go beyond aesthetics—designed for
            performance, impact, and scalability. Whether you're a startup or an
            enterprise, we turn bold ideas into reality. Let's build something
            extraordinary together.
          </p>
          <GetInTouchBtn />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
