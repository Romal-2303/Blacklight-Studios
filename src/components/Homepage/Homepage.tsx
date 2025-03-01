import ParticleText from "../ParticleText/ParticleText";
import ParticleGroup from "../ParticleGroup/ParticleGroup";
import classes from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={classes["homepage-container"]}>
      {/* <ParticleText /> */}
      <ParticleGroup />
      {/* <div className={classes["homepage-layer"]}>
        {Array(35)
          .fill(0)
          .map((el) => (
            <div className={classes["box"]}></div>
          ))}
      </div> */}
    </div>
  );
};

export default Homepage;
