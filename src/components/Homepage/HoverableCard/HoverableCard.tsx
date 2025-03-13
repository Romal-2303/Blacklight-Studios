import { useState } from "react";
import classes from "./HoverableCard.module.scss";
import ArrowWithTail from "@/assets/icons/ArrowWithTail";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  imgLink?: string;
}

const HoverableCard = ({ title, description, imgLink }: CardProps) => {
  const [cardHovered, setCardHovered] = useState(false);

  const mouseHoverHandler = () => {
    setCardHovered(true);
  };

  const mouseLeaveHandler = () => {
    setCardHovered(false);
  };

  return (
    <div
      className={classes["card-container"]}
      onMouseEnter={mouseHoverHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {cardHovered && (
        <div className={classes["card-content"]}>
          <p>{description}</p>
        </div>
      )}
      {cardHovered && (
        <motion.div
          className={classes["arrow-container"]}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
        >
          <ArrowWithTail color="white" rotation={135} width="16" height="16" />
        </motion.div>
      )}
      {cardHovered && <div className={classes["overlay-screen"]}></div>}
      <img src={imgLink} alt="image.jpg" />
    </div>
  );
};

export default HoverableCard;
