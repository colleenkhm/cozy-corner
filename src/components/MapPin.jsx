import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function MapPin({ top, left, title, images }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="map-pin"
        style={{ top, left }}
        onClick={() => setOpen(true)}
      >
        <FaMapMarkerAlt />
      </button>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{title}</h2>

            <div className="gallery">
              {images.map((img, index) => (
                <img key={index} src={img} alt={title} />
              ))}
            </div>

            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default MapPin;
