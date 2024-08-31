import ImageCard from "../ImageCard/ImageCard";
import Loader from "../Loader/Loader";
import "./ImageGallery.css";

const ImageGallery = ({ images, onImageClick, isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (images.length === 0) {
    return null; // Не рендерить ничего, если нет изображений
  }

  return (
    <div>
      <ul className="image-gallery">
        {images.map((image) => (
          <li key={image.id} className="image-card">
            <ImageCard
              image={image}
              onImageClick={onImageClick}
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
