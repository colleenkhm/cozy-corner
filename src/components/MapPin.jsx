import { useState } from "react";
import Box from '@mui/material/Box';
import Modal from "@mui/material/Modal";
import { FaMapMarkerAlt } from "react-icons/fa";

function MapPin({ place }) {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);

  const openModal = async () => {
    setOpen(true);

    const res = await fetch(
      `http://localhost:5000/api/travels/${place.folder}`
    );

    const data = await res.json();
    setImages(data);
  };

  return (
    <>
      <button
        className="map-pin"
        style={{ top: place.top, left: place.left }}
        onClick={openModal}
      >
        <FaMapMarkerAlt />
      </button>

      <Modal open={open} onClose={() => setOpen(false)} scrollable>
        <Box className="modal">
          <button className="close-button" onClick={() => setOpen(false)}>x</button>

          <h2>{place.title}</h2>

          <div className="gallery">
            {images.map((img, i) => (
              <img
                key={i}
                src={`http://localhost:5000${img}`}
                alt={place.title}
              />
            ))}
        </div>
        </Box>
      </Modal>
    </>
  );
}

export default MapPin;