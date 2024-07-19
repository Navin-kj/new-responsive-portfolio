import { CiLink } from "react-icons/ci";
import "./style.css";
import { ProjectData } from "../Projects/datas";

const ProjectCard = () => {
  const handleBtnClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="project-lists1">
      {ProjectData.map((project, index) => {
        return (
          <div className="project-card" key={index}>
            <div className="project-head">
              <img
                className="project-img"
                src={project.imageSrc}
                alt="no-image"
              />
              <div className="title">
                <span>{project.name}</span>
              </div>
            </div>
            <div className="template">
              <span>
                Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore
                repellendus qui dicta nemo sit deleniti minima.
              </span>
            </div>
            <div className="last-line">
              <span className="view-demo">View Demo</span>
              <div
                onClick={() => handleBtnClick(project.link)}
                className="link"
              >
                <CiLink />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
