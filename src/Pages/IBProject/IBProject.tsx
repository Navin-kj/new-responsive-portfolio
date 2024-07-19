import "./style.css";
import ProjectCard from "./ProjectCard";

const IBProject = () => {
  return (
    <div>
      <div className="main-project-tab">
        <span className="things">
          Things I’ve made trying to put my dent in the universe.
        </span>
        <div className="desc">
          <span className="title1">React-based Web Applications </span>
          <span className="small-">
            I've worked on a variety of projects over the years and I'm proud of
            the progress I've made. Many of these projects are open-source and
            available for others to explore and contribute to. If you're
            interested in any of the projects I've worked on, please feel free
            to check out the code and suggest any improvements or enhancements
            you might have in mind. Collaborating with others is a great way to
            learn and grow, and I'm always open to new ideas and feedback.
          </span>
        </div>
        <div className="desc">
          <span className="title1">Object </span>
          <span className="small">
            To create a simple web portfolio using React, apply what I learned
            in the courses and have better understanding of how to use React.
          </span>
        </div>
      </div>
      <div></div>
      <ProjectCard />
    </div>
  );
};

export default IBProject;
