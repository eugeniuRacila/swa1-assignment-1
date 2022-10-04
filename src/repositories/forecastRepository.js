export const fetchForecastData = async (place = "") => {
  const response = await fetch(
    `http://localhost:8080/forecast${place && `/${place}`}`
  );
  const data = await response.json();

  return data;
};
