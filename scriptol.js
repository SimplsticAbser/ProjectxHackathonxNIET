function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function exportDataToCSV() {
      var csvContent = "data:text/csv;charset=utf-8,";
      var dataRows = ["Month,Oxygen Level"];
      var data = chart.data.datasets[0].data;
      for (var i = 0; i < data.length; i++) {
          var month = chart.data.labels[i];
          var oxygenLevel = data[i];
          dataRows.push(month + "," + oxygenLevel);
      }
      csvContent += dataRows.join("\n");
      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "oxygen-level-data.csv");
      document.body.appendChild(link);
      link.click();
  }
  
  var ctx = document.getElementById('oxygen-chart').getContext('2d');
  var chart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
              label: 'Oxygen Level',
              data: [getRandomInt(90, 100), getRandomInt(90, 100), getRandomInt(90, 100), getRandomInt(90, 100), getRandomInt(90, 100), getRandomInt(90, 100), getRandomInt(90, 100), getRandomInt(90, 100), getRandomInt(90, 100), getRandomInt(90, 100), getRandomInt(90, 100), getRandomInt(90, 100)],
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
                      labelString: 'Oxygen Level (%)'
                  },
                  ticks: {
                      beginAtZero: true,
                      suggestedMax: 100
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
  
  var exportButton = document.getElementById('export-btn');
  exportButton.addEventListener('click', exportDataToCSV);
  