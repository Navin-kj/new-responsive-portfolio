import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { ParticlesBackground } from "../../Components/Partical/ParticalBackground";
import TypingText from "../../Components/TypingText";
import IBHomeImage from "./image-new.png";
import "./style.css";
import { FaXTwitter } from "react-icons/fa6";
const IBHome = () => {
  const words = ["Developer.", "Professional Coder.", "Designer."];
  return (
    <div className="ib-home">
      <div className="welcome">
        <div className="welcome-ib-main">
          <span className="uppercase">Welcome to my world</span>
          <div className="my-details-tab">
            <div>
              Hi, I'm <span className="name">Naveenkumar</span>
            </div>
            <div className="works">
              <span className="a-color">a</span>
              <div className="typing">
                <TypingText text={words} delay={500} />
              </div>
            </div>
          </div>
          <div className="content">
            I use animation as a third dimension by which to simplify
            experiences and Guiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </div>
        </div>
        <div className="social-tab">
          <div>
            <span className="social-text">Find With Me</span>
            <div>
              <ul className="wrapper">
                <li className="icon github">
                  <span className="tooltip">Github</span>
                  <FaGithub />
                </li>
                <li className="icon facebook">
                  <span className="tooltip">LinkedIn</span>
                  <FaLinkedinIn />
                </li>
                <li className="icon twitter">
                  <span className="tooltip">Twitter</span>
                  <FaXTwitter />
                </li>
                <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <FaInstagram />
                </li>
                <li className="icon Whatsapp">
                  <span className="tooltip">Whatsapp</span>
                  <FaWhatsapp />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="my-image">
        <img className="ib-home-img" src={IBHomeImage} />
      </div>
      <ParticlesBackground />
    </div>
  );
};

export default IBHome;
