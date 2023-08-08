import React, { useState } from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";
import MainWeather from "./MainWeather";
import WeeklyWeatherForecast from "./WeeklyWeatherForecast";
import "./App.css";

export default function SearchForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });
  function handleresponse(response) {
    console.log(response.data);

    setWeather({
      loaded: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      feelslike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleresponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.loaded) {
    return (
      <div>
        <div className="SearchForm">
          <form id="city-search-form" onSubmit={handleSubmit}>
            <input
              className="CitySearch"
              type="text"
              id="input-search"
              placeholder="Search for a city"
              autocomplete="off"
              onChange={handleCityChange}
            />
            <button class="city-search-button">
              <i className="fa-solid fa-magnifying-glass" value="submit"></i>
            </button>
          </form>
          <MainWeather data={weather} />
          <WeeklyWeatherForecast coordinates={weather.coordinates} />
        </div>
      </div>
    );
  } else {
    search();

    return (
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }
}
