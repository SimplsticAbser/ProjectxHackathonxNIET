function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var ctx = document.getElementById('glucose-chart').getContext('2d');
var chart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [{
			label: 'Glucose Level',
			data: [getRandomInt(70, 140), getRandomInt(70, 140), getRandomInt(70, 140), getRandomInt(70, 140), getRandomInt(70, 140), getRandomInt(70, 140), getRandomInt(70, 140), getRandomInt(70, 140), getRandomInt(70, 140), getRandomInt(70, 140), getRandomInt(70, 140), getRandomInt(70, 140)],
			borderColor: 'rgb(255, 159, 64)',
			backgroundColor: 'rgba(255, 159, 64, 0.2)',
			borderWidth: 2
		}]
	},
	options: {
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Glucose Level (mg/dL)'
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
