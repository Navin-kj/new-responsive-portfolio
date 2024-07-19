import { IoDownloadOutline } from "react-icons/io5";
import Details from "./Details";
import "./style.css";
import { useDispatch } from "react-redux";
import Resume from "./Resume_1.pdf";
import { startLoading, stopLoading } from "../../data/actions";
import { CiLinkedin } from "react-icons/ci";
import { useLayoutEffect } from "react";
import usePageRefresh from "../../utils/useRefresh";
import useBackConfirmation from "../../utils/useBack";

const About = () => {
  const dispatch = useDispatch();
  const handleBtnClick = (url: string) => {
    window.open(url, "_blank");
  };
  useLayoutEffect(() => {
    dispatch(startLoading());
    const timeoutId = setTimeout(() => {
      dispatch(stopLoading());
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleCVClick = () => {
    dispatch(startLoading());
    setTimeout(() => {
      dispatch(stopLoading());
      const newWindow = window.open(Resume, "_blank");
      if (newWindow) {
        newWindow.focus();
      } else {
        console.error(
          "Unable to open the resume. Please check your pop-up blocker settings."
        );
      }
    }, 3000);
  };
  useBackConfirmation();
  usePageRefresh();
  return (
    <div className="about-page">
      <Details />
      <div className="contact">
        <button
          className="contact-btn"
          onClick={() =>
            handleBtnClick(
              "https://www.linkedin.com/in/naveenkumar-k-a5114221a"
            )
          }
        >
          Contact Naveen <CiLinkedin />
        </button>
      </div>
      <div className="download-resume">
        <button className="dwnld-btn" onClick={handleCVClick}>
          Download Resume
          <IoDownloadOutline />
        </button>
      </div>
    </div>
  );
};

export default About;
