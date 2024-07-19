import { useState } from "react";
import "./style.css";
import { FaWindowClose } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../data/actions";
import useBackConfirmation from "../../utils/useBack";
import usePageRefresh from "../../utils/useRefresh";

interface UserData {
  name: string;
  email: string;
  message: string;
}
const initialUserData: UserData = {
  name: "",
  email: "",
  message: "",
};

const Contactpage = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<UserData>(initialUserData);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const onSetValues = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputName: string
  ): void => {
    const { value } = e.target;
    setUserData((prevUserData) => ({ ...prevUserData, [inputName]: value }));
  };
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (!userData.name || !userData.email || !userData.message) {
      dispatch(startLoading());
      setTimeout(() => {
        dispatch(stopLoading());
        setNotification({
          type: "error",
          message: "Please fill in all fields before submitting.",
        });
      }, 3000);
      return;
    }

    try {
      const response = await fetch(
        "https://contact-form-964b5-default-rtdb.firebaseio.com/messageData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        setTimeout(() => {
          setNotification({
            type: "success",
            message: "Message sent successfully!",
          });
        }, 3000);
      } else {
        setNotification({ type: "error", message: "Error sending message" });
      }
    } catch (error) {
      setNotification({ type: "error", message: "Error sending message" });
    }
  };
  const closeNotification = (): void => {
    setNotification(null);
  };
  useBackConfirmation();
  usePageRefresh();
  return (
    <div className="contact-page">
      <div className="form-layouts">
        <div className="input-text">
          <input
            type="text"
            placeholder="Your name"
            value={userData.name}
            onChange={(e) => onSetValues(e, "name")}
            required
          />
        </div>
        <div className="input-text">
          <input
            type="text"
            placeholder="Your email"
            value={userData.email}
            onChange={(e) => onSetValues(e, "email")}
            required
          />
        </div>
        <div className="input-text">
          <textarea
            placeholder="Your message"
            value={userData.message}
            onChange={(e) => onSetValues(e, "message")}
            required
          />
        </div>
        <div className="send-btn-div">
          <button
            id="btn-message"
            className="button-message"
            onClick={handleSubmit}
          >
            <div className="content-avatar">
              <div className="status-user"></div>
              <div className="avatar">
                <svg
                  className="user-img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z"></path>
                </svg>
              </div>
            </div>
            <div className="notice-content">
              <div className="username">Naveenkumar K</div>
              <div className="lable-message">Send</div>
              <div className="user-id">@naveen_kj._</div>
            </div>
          </button>
        </div>
      </div>
      {notification && (
        <div className={`notification ${notification.type}`}>
          <p>{notification.message}</p>
          <FaWindowClose onClick={closeNotification} className="close-icon" />
        </div>
      )}
    </div>
  );
};

export default Contactpage;
