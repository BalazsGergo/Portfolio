import Project from "./Project";

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects:</h2>
      <Project
        url={"/Countries.png"}
        projectName={"The Countries of the world"}
        text={
          "This project is a web application that showcases countries of the world."
        }
        projectUrl={"https://github.com/BalazsGergo/Countries"}
        webUrl={"https://balazsgergo.github.io/Countries/"}
      />

      <Project
        url={"/Rick&Morty.png"}
        projectName={"Rick&Morty"}
        text={
          "This website allows you to browse the main data of characters from the Rick and Morty show"
        }
        projectUrl={"https://github.com/BalazsGergo/Rick-and-Morty"}
        webUrl={"https://balazsgergo.github.io/Rick-and-Morty/"}
      />
    </div>
  );
}

export default Projects;
