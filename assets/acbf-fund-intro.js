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


function drawCharts(){
    loadVisualization('acbf_monthly_perf_ALTCBOU.csv', drawTable01);
    loadVisualization('acbf_monthly_perf_ALTCBOU.csv', drawSummaryFromPerfData, 'acbf-fund-intro-table01');
}