import "../styles/Work.css";
import Grid from "@mui/material/Grid";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.data";

function Work() {
  return (
    <>
      <Grid container justifyContent="center" spacing={10}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.title}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Work;
