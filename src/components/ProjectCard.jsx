import "../styles/ProjectCard.css";

function ProjectCard({ title, tech, image, href, alt }) {
  return (
    <a
      className="project-card"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={image} alt={alt} className="project-card-image" />

      <div className="project-card-info">
        <h4>{title}</h4>
        <p>{tech}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
