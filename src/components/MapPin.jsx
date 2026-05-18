import { useState } from "react";
import Modal from "@mui/material/Modal";
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
        <Modal
  open={open}
  onClose={() => setOpen(false)}
>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(false)} className="close-button">x</button>
            <h2>{title}</h2>
            <div className="gallery">
             {images.map((img, index) => (
               <img key={index} src={img} alt={title} />
            ))}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default MapPin;
