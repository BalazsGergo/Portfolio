import React from "react";
import { Link } from "react-scroll";

function Project({ url, projectName, text, projectUrl, webUrl }) {
  return (
    <div className="project">
      <a id="image-link" href={webUrl}>
        <img src={url} alt="project image" />
      </a>
      <div className="project-desc">
        <h2>{projectName}</h2>
        <p>{text}</p>
        <a id="button" href={projectUrl}>
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default Project;
