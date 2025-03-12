"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import classes from "./LoadingScreen.module.scss";
import TextSpinner from "../TextSpinner/TextSpinner";

interface LoadingScreenProps {
  children: ReactNode;
}

const LoadingScreen = ({ children }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(62);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setLoadPercentage((prevState) => {
        if (prevState >= 100) {
          clearInterval(intervalRef.current);
          setIsLoading(false);
        } else {
          setLoadPercentage(prevState + 1);
        }
      });

      if (loadPercentage === 100) {
        setIsLoading(false);
        clearInterval(intervalRef.current);
      }
    }, 30);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className={classes["loading-screen-container"]}>
      <div
        className={classes["loading_container"]}
        style={{
          width: isLoading ? "100vw" : "0vw",
          // opacity: isLoading ? 100 : 0,
          left: isLoading ? 0 : "-100%",
        }}
      >
        Loading_<p>{loadPercentage}%</p>
      </div>
      <div>
        {/* <div style={{ visibility: isLoading ? "hidden" : "visible" }}> */}
        {children}
      </div>
    </div>
  );
};

export default LoadingScreen;
