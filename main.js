import "./style.css";
import { fetchWeatherData } from "./src/repositories/measurementsRepository";
import { CityData } from "./src/models/cityData";
import { fetchForecastData } from "./src/repositories/forecastRepository.js";
import { setDomMeasurements } from "./src/core/dom";
import {
  initializeCitiesListeners,
  initializeChipsListeners,
} from "./src/core/listeners";

document.addEventListener("DOMContentLoaded", async () => {
  const initialSelectedCity = "Aarhus";

  const weatherData = await fetchWeatherData();
  const forecastData = await fetchForecastData();

  const citiesData = new Map();
  citiesData.set("Aarhus", getCityData("Aarhus", weatherData, forecastData));
  citiesData.set(
    "Copenhagen",
    getCityData("Copenhagen", weatherData, forecastData)
  );
  citiesData.set("Horsens", getCityData("Horsens", weatherData, forecastData));

  setDomMeasurements(citiesData.get(initialSelectedCity));
  initializeCitiesListeners(citiesData);
  initializeChipsListeners("temperature");
});

const getCityData = (cityName, weather, forecast) =>
  CityData(
    cityName,
    weather.filter((m) => m.place === cityName),
    forecast.filter((m) => m.place === cityName)
  );
