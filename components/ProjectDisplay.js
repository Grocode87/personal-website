import { useEffect, useState } from "react";

const Project = ({ project }) => {
  return (
    <div className="group w-full h-full relative overflow-hidden">
      <div className="w-full h-full brightness-50 bg-gray-500 rounded-md">
        {project.image && (
          <img
            className="w-full h-full rounded-md duration-300 hover:scale-105"
            src={project.image}
          ></img>
        )}
      </div>
      <div className="absolute top-3 left-3 w-full">
        <p className="text-xl font-semibold">{project.title}</p>
        <p>{project.subheading}</p>
      </div>
      <div className="absolute bottom-3 left-3 flex flex-row space-x-4">
        {project.links.website && (
          <div className="w-6 h-6 hover:scale-105 hover:cursor-pointer">
            <a href={project.links.website} target="_blank">
              <img src="./images/world-wide-web.png" />
            </a>
          </div>
        )}
        {project.links.github && (
          <div className="w-6 h-6 hover:scale-105 hover:cursor-pointer">
            <a href={project.links.github} target="_blank">
              <img src="./images/github-sign.png" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export const ProjectDisplay = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("./assets/projects.json").then((res) =>
      res.json().then((projects) => setProjects(projects))
    );
  }, []);

  return (
    <div className="grid grid-cols-4 gap-8 w-full">
      {projects &&
        projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
    </div>
  );
};