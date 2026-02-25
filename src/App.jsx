import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import { fetchWeather } from "./WeatherService";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city, date) => {
    try {
      setError("");

      const data = await fetchWeather(city);

      setWeather({
        ...data,
        selectedDate: date,
      });
    } catch {
      setError("City not found or API error");
      setWeather(null);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Weather Dashboard</h1>

      <SearchBar onSearch={handleSearch} />

      {error && <p className="error-text">{error}</p>}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;