import {
  getAverageWindSpeedOfLastDay,
  getMaxTemperature,
  getMinTemperature,
  getTotalPrecipitationOfLastDay,
} from "../utils/measurements";
import { isBetweenHours } from "../utils/time";
import { forecastDataType } from "./forecastData";
import { weatherDataType } from "./weatherData";

export const CityData = (name, measurements, forecastMeasurements) => {
  const cityData = {};

  cityData.name = name;
  cityData.measurements = sortMeasurements(measurements);
  cityData.forecastMeasurements =
    sortForecastMeasurements(forecastMeasurements);

  cityData.minTemperatureOfLastDay = getMinTemperature(
    cityData.measurements.temperature.filter((m) => isBetweenHours(m.time))
  );
  cityData.maxTemperatureOfLastDay = getMaxTemperature(
    cityData.measurements.temperature.filter((m) => isBetweenHours(m.time))
  );

  cityData.totalPrecipitationOfLastDay = getTotalPrecipitationOfLastDay(
    cityData.measurements.precipitation
  );

  cityData.averageWindSpeedOfLastDay = getAverageWindSpeedOfLastDay(
    cityData.measurements.wind_speed
  );

  return cityData;
};

const sortMeasurements = (measurements) => {
  const sortedMeasurements = {
    cloud_coverage: [],
    precipitation: [],
    temperature: [],
    wind_speed: [],
  };

  measurements.map((measurement) => {
    sortedMeasurements[measurement.type.replaceAll(" ", "_")].push(
      weatherDataType(measurement)
    );
  });

  return sortedMeasurements;
};

const sortForecastMeasurements = (measurements) => {
  const sortedMeasurements = {
    cloud_coverage: [],
    precipitation: [],
    temperature: [],
    wind_speed: [],
  };

  measurements.map((measurement) => {
    sortedMeasurements[measurement.type.replaceAll(" ", "_")].push(
      forecastDataType(measurement)
    );
  });

  return sortedMeasurements;
};
