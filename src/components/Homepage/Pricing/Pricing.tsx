"use client";

import Tick from "@/assets/icons/Tick";
import classes from "./Pricing.module.scss";
import { motion } from "framer-motion";

let pricingArr = [
  {
    title: "Basic Website",
    price: "$300",
    featuresArr: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
  {
    title: "Business Website",
    price: "$1000",
    featuresArr: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
  {
    title: "Enterprise Website",
    price: "$5000",
    featuresArr: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
];

const Pricing = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    // hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <div className={classes["pricing-section-container"]}>
      <h1 className={classes["section-header"]}>Pricing</h1>
      <div className={classes["content-container"]}>
        {pricingArr.map((card, cardIndex) => (
          <motion.div
            key={cardIndex}
            className={classes["card-container"]}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className={classes["card-header-container"]}>
              <p className={classes["card-title"]}>{card.title}</p>
              <p className={classes["card-price"]}>{card.price}</p>
              <div className={classes["horizontal-separator"]}></div>
            </div>
            <div className={classes["card-content"]}>
              {card.featuresArr.map((el, index) => (
                <div key={index} className={classes["feature-container"]}>
                  <div className={classes["tick-container"]}>
                    <Tick width={10} height={10} />
                  </div>
                  {el}
                </div>
              ))}
            </div>
            <button
              style={
                cardIndex === 1
                  ? { backgroundColor: "white", color: "black" }
                  : {}
              }
              className={classes["get-started-btn"]}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
