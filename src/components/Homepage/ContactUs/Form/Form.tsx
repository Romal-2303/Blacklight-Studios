import CloseIcon from "@/assets/icons/CloseIcon";
import classes from "./Form.module.scss";
import GlobeCanvas from "../WireFrame/WireFrame";
import CursorRipples from "../WireFrame/CursorRipple";
import { useState } from "react";
import TextSpinner from "@/components/TextSpinner/TextSpinner";
import FuturisticPeople from "../../../../assets/icons/FuturisticPeople.svg";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";
import { Bounce, toast } from "react-toastify";

interface FormProps {
  formVisbility: boolean;
  setFormVisibility: (receivedVal: boolean) => void;
}

const Form = ({ formVisbility, setFormVisibility }: FormProps) => {
  const isMobile = useIsMobile(650);
  const [btnHovered, setBtnHovered] = useState(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [formValid, setFormvalid] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      setFormVisibility(false);
      setLoading(false);
    } else {
      toast.error("Failed to send message", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      setLoading(false);
      setFormVisibility(false);
    }
  };

  const mouseEnterHandler = () => {
    setBtnHovered(true);
  };

  const mouseLeaveHandler = () => {
    setBtnHovered(false);
  };

  const closeClickHandler = () => {
    setFormVisibility(false);
  };

  const inputChangeHandler = (field: string) => (event) => {
    setFormData((prevData) => {
      prevData[field] = event.target.value;

      return { ...prevData };
    });
  };

  return (
    <div
      className={
        formVisbility
          ? `${classes["form-container"]} ${classes["form-visible"]}`
          : classes["form-container"]
      }
    >
      {loading && (
        <div className={classes["loading-spinner-container"]}>
          <div className={classes["spinner"]}></div>
        </div>
      )}
      <div className={classes["form-content-container"]}>
        <div className={classes["form-row"]}>
          <input
            placeholder="First Name*"
            type="text"
            onChange={inputChangeHandler("firstName")}
          />
          <input
            placeholder="Last Name*"
            type="text"
            onChange={inputChangeHandler("lastName")}
          />
        </div>
        <div className={classes["form-row"]}>
          <input
            placeholder="Email*"
            type="email"
            onChange={inputChangeHandler("email")}
          />
        </div>
        <div className={classes["form-row"]}>
          <input
            placeholder="Contact Number"
            type="number"
            onChange={inputChangeHandler("contactNumber")}
          />
          <input
            placeholder="Company"
            type="text"
            onChange={inputChangeHandler("company")}
          />
        </div>
        <div className={classes["form-row"]}>
          <textarea
            placeholder="Message*"
            className={classes["message-input"]}
            onChange={inputChangeHandler("message")}
          />
        </div>

        <motion.button
          className={classes["submit-btn"]}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          onClick={handleSubmit}
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
      {!isMobile && (
        <div className={classes["object-container"]}>
          <FuturisticPeople height="500px" />
        </div>
      )}
      <div
        className={classes["close-icon-container"]}
        onClick={closeClickHandler}
      >
        <CloseIcon
          height={isMobile ? "14" : "24"}
          width={isMobile ? "14" : "24"}
        />
      </div>
    </div>
  );
};

export default Form;
