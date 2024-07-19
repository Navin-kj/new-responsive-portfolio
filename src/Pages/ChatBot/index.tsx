import { useEffect, useState } from "react";
import { FaRobot } from "react-icons/fa";
import "./style.css";
import useTypingEffect from "../../utils/useTypingEffect";
import { CgClose } from "react-icons/cg";
import { keywordsMapping } from "./qaPairs";
import { FaArrowDownLong } from "react-icons/fa6";

interface QAPair {
  question: string;
  answer: string;
}

interface Message {
  sender: "user" | "bot";
  text: string;
}

interface ChatbotProps {
  qaPairs: QAPair[];
}

const Chatbot: React.FC<ChatbotProps> = ({ qaPairs }) => {
  const [chatBotOpened, setChatBotOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [typing, setTyping] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!chatBotOpened) {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 6000);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [chatBotOpened]);
  useEffect(() => {
    const welcomeMessage: Message = {
      sender: "bot",
      text: "Welcome to Naveen's portfolio! Ask something about Naveen.",
    };
    if (chatBotOpened) {
      setMessages([welcomeMessage]);
    }
  }, [chatBotOpened]);

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === "bot") {
      setTyping(messages[messages.length - 1].text);
    }
  }, [messages]);

  const handleSend = () => {
    if (userInput.trim()) {
      const userMessage: Message = { sender: "user", text: userInput };
      const botResponse = getResponse(userInput, qaPairs, messages);

      setMessages((prevMessages) => [
        ...prevMessages,
        userMessage,
        botResponse,
      ]);
      setUserInput("");
    }
  };

  const getResponse = (
    input: string,
    qaPairs: QAPair[],
    messages: Message[]
  ): Message => {
    const category = keywordsMapping.find(({ keywords }) =>
      keywords.some((keyword) => input.toLowerCase().includes(keyword))
    );
    if (category) {
      const existingResponse = messages.find(
        (message) =>
          message.sender === "bot" &&
          qaPairs.some(
            (q) =>
              q.question.toLowerCase().includes(category.category) &&
              message.text.toLowerCase() === q.answer.toLowerCase()
          )
      );
      if (existingResponse) {
        return existingResponse;
      }
      const response = qaPairs.find((q) =>
        q.question.toLowerCase().includes(category.category)
      );
      return response
        ? { sender: "bot", text: response.answer }
        : { sender: "bot", text: "I don't understand that question." };
    }
    return {
      sender: "bot",
      text: "I'm sorry, I don't have information about that.",
    };
  };

  const displayedTyping = useTypingEffect(typing, 50);
  const toggleChat = () => {
    setChatBotOpened(!chatBotOpened);
  };

  const closeChat = () => {
    setChatBotOpened(false);
  };
  const clearChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "Welcome to Naveen's portfolio! Ask something about Naveen.",
      },
    ]);
  };

  return (
    <div className={`chatbot ${chatBotOpened ? "open" : ""}`}>
      <div className="chatbot-icon" onClick={toggleChat}>
        <FaRobot />
      </div>
      {showPopup && (
        <div className="popup">
          <p>Click here to open the chatbot!</p>
          <span className="down">
            <FaArrowDownLong />
          </span>
        </div>
      )}
      {chatBotOpened && (
        <div className="chat-window">
          <div className="close-chat-bot" onClick={closeChat}>
            <CgClose />
          </div>
          <div className="chat-bar">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.sender === "bot" && msg.text === typing
                  ? displayedTyping
                  : msg.text}
              </div>
            ))}
          </div>
          <div className="chat-btn">
            <input
              className="input-text"
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => (e.key === "Enter" ? handleSend() : null)}
              placeholder="Ask about me..."
              style={{ color: "rgba(0, 0, 0, 0.8)" }}
            />
            <button className="send-btn" onClick={handleSend}>
              Send
            </button>
            <button className="clr-btn" onClick={clearChat}>
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
