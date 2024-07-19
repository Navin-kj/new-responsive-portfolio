import { NavLink } from "react-router-dom";
import "./style.css";
import { IoPersonOutline } from "react-icons/io5";
import { RiHome4Line } from "react-icons/ri";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FiSend } from "react-icons/fi";
import { useState } from "react";

const Tab = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleNavLinkClick = (to: string) => {
    setActiveLink(to);
  };

  return (
    <div className="tab-page">
      <div className="navigation-tab">
        <div className="tab">
          <div
            className={`button-tab ${activeLink === "/home" ? "active" : ""}`}
          >
            <NavLink
              to="/home"
              className="link"
              onClick={() => handleNavLinkClick("/home" || "")}
            >
              <RiHome4Line />
            </NavLink>
            <span className="link-text">Home</span>
          </div>
          <div
            className={`button-tab ${
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
            <span className="link-text">Project</span>
          </div>
          <div
            className={`button-tab ${
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
            <span className="link-text">Contact</span>
          </div>
          <div
            className={`button-tab ${activeLink === "/about" ? "active" : ""}`}
          >
            <NavLink
              to="/about"
              className="link"
              onClick={() => handleNavLinkClick("/about")}
            >
              <IoPersonOutline />
            </NavLink>
            <span className="link-text">About </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
