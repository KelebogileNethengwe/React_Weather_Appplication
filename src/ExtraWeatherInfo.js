import React from "react";
import WeeklyForecast from "./WeeklyForecast";
import "./ExtraWeatherInfo.css";

export default function SearchButton() {
  return (
    <div className="weather_info row">
      <div className="weather_card col">
        <i className="fa-solid fa-droplet"></i>
        <div>
          <p>Humidity</p>
          <p>
            <span id="humidity">18</span> %
          </p>
        </div>
      </div>
      <div className="weather_card col">
        <i className="fa-solid fa-temperature-quarter"></i>
        <div>
          <p>Feels like</p>
          <p>
            <span id="feels_like">18</span> <sup>°</sup>
          </p>
        </div>
      </div>
      <div className="weather_card col">
        <i className="fa-solid fa-wind"></i>
        <div>
          <p>Wind</p>
          <p>
            <span id="wind">18</span> km/h
          </p>
        </div>
      </div>
      <WeeklyForecast />
    </div>
  );
}
