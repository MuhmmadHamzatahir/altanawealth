function drawCharts(){
    loadVisualization('existing/map_us.csv', drawMap, 'adas-dir-us-map01');
    loadVisualization('existing/director_activity_ratio.csv', drawGauge, 'adas-dir-us-gauge01');
    loadVisualization('existing/director_activity.csv', drawArea, 'adas-dir-us-area01');
    loadVisualization('existing/growth_aias.csv', drawLine, 'adas-dir-us-line01');
    loadVisualization('existing/gross_net_exposure.csv', drawArea, 'adas-dir-us-area02');
    loadVisualization('existing/gross_net_exposure.csv', drawArea, 'adas-dir-us-area03');
}
function drawGoogleVisualizations() {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {
        'packages': ['corechart', 'table', 'gauge', 'geochart']
    });
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawCharts);
}
window.addEventListener('DOMContentLoaded', drawGoogleVisualizations);
window.onresize = function(event) {
    drawGoogleVisualizations();
};