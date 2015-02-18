google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
	      
function drawChart() {
	var data = google.visualization.arrayToDataTable([
	    ['Year', 'Temp', 'Hum'],
	    ['1992',  20,      60],
	    ['1993',  23,      61],
	    ['1994',  22,      42],
	    ['1995',  23,      52],
	    ['1996',  21,      63],
	    ['1997',  24,      51],
	    ['1998',  25,      51],
	    ['1999',  23,      70],
	    ['2000',  23,      54],
	    ['2001',  24,      64],
	    ['2002',  23,      52],
	    ['2003',  22,      56],
	    ['2004',  21,      71],
	    ['2005',  20,      46],
	    ['2006',  27,      61],
	    ['2007',  21,      53]
	]);
    var options = {
        title: 'Temperatura | Húmedad',
        curveType: 'function',
        colors:['#0C758E','#9C0000'],
        backgroundColor: '#F0F0F0',
        legend: { position: 'bottom' },
    };

    var chart = new google.visualization.LineChart(document.querySelector('.chart'));
	chart.draw(data, options);
}