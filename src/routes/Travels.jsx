import { useState, useEffect} from 'react';
import worldMap from "../assets/world-map-outline-isolated-on-transparent-background-free-png-3465182794.png";
import MapPin from "../components/MapPin";
import "../styles/Travels.css";

export const Travels = () => {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/travels")
      .then((res) => res.json())
      .then(setTravels);
  }, []);

  return (
    <div className="map-container">
      <img src={worldMap} alt="world map" className="world-map" />
      <div className="pins-layer">
        {travels.map((place) => (
  <MapPin key={place.id} place={place} />
))}
      </div>
    </div>
  );
}

export default Travels;
