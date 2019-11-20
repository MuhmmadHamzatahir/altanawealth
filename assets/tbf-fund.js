function drawCharts (){
    loadVisualization('TBF+Simulated+Perf+History.csv', drawLine, 'tbf-fund-line01');
    loadVisualization('TBF+Summary+Statistical+Data.csv', drawPerfTable, 'tbf-fund-table01');
    loadVisualization('TBF+Annual+Sim+Perf+Summary.csv', drawPerfTable, 'tbf-fund-table02', true, 1);
    loadVisualization('TBF+Fund+Codes.csv', drawPerfTable, 'tbf-fund-table03');
    loadVisualization('TBF+Sector+Alloc.csv', drawColumn, 'tbf-fund-column01');
    loadVisualization('TBF+Sector+Alloc+full+titles.csv', drawPerfTable, 'tbf-fund-table04');
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


