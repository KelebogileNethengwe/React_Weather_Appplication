import React from "react";
import "./App.css";

export default function WeeklyWeatherForecast() {
  return (
    <div>
      <div class="WeatherForecast row" id="forecast">
        <div class="row">
          <div class="col">
            <div class="WeatherForecastPreview">
              <div class="forecast-time">Wed</div>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt="weather-icon"
                id="weekly-forecast-icon"
                width="60px"
              />
              <div class="forecast-temperature">
                <span class="max-temperature">15°</span>
                <span class="min-temperature">2°</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="WeatherForecastPreview">
              <div class="forecast-time">Thu</div>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt="weather-icon"
                id="weekly-forecast-icon"
                width="60px"
              />
              <div class="forecast-temperature">
                <span class="max-temperature">14°</span>
                <span class="min-temperature">5°</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="WeatherForecastPreview">
              <div class="forecast-time">Fri</div>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt="weather-icon"
                id="weekly-forecast-icon"
                width="60px"
              />
              <div class="forecast-temperature">
                <span class="max-temperature">14°</span>
                <span class="min-temperature">6°</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="WeatherForecastPreview">
              <div class="forecast-time">Sat</div>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt="weather-icon"
                id="weekly-forecast-icon"
                width="60px"
              />
              <div class="forecast-temperature">
                <span class="max-temperature">14°</span>
                <span class="min-temperature">6°</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="WeatherForecastPreview">
              <div class="forecast-time">Sun</div>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt="weather-icon"
                id="weekly-forecast-icon"
                width="60px"
              />
              <div class="forecast-temperature">
                <span class="max-temperature">17°</span>
                <span class="min-temperature">8°</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="WeatherForecastPreview">
              <div class="forecast-time">Mon</div>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt="weather-icon"
                id="weekly-forecast-icon"
                width="60px"
              />
              <div class="forecast-temperature">
                <span class="max-temperature">17°</span>
                <span class="min-temperature">9°</span>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
