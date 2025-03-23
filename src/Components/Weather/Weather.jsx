import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Srinagar");
  const [inputCity, setInputCity] = useState(""); // For user input
  const apiKey = process.env.REACT_APP_WEATHERSTACK_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        console.log(`Fetching weather for: ${city}`); // Log the city being searched
        const response = await axios.get(
          `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
        );

        // Log the API response to check the structure
        console.log(response.data);

        // Check if the response contains the necessary data
        if (response.data && response.data.current) {
          setWeatherData(response.data);
        } else {
          console.error("No weather data found for the city.");
          setWeatherData(null); // Reset in case of missing data
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeatherData(null); // Reset on error
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  const handleCityChange = (e) => {
    setInputCity(e.target.value); // Update the input value
  };

  const handleCitySubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim() !== "") {
      setCity(inputCity); // Update the city to fetch weather for
      setInputCity(""); // Clear input field
    }
  };

  return (
    <div>
      <h1>Weather in {city}</h1>

      {/* Input field for city */}
      <form onSubmit={handleCitySubmit}>
        <input
          type="text"
          value={inputCity}
          onChange={handleCityChange}
          placeholder="Enter city name"
          className="border p-2 mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Get Weather
        </button>
      </form>

      {/* Display weather data */}
      {weatherData ? (
        <div>
          <img
            src={weatherData.current.weather_icons[0]} // Access the first weather icon
            alt={weatherData.current.weather_descriptions[0]} // Use the first description
            style={{ width: "50px", height: "50px" }}
          />
          <p>Temperature: {weatherData.current.temperature}°C</p>
          <p>Weather: {weatherData.current.weather_descriptions[0]}</p>
          <p>Wind Speed: {weatherData.current.wind_speed} km/h</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Feels Like: {weatherData.current.feelslike}°C</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
