// function to check if heart rate is in normal range
function isNormalHeartRate(heartRate) {
    return heartRate >= 60 && heartRate <= 100;
  }
  
  // function to display result message to user
  function displayResultMessage(heartRate) {
    const resultDiv = document.querySelector('#result');
    if (isNormalHeartRate(heartRate)) {
      resultDiv.innerHTML = `Your heart rate of ${heartRate} bpm is within the normal range.`;
    } else {
      resultDiv.innerHTML = `Your heart rate of ${heartRate} bpm is outside the normal range.`;
    }
  }
  
  // event listener for form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const heartRateInput = document.querySelector('#heart-rate');
    const heartRate = parseInt(heartRateInput.value);
    displayResultMessage(heartRate);
  });
  