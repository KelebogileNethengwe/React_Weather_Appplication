import React, { useState } from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";



import "./App.css";

export default function SearchForm(props) {
 
  const [weather, setWeather] = useState({loaded: false});
  function handleresponse(response) {
    console.log(response.data);

    setWeather({
      loaded: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      feelslike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      iconUrl: "https://openweathermap.org/img/wn/04d@2x.png",
    });
 
  }

  if (weather.loaded) {
    return (
      <div>
        <div className="SearchForm">
          <form id="city-search-form">
            <input
              className="CitySearch"
              type="text"
              id="input-search"
              placeholder="Search for a city"
              autocomplete="off"
            />
            <button class="city-search-button">
              <i className="fa-solid fa-magnifying-glass" value="submit"></i>
            </button>
            <button className="current-location-button">
              current location
            </button>
          </form>
        </div>
        <div className="MainWeatherInfo">
          <h2 className="weatherCity">{weather.city}</h2>
          <div id="datetime"></div>
          <div>
            <p id="description">Partly Cloudy</p>
          </div>
          <div className="weather_icon">
            <img
              src={weather.iconUrl}
              alt={weather.description}
              id="icon"
            />
          </div>

          <p>
            <span id="weather-temperature">
              {Math.round(weather.temperature)}
            </span>
            <span class="unit">
              <sup>
                <a
                  href="https://github.com/KelebogileNethengwe/React_Weather_App/tree/main"
                  id="celsius"
                >
                  ° C{" "}
                </a>{" "}
              </sup>
            </span>
          </p>
        </div>

        <div className="weather_info row">
          <div className="weather_card col">
            <i className="fa-solid fa-droplet"></i>
            <div>
              <p>Humidity</p>
              <p>
                <span id="humidity">{weather.humidity}</span> %
              </p>
            </div>
          </div>
          <div className="weather_card col">
            <i className="fa-solid fa-temperature-quarter"></i>
            <div>
              <p>Feels like</p>
              <p>
                <span id="feels_like">{weather.feelslike}</span> <sup>°</sup>
              </p>
            </div>
          </div>
          <div className="weather_card col">
            <i className="fa-solid fa-wind"></i>
            <div>
              <p>Wind</p>
              <p>
                <span id="wind">{weather.wind}</span> km/h
              </p>
            </div>
          </div>
        </div>
        <div className="WeatherForecast row" id="forecast"></div>
      </div>
    );
  } else {

   
    let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleresponse);
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
