import { useState } from "react";
import classes from "./HoverableCard.module.scss";
import ArrowWithTail from "@/assets/icons/ArrowWithTail";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

interface CardProps {
  title: string;
  description: string;
  imgLink?: string;
  videoLink?: string;
  receivedLink?: string;
}

const HoverableCard = ({
  title,
  description,
  imgLink,
  receivedLink,
  videoLink,
}: CardProps) => {
  const isMobile = useIsMobile(650);
  const [cardHovered, setCardHovered] = useState(false);

  const mouseHoverHandler = () => {
    setCardHovered(true);
  };

  const mouseLeaveHandler = () => {
    setCardHovered(false);
  };

  const visitLinkHandler = (url: string) => () => {
    window.open(url, "_blank");
  };

  return (
    <div
      className={classes["card-container"]}
      onMouseEnter={mouseHoverHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={visitLinkHandler(receivedLink)}
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
          <ArrowWithTail
            color="white"
            rotation={135}
            width={isMobile ? "14" : "16"}
            height={isMobile ? "14" : "16"}
          />
        </motion.div>
      )}
      {cardHovered && <div className={classes["overlay-screen"]}></div>}
      {cardHovered ? (
        <video src={videoLink} muted loop autoPlay />
      ) : (
        <img src={imgLink} alt="image.jpg" />
      )}
    </div>
  );
};

export default HoverableCard;
