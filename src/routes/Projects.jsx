import "../styles/Projects.css";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.data";

function Projects() {
  return (
    <div className="work-grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}

export default Projects;
