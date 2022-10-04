import "./style.css";

const uploadForm = document.getElementById("upload-data-form");
const placeSelect = document.getElementById("place");
const timeInput = document.getElementById("time");
const typeSelect = document.getElementById("type");
const valueInput = document.getElementById("value");
const unitInput = document.getElementById("unit");
const precipitationSelect = document.getElementById("precipitation_type");
const windSelect = document.getElementById("direction");
const precipitationContainer = document.getElementById(
  "form-element-precipitation"
);
const windContainer = document.getElementById("form-element-wind");

typeSelect.addEventListener("change", ({ target }) => {
  const selectedType = target.selectedOptions[0].value;
  setSelectedMeasurementTypeOptions(selectedType);
});

const setSelectedMeasurementTypeOptions = (measurementType) => {
  resetMeasurementTypeOptionsVisibility();

  if (measurementType === "precipitation") {
    unitInput.value = "mm";
    precipitationContainer.style.display = "flex";
  } else if (measurementType === "wind speed") {
    unitInput.value = "m/s";
    windContainer.style.display = "flex";
  } else if (measurementType === "cloud coverage") {
    unitInput.value = "%";
  } else {
    unitInput.value = "C";
  }
};

const resetMeasurementTypeOptionsVisibility = () => {
  precipitationContainer.style.display = "none";
  windContainer.style.display = "none";
};

uploadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  uploadMeasurementData();
});

const uploadMeasurementData = () => {
  const data = {
    place: placeSelect.selectedOptions[0].text,
    time: new Date(timeInput.value),
    type: typeSelect.selectedOptions[0].value,
    unit: unitInput.value,
    value: valueInput.value,
  };

  if (data.type === "precipitation") {
    data.precipitation_type = precipitationSelect.selectedOptions[0].value;
  } else if (data.type === "wind speed") {
    data.direction = windSelect.selectedOptions[0].value;
  }

  const xhr = new XMLHttpRequest();

  xhr.open("POST", "http://localhost:8080/data", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201) {
      alert("Data was uploaded successfully");
    }
  };

  xhr.send(JSON.stringify(data));
};
