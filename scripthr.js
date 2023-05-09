function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var ctx = document.getElementById('heart-rate-chart').getContext('2d');
var chart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [{
			label: 'Heart Rate',
			data: [getRandomInt(60, 100), getRandomInt(60, 100), getRandomInt(60, 100), getRandomInt(60, 100), getRandomInt(60, 100), getRandomInt(60, 100), getRandomInt(60, 100), getRandomInt(60, 100), getRandomInt(60, 100), getRandomInt(60, 100), getRandomInt(60, 100), getRandomInt(60, 100)],
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderWidth: 2
		}]
	},
	options: {
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Heart Rate (BPM)'
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
