import React from "react";
import "./App.css";
import TodaysDate from "./TodaysDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeeklyWeatherForecast from "./WeeklyWeatherForecast";

export default function MainWeather(props) {
  return (
    <div className="MainWeatherInfo">
      <h2 className="weatherCity">{props.data.city}</h2>
      <div id="datetime">
        <TodaysDate date={props.data.date} />
      </div>
      <div>
        <p id="description">{props.data.description}</p>
      </div>
      <div className="weather_icon">
        <WeatherIcon code={props.data.icon} size={"150px"} />
      </div>
      <p>
        <WeatherTemperature celsius={props.data.temperature} />
      </p>
      <div className="weather_info row">
        <div className="weather_card col">
          <i className="fa-solid fa-droplet"></i>
          <div>
            <p>Humidity</p>
            <p>
              <span id="humidity">{props.data.humidity}</span> %
            </p>
          </div>
        </div>
        <div className="weather_card col">
          <i className="fa-solid fa-temperature-quarter"></i>
          <div>
            <p>Feels like</p>
            <p>
              <span id="feels_like">{props.data.feelslike}</span> <sup>°</sup>
            </p>
          </div>
        </div>
        <div className="weather_card col">
          <i className="fa-solid fa-wind"></i>
          <div>
            <p>Wind</p>
            <p>
              <span id="wind">{props.data.wind}</span> km/h
            </p>
          </div>
        </div>
      </div>
      <div className="WeatherForecast row" id="forecast">
        <WeeklyWeatherForecast />
      </div>
    </div>
  );
}
