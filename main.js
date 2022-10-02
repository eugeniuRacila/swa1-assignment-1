import "./style.css";
import { fetchWeatherData } from "./src/repositories/measurementsRepository";
import { CityData } from "./src/models/temp";
import { fetchForecastData } from "./src/repositories/forecastRepository.js";
import { setDomMeasurements } from "./src/core/dom";
import {
  initCitiesListeners,
  initializeChipsListeners,
} from "./src/core/listeners";

document.addEventListener("DOMContentLoaded", async () => {
  const initialSelectedCity = "Aarhus";

  const citiesData = new Map();

  const measurementsData = await fetchWeatherData();
  const aarhusData = CityData(
    "Aarhus",
    measurementsData.filter((m) => m.place === "Aarhus")
  );
  const copenhagenData = CityData(
    "Copenhagen",
    measurementsData.filter((m) => m.place === "Copenhagen")
  );
  const horsensData = CityData(
    "Horsens",
    measurementsData.filter((m) => m.place === "Horsens")
  );

  citiesData.set("Aarhus", aarhusData);
  citiesData.set("Copenhagen", copenhagenData);
  citiesData.set("Horsens", horsensData);

  setDomMeasurements(citiesData.get(initialSelectedCity));
  initCitiesListeners(citiesData);
  initializeChipsListeners("temperature");
});
