import {
  getAverageWindSpeedOfLastDay,
  getMaxTemperature,
  getMinTemperature,
  getTotalPrecipitationOfLastDay,
} from "../utils/measurements";
import { isBetweenHours } from "../utils/time";

export const CityData = (name, measurements) => {
  const cityData = {};

  cityData.name = name;
  cityData.measurements = sortMeasurements(measurements);

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

  measurements.map((m) => {
    sortedMeasurements[m.type.replaceAll(" ", "_")].push(m);
  });

  return sortedMeasurements;
};
