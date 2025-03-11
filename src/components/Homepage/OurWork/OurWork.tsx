"use client";

import classes from "./OurWork.module.scss";
import styles from "../../../designSystem/_classes.module.scss";
import HoverableCard from "../HoverableCard/HoverableCard";
import ecommerceImg from "../../../assets/images/e_commerce1.png";
import cryptoImg from "../../../assets/images/crypto1.png";
import marketingImg from "../../../assets/images/marketing.png";
import realEstateImg from "../../../assets/images/real_estate.png";

const OurWork = () => {
  return (
    <div id="ourwork" className={classes["our-work-container"]}>
      <div className={classes["our-work-title"]}>
        <p className={classes["title"]}>Featured Work</p>
        <p className={classes["desc"]}>
          Innovation in every pixel. <br /> Our studio crafts seamless,
          high-performance web solutions tailored for businesses that demand the
          best. With a focus on stunning design and smooth functionality, we
          create digital experiences that captivate and convert. Explore our
          work and see how we bring ideas to life.
        </p>
      </div>
      <div
        className={`${classes["our-work-display-section"]} ${styles["hide-scrollbar"]}`}
      >
        <div className={classes["row-1"]}>
          <HoverableCard
            title="Velvo"
            description="Seamless, high-performance eCommerce web app designed for effortless shopping and maximum conversions."
            imgLink={ecommerceImg.src}
          />
          <p
            className={`${classes["visit-text"]} ${styles["underline-on-hover"]}`}
          >
            Visit Velvo
          </p>
        </div>
        <div className={classes["row-2"]}>
          <div className={classes["work-2"]}>
            <HoverableCard
              title="Cryptify"
              description="A cutting-edge website that elevates your crypto platform’s presence with trust and innovation."
              imgLink={cryptoImg.src}
            />
            <p
              className={`${classes["visit-text"]} ${styles["underline-on-hover"]}`}
            >
              Visit Cryptify
            </p>
          </div>
          <div className={classes["work-3"]}>
            <HoverableCard
              title="Redmail"
              description="A high-converting marketing website crafted to captivate audiences and drive business growth."
              imgLink={marketingImg.src}
            />
            <p
              className={`${classes["visit-text"]} ${styles["underline-on-hover"]}`}
            >
              Visit Redmail
            </p>
          </div>
        </div>
        <div className={classes["row-3"]}>
          <HoverableCard
            title="Realo"
            description="An intuitive real estate platform designed for seamless property browsing and lead generation."
            imgLink={realEstateImg.src}
          />
          <p
            className={`${classes["visit-text"]} ${styles["underline-on-hover"]}`}
          >
            Visit Realo
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
