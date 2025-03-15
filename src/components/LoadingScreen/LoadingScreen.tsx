"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import classes from "./LoadingScreen.module.scss";

interface LoadingScreenProps {
  children: ReactNode;
}

const LoadingScreen = ({ children }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(false);
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
          left: isLoading ? 0 : "-100%",
        }}
      >
        Loading_<p>{loadPercentage}%</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default LoadingScreen;
