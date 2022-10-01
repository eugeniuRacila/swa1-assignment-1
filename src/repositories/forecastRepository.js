export const fetchForecastData = async () => {
  const response = await fetch("http://localhost:8080/forecast/Aarhus");
  const data = await response.json();

  return data;
};
