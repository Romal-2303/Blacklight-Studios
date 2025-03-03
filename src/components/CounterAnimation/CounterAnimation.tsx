"use client";
import { useEffect, useState } from "react";
import classes from "./CounterAnimation.module.scss";

interface CounterAnimationProps {
  maxNumber: number;
  containerRef: any;
  initialDelay?: number;
  finalDelay?: number;
}

const CounterAnimation = ({
  maxNumber,
  containerRef,
  initialDelay = 15,
  finalDelay = 500,
}: CounterAnimationProps) => {
  const [counter, setCounter] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let customInterval = null as any;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimating) {
          setIsAnimating(true);

          customInterval = setInterval(() => {
            setCounter((prevState) => {
              if (prevState < maxNumber - maxNumber / 100) {
                return prevState + Math.floor(maxNumber / 100);
              } else {
                clearInterval(customInterval);

                let customNestedInterval = setInterval(() => {
                  setCounter((prevState) => {
                    if (prevState < maxNumber) {
                      return prevState + 1;
                    } else {
                      clearInterval(customNestedInterval);
                      return maxNumber;
                    }
                  });
                }, finalDelay);

                return prevState + Math.floor(maxNumber / 100) - 5;
              }
            });
          }, initialDelay);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1, // Adjust threshold as needed
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      // Clean up the observer when the component unmounts
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isAnimating]);

  return <span className={classes["counter"]}>{counter}</span>;
};

export default CounterAnimation;
