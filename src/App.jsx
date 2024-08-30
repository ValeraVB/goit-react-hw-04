import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import unsplashService from "./services/unsplashService";
import { Toaster } from "react-hot-toast"; // Импортируем Toaster для отображения сповіщених
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false); // Состояние загрузки дополнительных изображений
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);

  const fetchImages = async (searchQuery, pageNumber) => {
    setLoading(pageNumber === 1); // Показываем индикатор загрузки при первой загрузке
    setLoadingMore(pageNumber > 1); // Показываем индикатор загрузки при загрузке дополнительных изображений
    try {
      const data = await unsplashService.fetchImages(searchQuery, pageNumber);
      setImages((prevImages) => [...prevImages, ...data.results]);
      setPage(pageNumber);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]); // Сбросить изображения при новом поиске
    setPage(1); // Сбросить номер страницы при новом поиске
    fetchImages(searchQuery, 1);
  };

  const handleLoadMore = () => {
    fetchImages(query, page + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {loading && !images.length && (
        <div className="loader-container center-loader">
          <Loader />
        </div>
      )}
      <div className="gallery-container">
        <ImageGallery images={images} onImageClick={handleImageClick} />
        {!loading && images.length > 0 && !loadingMore && (
          <div className="load-more-container">
            <LoadMoreBtn onClick={handleLoadMore} />
          </div>
        )}
      </div>
      <ImageModal image={selectedImage} onClose={handleCloseModal} />
      <Toaster /> {/* Добавляем Toaster для отображения сповіщених */}
    </div>
  );
};

export default App;
