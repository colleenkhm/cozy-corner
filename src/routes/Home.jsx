import "../styles/Home.css";
import meProfile from "../assets/meProfile.jpeg";
import meViolinYoung from "../assets/meViolinYoung.jpeg";
import bali from "../assets/bali.jpeg";

const FIRST_NAME = "COLLEEN".split("");

export default function Home() {
  return (
    <div className="home-section">
      <div className="home-hero">
        <h2 className="name-grids">
          <span className="name-grid">
            {FIRST_NAME.map((letter, index) => (
              <span className="grid-cell" key={index}>
                {index === 0 && <span className="grid-cell-number">1</span>}
                {letter}
              </span>
            ))}
          </span>
        </h2>
        <p className="lede">
          1. A crossword-loving dev striving to break down communication
          barriers, improve information accessibility, and inspire creativity
        </p>
      </div>

      <div className="clippings">
        <figure className="clipping clipping-1">
          <img src={meProfile} alt="Colleen smiling" />
          <figcaption>software engineer</figcaption>
        </figure>

        <figure className="clipping clipping-2">
          <img
            src={meViolinYoung}
            alt="Colleen as an 8 year old playing violin"
          />
          <figcaption>musician</figcaption>
        </figure>

        <figure className="clipping clipping-3">
          <img src={bali} alt="couple looking out at peninsula" />
          <figcaption>traveler</figcaption>
        </figure>
      </div>
    </div>
  );
}
