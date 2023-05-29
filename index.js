/* Toggle light-dark theme */
const toggleBtnEl = document.getElementById("toggle-btn");
const checkboxEl = document.querySelector(".toggle-btn input");
const bodyEl = document.querySelector("body");

toggleBtnEl.addEventListener("click", function () {
  checkboxEl.checked
    ? bodyEl.classList.add("dark-theme")
    : bodyEl.classList.remove("dark-theme");
});

/* ------------------------------------------------------------ */

/* Handle input */
const numberInputEl = document.getElementById("number-input");
const convertBtnEl = document.getElementById("convert-btn");
const resultLength = document.getElementById("result-length");
const resultVolume = document.getElementById("result-volume");
const resultMass = document.getElementById("result-mass");

convertBtnEl.addEventListener("click", () => {
  const value = numberInputEl.value;

  /* Convert length */
  resultLength.innerText = `${value} meters = ${convertMetersToFeet(
    value
  )} feet | ${value} feet = ${convertFeetsToMeters(value)} meters`;

  /* Convert volume */
  resultVolume.innerText = `${value} liters = ${convertLitersToGallons(
    value
  )} gallons | ${value} gallons = ${convertGallonsToLiters(value)} liters`;

  /* Convert mass */
  resultMass.innerText = `${value} kilos = ${convertPoundsToKilos(
    value
  )} pounds | ${value} pounds = ${convertPoundsToKilos(value)} kilos`;
});

/* ------------------------------------------------------------ */
/* CONVERSION FUNCTIONS */

/* Length */
const convertMetersToFeet = (value) => {
  return (value * 3.280839895).toFixed(3);
};

const convertFeetsToMeters = (value) => {
  return (value / 3.280839895).toFixed(3);
};

/* Volume */
const convertLitersToGallons = (value) => {
  return (value * 0.2641720524).toFixed(3);
};

const convertGallonsToLiters = (value) => {
  return (value / 0.2641720524).toFixed(3);
};

/* Mass */
const convertKilosToPounds = (value) => {
  return (value * 2.20462262185).toFixed(3);
};

const convertPoundsToKilos = (value) => {
  return (value / 2.20462262185).toFixed(3);
};
