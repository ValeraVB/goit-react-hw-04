import "./ImageCard.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className="image-card-content" onClick={() => onImageClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
      {/* <p>{image.description || "No description"}</p> */}
    </div>
  );
};

export default ImageCard;
