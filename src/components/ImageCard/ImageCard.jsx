import "./ImageCard.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className="image-card-content">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onImageClick(image)}
      />
    </div>
  );
};

export default ImageCard;
