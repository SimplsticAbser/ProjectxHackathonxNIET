function getBodyTemperature() {
  const bodyTemperatureInput = document.querySelector('#body-temperature');
  return parseFloat(bodyTemperatureInput.value);
}

function isNormalBodyTemperature(bodyTemperature) {
  return bodyTemperature >= 97.8 && bodyTemperature <= 99;
}

function displayResultMessage(bodyTemperature) {
  const resultDiv = document.querySelector('#result');
  const message = isNormalBodyTemperature(bodyTemperature)
    ? `Your body temperature of ${bodyTemperature}°F is within the normal range.`
    : `Your body temperature of ${bodyTemperature}°F is outside the normal range. Please consult with your doctor.`;
  resultDiv.textContent = message;
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const bodyTemperature = getBodyTemperature();
  displayResultMessage(bodyTemperature);
});
