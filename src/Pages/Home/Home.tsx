import ProfileCard from "./ProfileCard";
import { useNavigate } from "react-router-dom";
import "./style.css";
import useBackConfirmation from "../../utils/useBack";
import usePageRefresh from "../../utils/useRefresh";

const Home = () => {
  const navigate = useNavigate();
  const handleAboutClick = () => {
    navigate("/about");
  };
  useBackConfirmation();
  usePageRefresh();
  return (
    <div className="home-page">
      <ProfileCard />

      <div className="download-resume">
        <button className="dwnld-btn" onClick={handleAboutClick}>
          View full profile
        </button>
      </div>
    </div>
  );
};

export default Home;
