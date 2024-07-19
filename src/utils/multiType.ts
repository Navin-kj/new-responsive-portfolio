import { useEffect, useState } from "react";

const useMultiTypingEffect = (
  text: string | string[],
  speed: number = 100,
  delay: number = 2000
): string => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const texts = Array.isArray(text) ? text : [text];
    const currentText = texts[currentTextIndex];

    if (isTyping) {
      if (currentCharIndex < currentText.length) {
        const typingTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentText[currentCharIndex]);
          setCurrentCharIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(typingTimeout);
      } else {
        // Done typing, start delay before clearing and moving to the next text
        const delayTimeout = setTimeout(() => {
          setIsTyping(false);
        }, delay);

        return () => clearTimeout(delayTimeout);
      }
    } else {
      // Not typing, prepare for next text
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentCharIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }, delay);

      return () => clearTimeout(resetTimeout);
    }
  }, [text, currentTextIndex, currentCharIndex, isTyping, speed, delay]);

  return displayedText;
};

export default useMultiTypingEffect;
