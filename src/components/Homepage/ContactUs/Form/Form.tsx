import CloseIcon from "@/assets/icons/CloseIcon";
import classes from "./Form.module.scss";
import GlobeCanvas from "../WireFrame/WireFrame";
import CursorRipples from "../WireFrame/CursorRipple";
import { useState } from "react";
import TextSpinner from "@/components/TextSpinner/TextSpinner";
import FuturisticPeople from "../../../../assets/icons/FuturisticPeople.svg";
import { motion } from "framer-motion";

interface FormProps {
  formVisbility: boolean;
  setFormVisibility: (receivedVal: boolean) => void;
}

const Form = ({ formVisbility, setFormVisibility }: FormProps) => {
  const [btnHovered, setBtnHovered] = useState(false);

  const mouseEnterHandler = () => {
    setBtnHovered(true);
  };

  const mouseLeaveHandler = () => {
    setBtnHovered(false);
  };

  const closeClickHandler = () => {
    setFormVisibility(false);
  };

  return (
    <div
      className={
        formVisbility
          ? `${classes["form-container"]} ${classes["form-visible"]}`
          : classes["form-container"]
      }
    >
      <div className={classes["form-content-container"]}>
        <div className={classes["form-row"]}>
          <input placeholder="First Name*" type="text" />
          <input placeholder="Last Name*" type="text" />
        </div>
        <div className={classes["form-row"]}>
          <input placeholder="Email*" type="email" />
        </div>
        <div className={classes["form-row"]}>
          <input placeholder="Contact Number" type="number" />
          <input placeholder="Company" type="text" />
        </div>
        <div className={classes["form-row"]}>
          <textarea
            placeholder="Message*"
            className={classes["message-input"]}
          />
        </div>

        <motion.button
          className={classes["submit-btn"]}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
        >
          {!btnHovered ? (
            <>Submit</>
          ) : (
            <TextSpinner
              speed={50}
              content="Submit"
              lettersToNotRotate={2}
            ></TextSpinner>
          )}
        </motion.button>
      </div>
      <div className={classes["object-container"]}>
        <FuturisticPeople height="500px" />
      </div>
      <div
        className={classes["close-icon-container"]}
        onClick={closeClickHandler}
      >
        <CloseIcon height="24" width="24" />
      </div>
    </div>
  );
};

export default Form;
