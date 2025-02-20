import { useEffect, useState } from "react";
import classes from "./TextSpinner.module.scss";

interface TextSpinnerProps {
  content: string;
  speed?: number;
}

const TextSpinner = ({ content, speed = 40 }: TextSpinnerProps) => {
  const [displayText, setDisplayText] = useState(content);

  useEffect(() => {
    const generateScrambledTexts = (text: string): string[] => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const textArr = [];

      for (let i = 0; i < 3; i++) {
        let scrambled = text
          .split("")
          .map((char, charIndex) =>
            char === " "
              ? " "
              : charIndex < 5
              ? char
              : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("");

        textArr.push(scrambled);
      }

      textArr.push(text);

      return textArr;
    };

    const scrambledTexts = generateScrambledTexts("Contact Us");

    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(scrambledTexts[index]);
      index++;

      if (index >= scrambledTexts.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return <div className={classes["text-spinner-container"]}>{displayText}</div>;
};

export default TextSpinner;
