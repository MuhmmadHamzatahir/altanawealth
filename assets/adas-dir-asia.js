function drawCharts(){
    loadVisualization('existing/au_filings_map.csv', drawMap, 'adas-dir-asia-map01', '142', 'countries');
    loadVisualization('existing/au_filings_map.csv', drawMap, 'adas-dir-asia-map02', '009', 'countries');
    loadVisualization('existing/au_director_activity_ratio.csv', drawGauge, 'adas-dir-asia-gauge01');
    loadVisualization('existing/au_director_activity.csv', drawArea, 'adas-dir-asia-area01');
    loadVisualization('existing/au_director_activity_ratio_history.csv', drawLine, 'adas-dir-asia-line01');
    loadVisualization('existing/au_filings.csv', drawArea, 'adas-dir-asia-area02');
    loadVisualization('existing/au_director_rank_pecent.csv', drawArea, 'adas-dir-asia-area03', 'percent');
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