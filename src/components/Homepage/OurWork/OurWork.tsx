"use client";

import classes from "./OurWork.module.scss";
import styles from "../../../designSystem/_classes.module.scss";
import HoverableCard from "../HoverableCard/HoverableCard";
import ecommerceImg from "../../../assets/images/e_commerce1.png";
import cryptoImg from "../../../assets/images/crypto1.png";
import marketingImg from "../../../assets/images/marketing.png";
import realEstateImg from "../../../assets/images/real_estate.png";
import useIsMobile from "@/hooks/useIsMobile";
import { useState } from "react";

const OurWork = () => {
  const isMobile = useIsMobile(650);

  const visitLinkHandler = (url: string) => () => {
    window.open(url, "_blank");
  };

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
            imgLink={
              "https://marketingpicbucket.s3.eu-north-1.amazonaws.com/e_commerce1.png"
            }
            receivedLink="https://e-commerce-789.netlify.app/"
            videoLink="https://marketingpicbucket.s3.eu-north-1.amazonaws.com/1741812710508496.mp4"
          />
          <p
            className={`${classes["visit-text"]} ${styles["underline-on-hover"]}`}
            onClick={visitLinkHandler("https://e-commerce-789.netlify.app/")}
          >
            Visit Velvo
          </p>
        </div>
        <div className={classes["row-2"]}>
          <div className={classes["work-2"]}>
            <HoverableCard
              title="Cryptify"
              description="A cutting-edge website that elevates your crypto platform’s presence with trust and innovation."
              imgLink={
                "https://marketingpicbucket.s3.eu-north-1.amazonaws.com/crypto1.png"
              }
              receivedLink="https://crypto-website-weld.vercel.app/"
            />
            <p
              className={`${classes["visit-text"]} ${styles["underline-on-hover"]}`}
              onClick={visitLinkHandler(
                "https://crypto-website-weld.vercel.app/"
              )}
            >
              Visit Cryptify
            </p>
          </div>
          <div className={classes["work-3"]}>
            <HoverableCard
              title="Redmail"
              description="A high-converting marketing website crafted to captivate audiences and drive business growth."
              imgLink={
                "https://marketingpicbucket.s3.eu-north-1.amazonaws.com/marketing.png"
              }
              receivedLink="https://marketting-website-ten.vercel.app/"
            />
            <p
              className={`${classes["visit-text"]} ${styles["underline-on-hover"]}`}
              onClick={visitLinkHandler(
                "https://marketting-website-ten.vercel.app/"
              )}
            >
              Visit Redmail
            </p>
          </div>
        </div>
        <div className={classes["row-3"]}>
          <HoverableCard
            title="Realo"
            description="An intuitive real estate platform designed for seamless property browsing and lead generation."
            imgLink={
              "https://marketingpicbucket.s3.eu-north-1.amazonaws.com/real_estate.png"
            }
            receivedLink="https://real-estate-website-eight-alpha.vercel.app/"
          />
          <p
            className={`${classes["visit-text"]} ${styles["underline-on-hover"]}`}
            onClick={visitLinkHandler(
              "https://real-estate-website-eight-alpha.vercel.app/"
            )}
          >
            Visit Realo
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
