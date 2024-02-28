import React from "react";
import { FaReact,FaGithub,FaHtml5,FaCss3Alt,FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript,IoLogoFirebase  } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";

function Skills() {
  const hardSkills = ["HTML5","CSS3","Javascript","React","Github","Git","Firebase","TypeScript"]

  const skillIcons = {
    TypeScript: BiLogoTypescript,
    Firebase: IoLogoFirebase,
    Git: FaGitAlt,
    Javascript: IoLogoJavascript,
    CSS3: FaCss3Alt,
    HTML5: FaHtml5,
    React: FaReact,
    Github: FaGithub,
  };



  return (
    <div className="skills">
      <div className="hardskills">
      <p className="main">Hard Skills:</p>
      <ul>
        {hardSkills.map((skill, index) => ( <div key={index} id={`skill-${index}`} className="skill">
        <li><span>{React.createElement(skillIcons[skill])}</span> <p>{skill}</p> </li>
        </div>
        ))}
      </ul>
      </div>
      <div className="softskills">
        <p id="main2" className="main">Soft Skills:</p>
      <ul>
        <li>TeamPlayer</li>
        <li>Time Management</li>
        <li>Willingness to Learn</li>
        <li>Problem Solving</li>
        <li>Effective Communication</li>
      </ul>
      </div>
    </div>
  )
}

export default Skills

// ["TypeScript"]