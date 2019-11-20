function drawCharts (){
    loadVisualization('acbf_monthly_perf_ALTCBOU.csv', drawSummaryFromPerfData, 'acbf-fund-table05');
    loadVisualization('acbf_monthly_perf_ALTCBOU.csv', drawPerfTable, 'acbf-fund-table01', false, 2);
    loadVisualization('acbf_monthly_perf_ALTCBCG.csv', drawPerfTable, 'acbf-fund-table02', false, 2);
    loadVisualization('acbf_monthly_perf_ALTCBAE.csv', drawPerfTable, 'acbf-fund-table03', false, 2);
    loadVisualization('ACBF_share_classes.csv', drawPerfTable, 'acbf-fund-table04');
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


