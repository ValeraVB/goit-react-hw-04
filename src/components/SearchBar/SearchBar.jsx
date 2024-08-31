import { useState } from "react";
import { toast } from "react-hot-toast";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter text to search images.");
    }

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
