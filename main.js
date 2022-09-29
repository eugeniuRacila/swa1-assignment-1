import "./style.css";
import { setupCounter } from "./counter.js";
import { fetchWeatherData } from "./src/repositories/measurementsRepository";
import { CityData } from "./src/models/temp";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

const aarhusMeasurementsData = await fetchWeatherData("Aarhus");
const aarhussData = CityData("Aarhus", aarhusMeasurementsData);

const copenhagenMeasurementsData = await fetchWeatherData("Copenhagen");
const copenhagenData = CityData("Copenhagen", copenhagenMeasurementsData);

const horsensMeasurementsData = await fetchWeatherData("Horsens");
const horsensData = CityData("Horsens", horsensMeasurementsData);

console.log(aarhussData);
console.log(copenhagenData);
console.log(horsensData);
