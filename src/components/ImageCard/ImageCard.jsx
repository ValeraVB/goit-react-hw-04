import "./ImageCard.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className="image-card-content" onClick={() => onImageClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
        </div>
  );
};

export default ImageCard;
