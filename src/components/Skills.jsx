import React from "react";
import { FaReact,FaGithub,FaHtml5,FaCss3Alt,FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript,IoLogoFirebase  } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

function Skills() {
  const hardSkills = ["HTML5","CSS3","Javascript","React","Github","Git","Firebase","TypeScript"]

  const skillIcons = {
    TypeScript: SiTypescript,
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
      <p>Hard Skills:</p>
      <ul>
        {hardSkills.map((skill, index) => ( <div key={index} className="skill">
        <li><span>{skill}</span> <span>{React.createElement(skillIcons[skill])}</span></li>
        </div>
        ))}
      </ul>
      </div>
      <div className="softskills">
        <p>Soft Skills:</p>
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