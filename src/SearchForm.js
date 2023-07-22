import React from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import CurrentLocationButton from "./CurrentLocationButton";
import "./App.css";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form id="city-search-form">
        <SearchInput />
        <SearchButton />
        <CurrentLocationButton />
      </form>
    </div>
  );
}
