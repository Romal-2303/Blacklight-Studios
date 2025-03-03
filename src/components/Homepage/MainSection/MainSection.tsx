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
            Innovative. Scalable. Future-proof. We craft digital solutions that
            stand the test of time. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam in quae aut libero fugiat architecto
            itaque. Libero quis ad rem?
          </p>
          <GetInTouchBtn />
        </div>
        {/* 
        <div className={classes["promotion-card"]}>
        <div className={classes["promotion-card-child"]}>
            <p className={classes["card-desc"]}>
              We are Blacklight Studios – a team of passionate developers,
              designers, and visionaries dedicated to pushing the boundaries of
              web technology. From immersive UI/UX to high-performance
              applications, we deliver excellence with every project. Let's
              build the future together.
            </p>
            <div className={classes["explore-btn"]}>Explore</div>
            <GetInTouchBtn />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainSection;
