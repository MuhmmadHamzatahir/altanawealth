function drawCharts(){
    loadVisualization('existing/eu_filings_map.csv', drawMap, 'adas-dir-eu-map01', '150', 'countries');
    loadVisualization('existing/eu_director_activity_ratio.csv', drawGauge, 'adas-dir-eu-gauge01');
    loadVisualization('existing/eu_director_activity.csv', drawArea, 'adas-dir-eu-area01');
    loadVisualization('existing/eu_director_activity_ratio_history.csv', drawLine, 'adas-dir-eu-line01');
    loadVisualization('existing/eu_filings_transactions.csv', drawArea, 'adas-dir-eu-area02');
    loadVisualization('existing/eu_director_rank_pecent.csv', drawArea, 'adas-dir-eu-area03', 'percent');
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