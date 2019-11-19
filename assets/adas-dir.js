function drawCharts() {
    loadVisualization('existing/global_map.csv', drawMap, 'adas-dir-map01');
    loadVisualization('existing/director_activity_ratio.csv', drawGauge, 'adas-dir-gauge01');
    loadVisualization('existing/eu_director_activity_ratio.csv', drawGauge, 'adas-dir-gauge02');
    loadVisualization('existing/au_director_activity_ratio.csv', drawGauge, 'adas-dir-gauge03');
}function drawGoogleVisualizations() {
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