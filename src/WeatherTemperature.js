import React, { useState } from "react";
import "./App.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
event.preventDefault();
setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;}
  if (unit === "celsius") {
    return (
      <div>
        <span id="weather-temperature">{Math.round(props.celsius)}</span>
        <span class="unit">
          <sup>
            ° C |{" "}
            <a href="/" id="celsius" onClick={showFahrenheit}>
              ° F{" "}
            </a>{" "}
          </sup>
        </span>
      </div>
    );
  } else {
    
    return (
      <div>
        <span id="weather-temperature">{Math.round(fahrenheit())}</span>
        <span class="unit">
          <sup>
            <a href="/" id="fahrenheit" onClick={showCelsius}>
              ° C{" "}
            </a>{" "}
            | ° F
          </sup>
        </span>
      </div>
    );
  }
}
