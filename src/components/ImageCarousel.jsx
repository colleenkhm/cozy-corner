import ImageGallery from "react-image-gallery";

function ImageCarousel({ images, title }) {
  return (
    <div className="carousel-section">
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </div>
  );
}

export default ImageCarousel;
