import useMultiTypingEffect from "../utils/multiType";

interface TypingTextProps {
  text: string | string[];
  speed?: number;
  delay?: number;
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  speed = 100,
  delay = 2000,
}) => {
  const typedText = useMultiTypingEffect(text, speed, delay);

  return <div>{typedText}</div>;
};

export default TypingText;
