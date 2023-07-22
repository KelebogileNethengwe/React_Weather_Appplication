
import "./App.css";
import SearchForm from "./SearchForm";
import MainWeather from "./MainWeather";
import ExtraWeatherInfo from "./ExtraWeatherInfo";
import DeveloperLinks from "./DeveloperLinks";

function App() {
  return (
    <div className="App">
      <div className="weatherContainer">
        <SearchForm />
        <MainWeather />
        <ExtraWeatherInfo />
      </div>
      <DeveloperLinks />
    </div>
  );
}

export default App;
