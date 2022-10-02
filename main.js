import "./style.css";
import { setupCounter } from "./counter.js";
import { fetchWeatherData } from "./src/repositories/measurementsRepository";
import { CityData } from "./src/models/temp";
import { fetchForecastData } from "./src/repositories/forecastRepository.js";

setupCounter(document.querySelector("#counter"));

const aarhusMeasurementsData = await fetchWeatherData("Aarhus");
const aarhusData = CityData("Aarhus", aarhusMeasurementsData);
console.log(aarhusData);

//then you cal use the for loop to do the same for every element you are getting the data from
// let aarhusDataUnit = aarhusMeasurementsData[0];
// let IWeather = {type: aarhusDataUnit.type, unit: aarhusDataUnit.unit, time: aarhusDataUnit.time, place: aarhusDataUnit.place};
// let WeatherCompoundData;
// if(IWeather.type === "wind speed")
// {
//     WeatherCompoundData = Object.assign({},IWeather, {value: aarhusDataUnit.value,  direction : aarhusDataUnit.direction});
// }
// else if (IWeather.type === "precipitation")
// {
//     WeatherCompoundData = Object.assign({},IWeather, {value: aarhusDataUnit.value,  precipitation_type : aarhusDataUnit.precipitation_type});
// }
// else{
//     WeatherCompoundData = Object.assign({},IWeather, {value: aarhusDataUnit.value});
// }

// console.log("Weather data: " + JSON.stringify(WeatherCompoundData, null, 2));

// //The same logic with the loop here

// const aarhusMeasurementsForecast = await fetchForecastData("Aarhus");
// //console.log("Aarhus forecast: " + JSON.stringify(aarhusMeasurementsForecast, null, 2));
// let aarhusDataUnitForecast = aarhusMeasurementsForecast[1];
// let IWeatherForecast = {type: aarhusDataUnitForecast.type, unit: aarhusDataUnitForecast.unit, time: aarhusDataUnitForecast.time, place: aarhusDataUnitForecast.place};
// let WeatherForecastData;

// if(IWeatherForecast.type === "precipitation")
// {
//     WeatherForecastData = Object.assign({}, IWeatherForecast, {from: aarhusDataUnitForecast.from, to: aarhusDataUnitForecast.to, precipitation_types: aarhusDataUnitForecast.precipitation_types});
// }
// else if (IWeatherForecast.type === "directions")
// {
//     WeatherForecastData = Object.assign({}, IWeatherForecast, {from: aarhusDataUnitForecast.from, to: aarhusDataUnitForecast.to, directions : aarhusDataUnitForecast.directions});
// }
// else{
//     WeatherForecastData = Object.assign({}, IWeatherForecast, {from: aarhusDataUnitForecast.from, to: aarhusDataUnitForecast.to});
// }

//  console.log("Weather forecast is: " + JSON.stringify(WeatherForecastData));

// const copenhagenMeasurementsData = await fetchWeatherData("Copenhagen");
// const copenhagenData = CityData("Copenhagen", copenhagenMeasurementsData);
//
// const horsensMeasurementsData = await fetchWeatherData("Horsens");

// const horsensData = CityData("Horsens", horsensMeasurementsData);
//
// console.log(aarhussData);
// console.log(copenhagenData);
// console.log(horsensData);
