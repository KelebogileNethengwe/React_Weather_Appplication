
import "./App.css";
import SearchForm from "./SearchForm";
import DeveloperLinks from "./DeveloperLinks";

function App() {

  return (
    <div className="App">
      <div className="weatherContainer">
        <SearchForm defaultCity ='Johannesburg'/>
      </div>
      <DeveloperLinks />
    </div>
  );
}

export default App;
