import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
  <div className="search-bar">
    <h2>Discover High Quality Images</h2>
    <p>Search millions of beautiful photos from talented photographers worldwide</p>
    <form onSubmit={handleFormSubmit}>
      <div className="search-input-wrapper">
        <input 
          value={term} 
          onChange={handleChange}
          placeholder="Search for stunning images..."
        />
        <button type="submit" className="search-button">
          🔍
        </button>
      </div>
    </form>
  </div>
);
}

export default SearchBar;
