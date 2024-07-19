import { RiGraduationCapLine } from "react-icons/ri";
import Profile from "./profile-img.jpg";
import "./style.css";
import { IoLogoReact } from "react-icons/io5";
import {
  FaDev,
  FaHtml5,
  FaInstagram,
  FaNodeJs,
  FaWhatsapp,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
// import { CiLinkedin } from "react-icons/ci";

const ProfileCard = () => {
  const handleBtnClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="profile-card">
      <div className="profile-details">
        <div className="img-content">
          <img src={Profile} className="img-src" />
        </div>
        <span className="name">Naveenkumar K</span>
        <span className="desig">
          Frontend Developer at Wipro, Chennai, India
        </span>
      </div>
      <div className="btn-group">
        <button
          className="btn-follow"
          onClick={() =>
            handleBtnClick(
              "https://wa.me/+919342919352?text=Hi Naveenkumar, I would like to connect with you."
            )
          }
        >
          Message <FaWhatsapp className="whatsapp-icon" />
        </button>
        <button
          className="btn-message"
          onClick={() =>
            handleBtnClick("https://www.instagram.com/naveen_kj._/")
          }
        >
          Follow <FaInstagram />
        </button>
      </div>
      <div className="study-group">
        <div className="graduate-icon">
          <RiGraduationCapLine className="icon-cap" />
        </div>
        <div className="college">
          <span className="university">
            College of Anna University, Chennai.
          </span>
          <span className="degree">B.E Computer Science</span>
          <span></span>
        </div>
      </div>
      <div className="open-to-work">
        <span>Open to work</span>
        <span className="green-circle"></span>
      </div>
      <div className="skill-set">
        <div className="skill-card">
          <IoLogoReact className="skill-logo" />
          <span className="skill">Proficient in</span>
          <span className="skill-main">React</span>
        </div>
        <div className="skill-card">
          <SiTypescript className="skill-logo" />
          <span className="skill">Proficient in</span>
          <span className="skill-main">Js & Ts</span>
        </div>
        <div className="skill-card">
          <FaHtml5 className="skill-logo" />
          <span className="skill">Proficient in</span>
          <span className="skill-main">Html/Css</span>
        </div>
        <div className="skill-card">
          <FaDev className="skill-logo" />
          <span className="skill">Intermidate</span>
          <span className="skill-main">CI / CD</span>
        </div>
        <div className="skill-card">
          <FaNodeJs className="skill-logo" />
          <span className="skill">Intermediate</span>
          <span className="skill-main">Node.js</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
