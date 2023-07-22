import React from "react";
import "./SearchInput.css";
export default function SearchInput() {
  return (
    <input
      className="CitySearch"
      type="text"
      id="input-search"
      placeholder="Search for a city"
      autocomplete="off"
    />
  );
}
