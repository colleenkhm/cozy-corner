import "../styles/Work.css";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.data";

function Work() {
  return (
    <div className="work-grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}

export default Work;
