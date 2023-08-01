import React from "react";
import "./App.css";
import WeatherIcon from "./WeatherIcon";

export default function WeeklyWeatherForecast() {
  return (
    <div className="WeatherForecast row" id="forecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastPreview">
            <div className="forecast-time">Wed</div>
            <WeatherIcon code="04d" size={"44px"} />
            <div className="forecast-temperature">
              <span className="max-temperature">15°</span>
              <span className="min-temperature">2°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
