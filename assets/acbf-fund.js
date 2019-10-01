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
  drawTable03();
  drawTable04();
  drawTable05();
};
// TABLE 01 //
function drawTable01() {
  var opts = {sendMethod: 'auto'};
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1UFdX-kasMhBdvLu5xPndZUY1o4_PtxwtLs0QGKiGOnc/edit?usp=sharing', opts);

  query.send(handleQueryResponseTable01);
}

function handleQueryResponseTable01(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
    }

  var data = response.getDataTable();

  var cssClassNames = {
    headerRow: 'ag-table-hdr',
    tableRow: 'ag-table-row',
    oddTableRow: 'ag-table-odd-row'};
  // Set chart options
  var options = {showRowNumber: false,
                  width: '100%',
                  cssClassNames: cssClassNames};

  var chart = new google.visualization.Table(document.getElementById('acbf-fund-table01'));
  chart.draw(data, options);
}
// END TABLE 01 //
// TABLE 02 //
function drawTable02() {
  var opts = {sendMethod: 'auto'};
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1alkrdD1P_QGrieOtSfbHIMx3hnxYJqudDsZ-qZ-ztTU/edit?usp=sharing', opts);

  query.send(handleQueryResponseTable02);
}

function handleQueryResponseTable02(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
    }

  var data = response.getDataTable();

    var cssClassNames = {
    headerRow: 'ag-table-hdr',
    tableRow: 'ag-table-row',
    oddTableRow: 'ag-table-odd-row'};
  // Set chart options
  var options = {showRowNumber: false,
                  width: '100%',
                  cssClassNames: cssClassNames};


  var chart = new google.visualization.Table(document.getElementById('acbf-fund-table02'));
  chart.draw(data, options);
}
// END TABLE 02 //
// TABLE 03 //
function drawTable03() {
  var opts = {sendMethod: 'auto'};
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1mSPTo9PnV3xqn8yMY5IFTt-4VZjRJmGeLsuoIE5gHjs/edit?usp=sharing', opts);

  query.send(handleQueryResponseTable03);
}

function handleQueryResponseTable03(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
    }

  var data = response.getDataTable();

    var cssClassNames = {
    headerRow: 'ag-table-hdr',
    tableRow: 'ag-table-row',
    oddTableRow: 'ag-table-odd-row'};
  // Set chart options
  var options = {showRowNumber: false,
                  width: '100%',
                  cssClassNames: cssClassNames};


  var chart = new google.visualization.Table(document.getElementById('acbf-fund-table03'));
  chart.draw(data, options);
}
// END TABLE 03 //
// TABLE 04 //
function drawTable04() {
  var opts = {sendMethod: 'auto'};
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1rOFdTEb-ntSGnhCYWDF8O_ydflyQg8qSwgF9MvDWIG8/edit?usp=sharing', opts);
  query.setQuery('select B, C, D, E, F, G');

  query.send(handleQueryResponseTable04);
}

function handleQueryResponseTable04(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
    }

  var data = response.getDataTable();

    var cssClassNames = {
    headerRow: 'ag-table-hdr',
    tableRow: 'ag-table-row',
    oddTableRow: 'ag-table-odd-row'};
  // Set chart options
  var options = {showRowNumber: false,
                  width: '100%',
                  cssClassNames: cssClassNames,
                  };


  var chart = new google.visualization.Table(document.getElementById('acbf-fund-table04'));
  chart.draw(data, options);
}
// END TABLE 04 //
// TABLE 05 //
function drawTable05() {
  var opts = {sendMethod: 'auto'};
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1OfqimDShQ6bOocWDroskErngvZZ5FeVfuvEJdz28j48/edit?usp=sharing', opts);

  query.send(handleQueryResponseTable05);
}

function handleQueryResponseTable05(response) {
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

  var chart = new google.visualization.Table(document.getElementById('acbf-fund-table05'));
  chart.draw(data, options);
}
// END TABLE 05 //
