import "../styles/Home.css";
import meProfile from "../assets/meProfile.jpeg";
import meViolinYoung from "../assets/meViolinYoung.jpeg";
import bali from "../assets/bali.jpeg";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <div className="home-section">
        <h2>Hi, I'm Colleen</h2>
        <div className="nav-cards">
          <Link to="/resume" className="nav-card">
            <img
              src={meProfile}
              alt="Colleen smiling"
              className="nav-card-image"
            />
            <h4 className="title">software engineer</h4>
          </Link>

          <div className="nav-card">
            <img
              src={meViolinYoung}
              alt="Colleen as an 8 year old playing violin"
              className="nav-card-image"
            />
            <h4 className="title">musician</h4>
          </div>

          <Link to="/travels" className="nav-card">
            <img
              src={bali}
              alt="couple looking out at peninsula"
              className="nav-card-image"
            />
            <h4 className="title">world traveler</h4>
          </Link>
        </div>
        <div className="home-hero">
          <p className="text-block">
            a linguistically-savvy dev striving to break down communication
            barriers, improve information accessibility, and inspire
            creativity
          </p>
        </div>
      </div>
    </>
  );
}
