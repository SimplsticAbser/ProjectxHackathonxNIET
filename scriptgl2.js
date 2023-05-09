function getGlucoseLevel() {
  const glucoseLevelInput = document.querySelector('#glucose-level');
  return parseInt(glucoseLevelInput.value);
}

function isNormalGlucoseLevel(glucoseLevel) {
  return glucoseLevel >= 70 && glucoseLevel <= 99;
}

function displayResultMessage(glucoseLevel) {
  const resultDiv = document.querySelector('#result');
  const message = isNormalGlucoseLevel(glucoseLevel)
    ? `Your glucose level of ${glucoseLevel} mg/dL is within the normal range.`
    : `Your glucose level of ${glucoseLevel} mg/dL is outside the normal range. Please consult with your doctor.`;
  resultDiv.textContent = message;
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const glucoseLevel = getGlucoseLevel();
  displayResultMessage(glucoseLevel);
});
