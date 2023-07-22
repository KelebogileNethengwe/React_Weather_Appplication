
import "./App.css";
import SearchForm from "./SearchForm";
import MainWeather from "./MainWeather";
import ExtraWeatherInfo from "./ExtraWeatherInfo";

function App() {
  return (
    <div className="App">
      <div className="weatherContainer">
        <SearchForm />
        <MainWeather />
        <ExtraWeatherInfo />
      </div>
    </div>
  );
}

export default App;
