// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'table', 'gauge', 'geochart']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(loadGraphsAndCharts);

$(window).resize(function(){
  loadGraphsAndCharts();
});

function loadGraphsAndCharts() {
  drawTable01();
  drawTable02();
};
// TABLE 01 //
function drawTable01() {
  var opts = {sendMethod: 'auto'};
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/10WSLZIM9cVe9gRT1_avo6FvRlUFcEnAXmfo31O3mUws/edit?usp=sharing', opts);

  query.send(handleQueryResponseTable01);
}

function handleQueryResponseTable01(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
    }

  var data = response.getDataTable();

  var cssClassNames = {
    headerRow: 'ag-table-summary-hdr',
    tableRow: 'ag-table-summary-row',
    oddTableRow: 'ag-table-summary-odd-row'};
  // Set chart options
  var options = {showRowNumber: false,
                  width: '100%',
                   cssClassNames: cssClassNames};

  var chart = new google.visualization.Table(document.getElementById('adas-fund-intro-table01'));
  chart.draw(data, options);
}
// END TABLE 01 //
// TABLE 02 //
function drawTable02() {
  var opts = {sendMethod: 'auto'};
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1pqkUPSFmeCaNSuY3_IsupSard_a7sm16kKeASSJ-hNg/edit?usp=sharing', opts);

  query.send(handleQueryResponseTable02);
}

function handleQueryResponseTable02(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
    }

  var data = response.getDataTable();

    var cssClassNames = {
    headerRow: 'ag-table-intro-hdr',
    tableRow: 'ag-table-intro-row',
    oddTableRow: 'ag-table-intro-odd-row'};
  // Set chart options
  var options = {showRowNumber: false,
                  width: '100%',
                  cssClassNames: cssClassNames};


  var chart = new google.visualization.Table(document.getElementById('adas-fund-intro-table02'));
  chart.draw(data, options);
}
// END TABLE 02 //