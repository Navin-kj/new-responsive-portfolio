import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { RiHome4Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./style.css";
import ThemeToggle from "../Toggle/Toggle";
const WebTab = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleNavLinkClick = (to: string) => {
    setActiveLink(to);
  };
  return (
    <div className="broweser-tab">
      <div className="web-tab">
        <div
          className={`button-web-tab ${activeLink === "/home" ? "active" : ""}`}
        >
          <NavLink
            to="/home"
            className="link"
            onClick={() => handleNavLinkClick("/home")}
          >
            <RiHome4Line />
          </NavLink>
        </div>
        <div
          className={`button-web-tab ${
            activeLink === "/project" ? "active" : ""
          }`}
        >
          <NavLink
            to="/projects"
            className="link"
            onClick={() => handleNavLinkClick("/project")}
          >
            <LiaLaptopCodeSolid />
          </NavLink>
        </div>
        <div
          className={`button-web-tab ${
            activeLink === "/contact" ? "active" : ""
          }`}
        >
          <NavLink
            to="/contact"
            className="link"
            onClick={() => handleNavLinkClick("/contact")}
          >
            <FiSend />
          </NavLink>
        </div>
        <div
          className={`button-web-tab ${
            activeLink === "/about" ? "active" : ""
          }`}
        >
          <NavLink
            to="/about"
            className="link"
            onClick={() => handleNavLinkClick("/about")}
          >
            <IoPersonOutline />
          </NavLink>
        </div>
        <div className={`button-web-tab ${activeLink === "/" ? "active" : ""}`}>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default WebTab;
