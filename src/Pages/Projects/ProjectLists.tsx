import { FaArrowRightLong } from "react-icons/fa6";
import { ProjectData } from "./datas";
import "./style.css";

const ProjectLists = () => {
  const handleBtnClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="project-lists">
      {ProjectData.map((project, index) => {
        return (
          <div key={index} className="project-details-new">
            <div
              className="row-data"
              onClick={() => handleBtnClick(project.link)}
            >
              <img src={project.imageSrc} className="project-img-src" />
              <div className="details-proj">
                <span className="proj-title">{project.name}</span>
                <span className="proj-dec">{project.tools}</span>
              </div>
            </div>
            <div onClick={() => handleBtnClick(project.link)}>
              <FaArrowRightLong className="arrow-icon" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectLists;
