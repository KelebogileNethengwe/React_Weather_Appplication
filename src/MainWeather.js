import React from "react";
import "./MainWeather.css";

export default function MainWeather() {
  return (
    <div className="MainWeatherInfo">
      <h2 className="weatherCity">Johannesburg</h2>
      <div id="datetime"></div>
      <div>
        <p id="description">Partly Cloudy</p>
      </div>
      <div className="weather_icon">
        <img
          src="https://openweathermap.org/img/wn/04d@2x.png"
          alt="weather-icon"
          id="icon"
        />
      </div>

      <p>
        <span id="weather-temperature">18</span>
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
  );
}
