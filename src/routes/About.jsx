import "../styles/About.css";
import portland from "../assets/portland.jpeg";
import stLouis from "../assets/stLouis.jpeg";
import lawrence from "../assets/lawrence.jpeg";
import cliffsOfMoher from "../assets/meCliffsOfMoher.jpeg";
import { Link } from "react-router";

function About() {
  return (
    <div className="about-section">
      <h2>About Me</h2>

      <div className="about-layout">
        <div className="about-photos">
          <figure className="clipping about-photo about-photo-1">
            <img src={cliffsOfMoher} alt="Colleen at the Cliffs of Moher" />
            <figcaption>Cliffs of Moher, Ireland</figcaption>
          </figure>

          <figure className="clipping about-photo about-photo-2">
            <img src={portland} alt="Forest in Portland" />
            <figcaption>Portland, OR (hometown)</figcaption>
          </figure>
        </div>

        <div className="about-text">
          <p className="bio">
            Hi! I’m Colleen, a developer with 4+ years of experience
            building e-commerce applications for a global audience using
            React, TypeScript, and GraphQL. Before transitioning into tech, I
            studied linguistics at Lawrence University, volunteered
            full-time on an Emergency Response Team through AmeriCorps, and
            spent many years in the service industry. I was drawn
            to programming because it combines many of the things I care
            about most: language, creativity, and problem-solving. I enjoy
            building thoughtful, user-centered experiences and am especially
            interested in products connected to education, the arts, and
            community improvement. Outside of work I can be found
            writing music, exploring the city with friends, or
            practicing the native language of whichever country I hope to
            visit next.
          </p>

          <p className="jump-line">
            Story continues at{" "}
            <Link to="/travels" className="jump-link">
              TRAVELS
            </Link>{" "}
            &rarr;
          </p>
        </div>

        <div className="about-photos">
          <figure className="clipping about-photo about-photo-4">
            <img src={lawrence} alt="Lawrence University campus" />
            <figcaption>Appleton, WI (college)</figcaption>
          </figure>

          <figure className="clipping about-photo about-photo-3">
            <img src={stLouis} alt="St. Louis Gateway Arch at sunset" />
            <figcaption>St. Louis, MO (current)</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default About;
