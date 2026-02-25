import axios from "axios";

export const fetchWeather = async (city) => {
  if (!city) throw new Error("City required");

 
  const geoRes = await axios.get(
    "https://geocoding-api.open-meteo.com/v1/search",
    {
      params: { name: city, count: 1 },
    }
  );

  if (!geoRes.data.results || geoRes.data.results.length === 0) {
    throw new Error("City not found");
  }

  const { latitude, longitude, name, country } =
    geoRes.data.results[0];


  const weatherRes = await axios.get(
    "https://api.open-meteo.com/v1/forecast",
    {
      params: {
        latitude,
        longitude,
        current: "temperature_2m,relative_humidity_2m,apparent_temperature",
      },
    }
  );

  const current = weatherRes.data.current;

  return {
    city: `${name}, ${country}`,
    temperature: current.temperature_2m,
    humidity: current.relative_humidity_2m,
    heatIndex: current.apparent_temperature,
  };
};