import "../styles/Home.css";
import meProfile from "../assets/meProfile.jpeg";
import meViolinYoung from "../assets/meViolinYoung.jpeg";
import bali from "../assets/bali.jpeg";
import { Link } from "react-router";

const FIRST_NAME = "COLLEEN".split("");

export default function Home() {
  return (
    <div className="home-section">
      <div className="home-hero">
        <h2 className="name-grids">
          <span className="clue-label">1 across</span>
          <span className="name-grid">
            {FIRST_NAME.map((letter, index) => (
              <span className="grid-cell" key={index}>
                {index === 0 && <span className="grid-cell-number">1</span>}
                {letter}
              </span>
            ))}
          </span>
        </h2>

        <p className="byline">
          <Link to="/resume" className="byline-link">
            software engineer
          </Link>
          <span className="byline-divider">&middot;</span>
          <span>musician</span>
          <span className="byline-divider">&middot;</span>
          <Link to="/travels" className="byline-link">
            world traveler
          </Link>
        </p>

        <p className="lede">
          <span className="drop-cap">A</span>linguistically-savvy dev
          striving to break down communication barriers, improve information
          accessibility, and inspire creativity
        </p>
      </div>

      <div className="clippings">
        <figure className="clipping clipping-1">
          <img src={meProfile} alt="Colleen smiling" />
          <figcaption>fig. 1 &mdash; on site</figcaption>
        </figure>

        <figure className="clipping clipping-2">
          <img
            src={meViolinYoung}
            alt="Colleen as an 8 year old playing violin"
          />
          <figcaption>fig. 2 &mdash; age 8</figcaption>
        </figure>

        <figure className="clipping clipping-3">
          <img src={bali} alt="couple looking out at peninsula" />
          <figcaption>fig. 3 &mdash; bali, indonesia</figcaption>
        </figure>
      </div>
    </div>
  );
}
