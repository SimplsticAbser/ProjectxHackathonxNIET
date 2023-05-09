function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var ctx = document.getElementById('bp-chart').getContext('2d');
  var chart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
              label: 'Systolic',
              data: [getRandomInt(120, 140), getRandomInt(130, 150), getRandomInt(135, 155), getRandomInt(130, 150), getRandomInt(125, 145), getRandomInt(130, 150), getRandomInt(135, 155), getRandomInt(130, 150), getRandomInt(125, 145), getRandomInt(120, 140), getRandomInt(125, 145), getRandomInt(130, 150)],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderWidth: 2
          }, {
              label: 'Diastolic',
              data: [getRandomInt(60, 80), getRandomInt(65, 85), getRandomInt(70, 90), getRandomInt(65, 85), getRandomInt(60, 80), getRandomInt(65, 85), getRandomInt(70, 90), getRandomInt(65, 85), getRandomInt(60, 80), getRandomInt(55, 75), getRandomInt(60, 80), getRandomInt(65, 85)],
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: 'Blood Pressure (mmHg)'
                  },
                  ticks: {
                      beginAtZero: false
                  }
              }],
              xAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: 'Month'
                  }
              }]
          }
      }
  });
  