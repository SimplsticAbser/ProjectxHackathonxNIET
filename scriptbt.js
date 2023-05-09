function getRandomFloat(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

var ctx = document.getElementById('temp-chart').getContext('2d');
var chart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [{
			label: 'Temperature',
			data: [getRandomFloat(96, 99), getRandomFloat(96, 99), getRandomFloat(96, 99), getRandomFloat(96, 99), getRandomFloat(96, 99), getRandomFloat(96, 99), getRandomFloat(96, 99), getRandomFloat(96, 99), getRandomFloat(96, 99), getRandomFloat(96, 99), getRandomFloat(96, 99), getRandomFloat(96, 99)],
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
					labelString: 'Body Temperature (°F)'
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
