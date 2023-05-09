function getOxygenRate() {
  const oxygenRateInput = document.querySelector('#oxygen-rate');
  return parseInt(oxygenRateInput.value);
}

function isNormalOxygenRate(oxygenRate) {
  return oxygenRate >= 92 && oxygenRate <= 100;
}

function displayResultMessage(oxygenRate) {
  const resultDiv = document.querySelector('#result');
  const message = isNormalOxygenRate(oxygenRate)
    ? `Your oxygen saturation level of ${oxygenRate}% is within the normal range.`
    : `Your oxygen saturation level of ${oxygenRate}% is outside the normal range. Please consult with your doctor.`;
  resultDiv.innerHTML = message;
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const oxygenRate = getOxygenRate();
  displayResultMessage(oxygenRate);
});
