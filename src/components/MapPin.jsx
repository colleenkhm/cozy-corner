import { useState } from "react";
import Modal from "@mui/material/Modal";
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function MapPin({ top, left, title, images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleOpen = () => {
    setIndex(0);
    setOpen(true);
  };

  const showPrev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const showNext = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <>
      <button className="map-pin" style={{ top, left }} onClick={handleOpen}>
        <FaMapMarkerAlt />
      </button>

      {open && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(false)} className="close-button">
              x
            </button>
            <h2>{title}</h2>

            <div className="carousel">
              <button
                className="carousel-arrow carousel-arrow-prev"
                onClick={showPrev}
                aria-label="Previous photo"
              >
                <FaChevronLeft />
              </button>

              <img
                src={images[index]}
                alt={`${title} ${index + 1} of ${images.length}`}
                className="carousel-image"
              />

              <button
                className="carousel-arrow carousel-arrow-next"
                onClick={showNext}
                aria-label="Next photo"
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="carousel-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${i === index ? " active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default MapPin;
