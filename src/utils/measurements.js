import { isBetweenHours } from "./time";

export const getMinTemperature = (temperatureMeasurements) =>
  temperatureMeasurements.reduce((prev, curr) =>
    prev.value < curr.value ? prev : curr
  );

export const getMaxTemperature = (temperatureMeasurements) =>
  temperatureMeasurements.reduce((prev, curr) =>
    prev.value > curr.value ? prev : curr
  );

export const getTotalPrecipitationOfLastDay = (precipitationMeasurements) =>
  precipitationMeasurements
    .filter((m) => isBetweenHours(m.time))
    .reduce((prev, curr) => prev + curr.value, 0);

export const getAverageWindSpeedOfLastDay = (windMeasurements) => {
  const latestMeasurements = windMeasurements.filter((m) =>
    isBetweenHours(m.time)
  );

  const dailyWindSpeedSum = latestMeasurements.reduce(
    (prev, curr) => prev + curr.value,
    0
  );

  return dailyWindSpeedSum / latestMeasurements.length;
};
