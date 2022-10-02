import { setDomMeasurements } from "./dom";

const citiesNodes = Array.from(document.getElementById("cities").children);
const selectedCityClassName = "cities__city--selected";
const chipsNodes = Array.from(document.getElementsByClassName("chip"));
const selectedChipClassName = "chip--selected";
let selectedChip = "";

export const initializeCitiesListeners = (citiesData) => {
  citiesNodes.map(
    (cityNode) =>
      cityNode.addEventListener("click", () => {
        updateStyles(cityNode);

        setDomMeasurements(citiesData.get(cityNode.dataset.cityName));
      })
    // cityNode.addEventListener("click", () => alert(cityNode.dataset.cityName))
  );
};

const updateStyles = (cityNode) => {
  clearSelectedCityStyle();
  cityNode.classList.add(selectedCityClassName);
};

const clearSelectedCityStyle = () => {
  citiesNodes.map((cityNode) =>
    cityNode.classList.remove(selectedCityClassName)
  );
};

export const initializeChipsListeners = (initialSelectedChip) => {
  chipsNodes.map((chip) =>
    chip.addEventListener("click", () => {
      if (selectedChip) {
        document.getElementById(`${selectedChip}-data`).style.display = "none";
      }
      updateChipsStyle(chip);
      selectedChip = chip.dataset.name;
      document.getElementById(`${selectedChip}-data`).style.display = "grid";
    })
  );

  document.getElementById(`${initialSelectedChip}-chip`).click();
};

const updateChipsStyle = (selectedChip) => {
  clearChipsStyle();
  selectedChip.classList.add(selectedChipClassName);
};

const clearChipsStyle = () => {
  chipsNodes.map((chip) => chip.classList.remove(selectedChipClassName));
};
