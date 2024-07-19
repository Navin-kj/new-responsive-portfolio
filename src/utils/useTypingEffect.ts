import { useEffect, useState } from "react";

const useTypingEffect = (text: string, speed: number = 80) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, currentIndex + 1));
      currentIndex += 1;
      if (currentIndex === text.length) {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
};

export default useTypingEffect;
