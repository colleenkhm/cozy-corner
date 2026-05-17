import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import "../styles/About.css";
import portland from "../assets/portland.jpeg";
import stLouis from "../assets/stLouis.jpeg";
import cliffsOfMoher from "../assets/meCliffsOfMoher.jpeg";

function About() {
  return (
    <>
      <div className="about-me-section">
        {/* Intro / Story Header */}
        <h2>About Me</h2>
        <div className="intro-section">
          <Card className="profile-card">
            <img
              src={cliffsOfMoher}
              alt="Colleen at the Cliffs of Moher"
              className="profile-image"
            />
          </Card>

          <div className="bio-container">
            <p className="bio">
              I’m Colleen, a software engineer with 4+ years of experience
              building e-commerce applications for a global audience using
              React, TypeScript, and GraphQL. Before transitioning into tech, I
              studied linguistics at Lawrence University, volunteered full-time
              on an Emergency Response Team through AmeriCorps, and spent lots
              of time working in the service industry. I was drawn to
              programming because it combines many of the things I care about
              most: language, creativity, and problem-solving. I enjoy building
              thoughtful, user-centered experiences and am especially interested
              in products connected to education, the arts, and community
              improvement. Outside of work I can be found writing/playing music,
              exploring the city with friends, or practicing the native language
              of whichever country I hope to visit next.
            </p>
          </div>
        </div>
        {/* <p>
        I’ve lived in two very different places that shaped how I think and create.
        One is rooted in nature and quiet reflection, the other in city energy and momentum.
        This contrast shows up in everything I build.
      </p> */}

        {/* about Cards */}
      </div>
      <div>
        <Grid
          container
          className="about-container"
          justifyContent="center"
          spacing={8}
        >
          <Grid item xs={12} md={3}>
            <Card className="about-card">
              <img
                src={portland}
                alt="Forest in Portland"
                className="about-image"
              />

              <CardContent className="about-content">
                <h4>Portland, OR</h4>
                <p variant="subtitle2" color="text.secondary">
                  Where I'm from
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}></Grid>

          {/* St. Louis Card */}
          <Grid item xs={12} md={3}>
            <Card className="about-card">
              <img
                src={stLouis}
                alt="St. Louis Gateway Arch at sunset"
                className="about-image"
              />

              <CardContent className="about-content">
                <h4>Saint Louis, MO</h4>
                <p variant="subtitle2" color="text.secondary">
                  Where I live now
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default About;
