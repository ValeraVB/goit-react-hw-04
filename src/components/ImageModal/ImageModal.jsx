import Modal from "react-modal";
import "./ImageModal.css";

// Устанавливаем корневой элемент для модального окна
Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
      shouldCloseOnEsc={true} // Закрытие при нажатии ESC
      shouldCloseOnOverlayClick={true} // Закрытие при клике вне модального окна
    >
      <button className="modal-close" onClick={onClose}>
        X
      </button>
      <img src={image.urls.regular} alt={image.alt_description} />
      <div className="modal-info">
        <p>
          <strong>Author:</strong> {image.user.name}
        </p>
        <p>
          <strong>Description:</strong> {image.description || "No description"}
        </p>
        <p>
          <strong>Likes:</strong> {image.likes}
        </p>
        <p>
          <strong>Views:</strong> {image.views}
        </p>
        <p>
          <strong>Downloads:</strong> {image.downloads}
        </p>
      </div>
    </Modal>
  );
};

export default ImageModal;
