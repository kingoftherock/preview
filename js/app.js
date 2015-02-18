window.onload = function() {
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
