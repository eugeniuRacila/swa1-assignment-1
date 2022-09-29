export const fetchWeatherData = async (place = "") => {
  const response = await fetch(
    `http://localhost:8080/data${place && `/${place}`}`
  );
  const data = await response.json();

  return data;
};
