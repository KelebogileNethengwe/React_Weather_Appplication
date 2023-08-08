import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeeklyWeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setLoaded(true);
    setForecast(response.data.daily);
  }

  console.log(props);

  if (loaded) {
    return (
      <div className="WeatherForecast row" id="forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return null;
  }
}


