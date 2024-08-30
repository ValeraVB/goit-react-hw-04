import "./LoadMoreBtn.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className="load-more-btn" onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
