import { TbBrandTypescript } from "react-icons/tb";
import "./style.css";
import { FaReact } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import { CgNpm } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectLists from "./ProjectLists";
import { useLayoutEffect } from "react";
import { startLoading, stopLoading } from "../../data/actions";
import { useDispatch } from "react-redux";
import useBackConfirmation from "../../utils/useBack";
import usePageRefresh from "../../utils/useRefresh";
import useDeviceType from "../../utils/useDeviceType";

const ProjectPage = () => {
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
  useBackConfirmation();
  usePageRefresh();
  const { isMobile } = useDeviceType();
  return (
    <div className="project-page">
      {isMobile ? (
        <div className="project-img" />
      ) : (
        <div className="ibproject-img" />
      )}
      <div className="project-details">
        <div className="desc">
          <span className="title-proj">React-based Web Applications</span>
          <span className="small-texts">
            A web application built with React that displays a list of items
            from an API to fetch images and allow users to add item etcc.. And
            using styles, images, icons.
          </span>
        </div>
        <div className="desc">
          <span className="title-proj">Object</span>
          <span className="small-texts">
            To create a simple web portfolio using React, apply what I learned
            in the courses and have better understanding of how to use React.
          </span>
        </div>
        <div className="desc">
          <span className="title-proj">Tools used</span>
          <div className="tools-used">
            <div className="study-group-project">
              <div className="graduate-icon">
                <FaReact className="icon-cap" />
              </div>
              <div className="college">
                <span className="university">React</span>
              </div>
            </div>
            <div className="study-group-project">
              <div className="graduate-icon">
                <TbBrandTypescript className="icon-cap" />
              </div>
              <div className="college">
                <span className="university">Typescript</span>
              </div>
            </div>
            <div className="study-group-project">
              <div className="graduate-icon">
                <SiWebpack className="icon-cap" />
              </div>
              <div className="college">
                <span className="university">Webpack</span>
              </div>
            </div>
            <div className="study-group-project">
              <div className="graduate-icon">
                <CgNpm className="icon-cap" />
              </div>
              <div className="college">
                <span className="university">NPM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="desc">
          <span className="title-proj">View Project Code's</span>
          <div
            className="git-hub"
            onClick={() => handleBtnClick("https://github.com/Navin-kj")}
          >
            <span>GitHub Repository</span>
            <span>
              <FaArrowRightLong className="arrow-icon" />
            </span>
          </div>
        </div>
        <div className="desc">
          <span className="title-proj">Final Outcome</span>
          <span className="small-texts">
            I succeeded in creating an operational web application that allows
            users to add items and lists them from the API to real-time edit and
            dlt item. Also, I made various apps for drawing, tic tac toe, file
            conversion, movies, and recipe.
          </span>
        </div>

        <div className="desc">
          <span className="title-proj">Project List</span>
          <div className="project-done">
            <ProjectLists />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
