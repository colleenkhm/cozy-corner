import worldMap from '../assets/world-map-outline-isolated-on-transparent-background-free-png-3465182794.png'
import MapPin from '../components/MapPin'
import travels from '../data/travels.data'
import '../styles/Travels.css'

function Travels() {
  return (
    <div className="map-container">
      <img src={worldMap} alt="world map" className="world-map" />
      <div className="pins-layer">
        {travels.map((place) => (
          <MapPin
            key={place.id}
            top={place.top}
            left={place.left}
            title={place.title}
            images={place.images}
          />
        ))}
      </div>
    </div>
  )
}

export default Travels