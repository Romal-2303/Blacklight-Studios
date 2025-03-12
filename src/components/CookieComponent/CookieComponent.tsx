"use client";

import { useEffect, useState } from "react";
import classes from "./CookieComponent.module.scss";

const CookieComponent = () => {
  const [cookieBoxVisibility, setCookieBoxVisibility] = useState(false);

  useEffect(() => {
    let receiveStatus = localStorage.getItem("cookie_status");

    if (receiveStatus === null || receiveStatus === "false") {
      setCookieBoxVisibility(true);
    }
  }, []);

  const acceptHandler = () => {
    setCookieBoxVisibility(false);
    localStorage.setItem("cookie_status", "true");
  };

  const rejectHandler = () => {
    setCookieBoxVisibility(false);
    localStorage.setItem("cookie_status", "false");
  };

  return (
    <div
      className={
        cookieBoxVisibility
          ? `${classes["cookie-card"]}`
          : `${classes["cookie-card"]} ${classes["cookie-card-hidden"]}`
      }
    >
      <div className={classes["cookie-card-child"]}>
        <p className={classes["card-desc"]}>
          This Website collects cookies to deliver a better user experience and
          analyze our website traffic and performance; we never collect any
          personal data. More about <br /> <u>Cookie policy</u>,{" "}
          <u>Customize settings</u>.
        </p>
        <div className={classes["accept-btn"]} onClick={acceptHandler}>
          Accept All
        </div>
        <div className={classes["reject-btn"]} onClick={rejectHandler}>
          Reject All
        </div>
      </div>
    </div>
  );
};

export default CookieComponent;
