function drawCharts(){
    loadVisualization('existing/growth_aias.csv', drawLine, 'adas-fund-line01');
    loadVisualization('adas_monthly_perf_ALTDASA.csv', drawPerfTable, 'adas-fund-table01');

    loadVisualization('adas_monthly_perf_GS.csv', drawPerfTable, 'adas-fund-table02');
    loadVisualization('adas_monthly_perf_HFRX.csv', drawPerfTable, 'adas-fund-table03');
    loadVisualization('adas_monthly_perf_split_returns.csv', drawPerfTable, 'adas-fund-table04');
    loadVisualization('existing/gross_net_exposure.csv', drawArea, 'adas-fund-area01');
    loadVisualization('existing/open_positions.csv', drawArea, 'adas-fund-area02');
    loadVisualization('adas_monthly_perf_gross_net.csv', drawPerfTable, 'adas-fund-table05');
    loadVisualization('existing/sector_exposure_long.csv', drawDonut, 'adas-fund-donut01');
    loadVisualization('existing/sector_exposure_short.csv', drawDonut, 'adas-fund-donut02');
    loadVisualization('existing/cap_aias_net.csv', drawColumn, 'adas-fund-column01');
    loadVisualization('ADAS_share_classes.csv', drawPerfTable, 'adas-fund-table06');
    loadVisualization('adas_monthly_perf_ALTDASA.csv', drawSummaryFromPerfData, 'adas-fund-table07');
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