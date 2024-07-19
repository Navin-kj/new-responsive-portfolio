import { GoHome } from "react-icons/go";
import "./style.css";
import { IoMdCodeWorking } from "react-icons/io";

const Details = () => {
  return (
    <div className="details">
      <div className="self-about"></div>
      <div className="self-about-texts">
        <span className="name">Hey, I'm Naveen</span>
        <span className="texts">A Frontend developer based in Chennai.</span>
      </div>
      <div className="details-woimg">
        <div className="study-group">
          <div className="graduate-icon">
            <GoHome className="icon-cap" />
          </div>
          <div className="college">
            <span className="university">Lives in Chennai, Tamilnadu.</span>
          </div>
        </div>
        <div className="Group-about">
          <span className="title">Summary</span>
          <span className="texts">
            I'm a passionate React JS developer with expertise in JavaScript,
            HTML, CSS, React, Redux, and front-end tools. I excel in crafting
            appealing and intuitive user interfaces for seamless experiences.
            I'm also comfortable with frameworks like Bootstrap and Material UI.
            I'm always eager to learn and explore new web development
            technologies.
          </span>
        </div>

        <div className="Group-about">
          <span className="title">Work</span>
          <div className="icon-group">
            <div className="graduate-icon">
              <IoMdCodeWorking className="icon-cap" />
            </div>
            <div className="college">
              <span className="university">Frontend Developer</span>
              <span className="period">2022 - Present</span>
            </div>
          </div>
          <span className="texts">
            As a React Developer at Wipro for the DBS project since late 2022,
            I've been instrumental in feature development and cross-functional
            collaboration, prioritizing code optimization and staying updated
            with industry trends for impactful solutions.
          </span>
        </div>
        <div className="education-set">
          <span className="edu-title">Education</span>
          <div className="college">
            <span className="course-name">
              Bachelor of Computer Science Engineering
            </span>
            <span className="period-loc">2018 - 2022</span>
            <span className="period-loc">Anna University, Chennai.</span>
          </div>
          <div className="college">
            <span className="course-name">Higher Secondary School</span>
            <span className="period-loc">2017 - 2018</span>
            <span className="period-loc">
              Shanumga Govt school, Tiruvannamalai.
            </span>
          </div>
        </div>
        <div className="skill-sets">
          <span className="title">Skills</span>
          <div className="skills">
            <span className="skill-texts">React</span>
            <span className="skill-texts">Javascript</span>
            <span className="skill-texts">Typescript</span>
            <span className="skill-texts">Firebase</span>
            <span className="skill-texts">Bootstrap</span>
            <span className="skill-texts">Node.js</span>
            <span className="skill-texts">JIRA</span>
            <span className="skill-texts">HTML</span>
            <span className="skill-texts">CSS</span>
          </div>
        </div>
        <div className="skill-sets">
          <span className="title">Languages</span>
          <div className="skills">
            <span className="skill-texts">English</span>
            <span className="skill-texts">Tamil</span>
            <span className="skill-texts">Telugu</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
