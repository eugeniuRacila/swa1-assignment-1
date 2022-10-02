import { isBetweenHours } from "../utils/time";

const domMinTemperature = document.getElementById("min-temperature");
const domMaxTemperature = document.getElementById("max-temperature");
const domTotalPrecipitation = document.getElementById("total-precipitation");
const domAvgWindSpeed = document.getElementById("average-wind-speed");
const domTemperatureMeasurements = document.getElementById("temperature-data");
const domPrecipitationMeasurements =
  document.getElementById("precipitation-data");
const domWindSpeedMeasurements = document.getElementById("wind_speed-data");
const domCloudCoverageMeasurements = document.getElementById(
  "cloud_coverage-data"
);
const domForecastDump = document.getElementById("forecast-dump");

const setDOMMinTemperature = (value) => {
  const formattedValue = Math.round(value);

  domMinTemperature.innerText = `${formattedValue}°C`;
};

const setDOMMaxTemperature = (value) => {
  const formattedValue = Math.round(value);

  domMaxTemperature.innerText = `${formattedValue}°C`;
};

const setDOMTotalPrecipitation = (value) => {
  const formattedValue = value.toFixed(1);

  domTotalPrecipitation.innerText = `${formattedValue}mm`;
};

const setDOMAvgWindSpeed = (value) => {
  const formattedValue = Math.round(value);

  domAvgWindSpeed.innerText = `${formattedValue}m/s`;
};

const setDOMTemperatureMeasurementsData = (temperatureMeasurements) => {
  let rawHtml = "";

  temperatureMeasurements.map(({ place, time, value }) => {
    const date = new Date(time);
    rawHtml += `<p class="measurement-data__record" title="${date}">${date
      .toTimeString()
      .split(" ")[0]
      .slice(0, -3)} / ${value}°C / ${place}</p>`;
  });

  domTemperatureMeasurements.innerHTML = rawHtml;
};

const setDOMPrecipitationMeasurementsData = (precipitationMeasurements) => {
  let rawHtml = "";

  precipitationMeasurements.map(
    ({ place, options: { precipitation_type }, time, value }) => {
      const date = new Date(time);
      rawHtml += `<p class="measurement-data__record" title="${date}">${date
        .toTimeString()
        .split(" ")[0]
        .slice(0, -3)} / ${value}mm / ${
        precipitation_type[0].toUpperCase() + precipitation_type.slice(1)
      } / ${place}</p>`;
    }
  );

  domPrecipitationMeasurements.innerHTML = rawHtml;
};

const setDOMWindSpeedMeasurementsData = (windSpeedMeasurements) => {
  let rawHtml = "";

  windSpeedMeasurements.map(
    ({ place, options: { direction }, time, value }) => {
      const date = new Date(time);
      rawHtml += `<p class="measurement-data__record" title="${date}">${date
        .toTimeString()
        .split(" ")[0]
        .slice(0, -3)} / ${value}m/s / ${
        direction[0].toUpperCase() + direction.slice(1)
      } / ${place}</p>`;
    }
  );

  domWindSpeedMeasurements.innerHTML = rawHtml;
};

const setDOMCloudCoverageMeasurementsData = (cloudCoverageMeasurements) => {
  let rawHtml = "";

  cloudCoverageMeasurements.map(({ place, time, value }) => {
    const date = new Date(time);
    rawHtml += `<p class="measurement-data__record" title="${date}">${date
      .toTimeString()
      .split(" ")[0]
      .slice(0, -3)} / ${value}% / ${place}</p>`;
  });

  domCloudCoverageMeasurements.innerHTML = rawHtml;
};

const setDomForecastDump = (forecastMeasurements) => {
  const forecastMeasurementsJSON = JSON.stringify(
    forecastMeasurements,
    null,
    2
  );

  domForecastDump.innerText = forecastMeasurementsJSON;
};

export const setDomMeasurements = (cityData) => {
  console.log(cityData);
  setDOMMinTemperature(cityData.minTemperatureOfLastDay.value);
  setDOMMaxTemperature(cityData.maxTemperatureOfLastDay.value);
  setDOMTotalPrecipitation(cityData.totalPrecipitationOfLastDay);
  setDOMAvgWindSpeed(cityData.averageWindSpeedOfLastDay);
  setDOMTemperatureMeasurementsData(
    cityData.measurements.temperature.filter((m) => isBetweenHours(m.time))
  );
  setDOMPrecipitationMeasurementsData(
    cityData.measurements.precipitation.filter((m) => isBetweenHours(m.time))
  );
  setDOMWindSpeedMeasurementsData(
    cityData.measurements.wind_speed.filter((m) => isBetweenHours(m.time))
  );
  setDOMCloudCoverageMeasurementsData(
    cityData.measurements.cloud_coverage.filter((m) => isBetweenHours(m.time))
  );
  setDomForecastDump(cityData.forecastMeasurements);
};

export const setLatestMeasurements = (measurements) => {};
