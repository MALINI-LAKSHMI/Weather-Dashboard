
function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>

      <p>
        📅 {new Date(weather.selectedDate).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      <p>🌡 Temperature: {weather.temperature} °C</p>
      <p>💧 Humidity: {weather.humidity} %</p>
      <p>🔥 Heat Index: {weather.heatIndex} °C</p>
    </div>
  );
}

export default WeatherCard;