var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
var lineChartData = {
labels : ["January","February","March","April","May","June","July"],
datasets : [
	{
		label: "My First dataset",
		fillColor : "rgba(220,220,220,0.2)",
		strokeColor : "rgba(220,220,220,1)",
		pointColor : "rgba(220,220,220,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(220,220,220,1)",
		data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
	},
	{
		label: "My Second dataset",
		fillColor : "rgba(151,187,205,0.2)",
		strokeColor : "rgba(151,187,205,1)",
		pointColor : "rgba(151,187,205,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(151,187,205,1)",
		data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
	}
]
}
window.onload = function(){
	//LineCharts
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData);

	//PieCharts
    var temp = document.querySelector('.temp');
    new EasyPieChart(temp, {
        animate: ({ duration: 300, enabled: true }),
        barColor: '#0C758E',
        lineWidth: 10,
        scaleLength: 0,
        size: 200,
        trackColor: '#F0F0F0',
        onStep: function(from, to, percent) {
            this.el.children[0].innerHTML = Math.round(percent);
        }
    });
    var hum = document.querySelector('.hum');
    new EasyPieChart(hum, {
        animate: ({ duration: 300, enabled: true }),
        barColor: '#9C0000',
        lineWidth: 10,
        scaleLength: 0,
        size: 200,
        trackColor: '#F0F0F0',
        onStep: function(from, to, percent) {
            this.el.children[0].innerHTML = Math.round(percent);
        }
    });
}
