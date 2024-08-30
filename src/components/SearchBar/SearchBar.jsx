import { useState } from "react";
import { toast } from "react-hot-toast"; // Импортируем библиотеку для сповіщений
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    // Проверяем, если поле ввода пустое
    if (query.trim() === "") {
      toast.error("Please enter text to search images."); // Показываем сповіщення
      return; // Выходим из функции, не вызывая onSearch
    }

    // Вызываем функцию onSearch, если есть текст
    onSearch(query);
  };

  return (
    <header>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
