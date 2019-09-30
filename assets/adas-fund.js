// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'table', 'gauge', 'geochart']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(loadGraphsAndCharts);

$(window).resize(function(){
  loadGraphsAndCharts();
});

function loadGraphsAndCharts() {
  drawLine01();
  drawTable01();
  drawTable02();
  drawTable03();
  drawTable04();
  drawArea01();
  drawArea02();
  drawTable05();
  drawDonut01();
  drawDonut02();
  drawColumn01();
  drawTable06();
  drawTable07();
};
// LINE 01 //
function drawLine01() {

  var queryOpts = {sendMethod: 'auto'};

  // Replace the data source URL on next line with your data source URL.
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/14l-X7b857SdDu9yq1VwdHW-nVSP1WB65B5f9h9Nxo5Y/edit?usp=sharing', queryOpts);

  // Send the query with a callback function.
  query.send(handleQueryResponseLine01);
  }

  function handleQueryResponseLine01(response) {

  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
    }

  var data = response.getDataTable();
  var chart = new google.visualization.LineChart(document.getElementById('adas-fund-line01'));

  // Set chart options
  var options = { chartArea: {width: '80%'},
                  width:"100%", 
                  height:540, 
                  legend: 'bottom', 
                  colors: ['#367bb7','#b89d18', 'rgb(2, 2, 136)'],
                  vAxis: {format: '#,##0', title: 'Return'},
                  hAxis: {format: 'MM/YY', title: ''}};

  chart.draw(data, options);
}
// END LINE 01 //
// TABLE 01 //
function drawTable01() {
  var opts = {sendMethod: 'auto'};
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1UTZCEplVpc_SX9EsjxGB2viPHo0NcHFx9hOGLe8Z194/edit?usp=sharing', opts);

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

  var chart = new google.visualization.Table(document.getElementById('adas-fund-table01'));
  chart.draw(data, options);
}
// END TABLE 01 //
// TABLE 02 //
function drawTable02() {
  var opts = {sendMethod: 'auto'};
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lWE1SgT18eTWwRjx_tt7417XMwxem9M1H8rWdI6MdYM/edit?usp=sharing', opts);

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


  var chart = new google.visualization.Table(document.getElementById('adas-fund-table02'));
  chart.draw(data, options);
}
// END TABLE 02 //
// TABLE 03 //
function drawTable03() {
  var opts = {sendMethod: 'auto'};
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1XYvHV5lgEgTVLg2-v9DQq1Ln7OhiYV4yCStsD07ZGIo/edit?usp=sharing', opts);

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


  var chart = new google.visualization.Table(document.getElementById('adas-fund-table03'));
  chart.draw(data, options);
}
// END TABLE 03 //
// TABLE 04 //
function drawTable04() {
  var opts = {sendMethod: 'auto'};
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1UA_nXJsnrrLIMNHNrSxYzliH4WZdJWQk5E8XE81dYrE/edit?usp=sharing', opts);

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
                  cssClassNames: cssClassNames};


  var chart = new google.visualization.Table(document.getElementById('adas-fund-table04'));
  chart.draw(data, options);
}
// END TABLE 04 //
// END AREA 01 //
      function drawArea01() {

        var queryOpts = {sendMethod: 'auto'};

        // Replace the data source URL on next line with your data source URL.
        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/12YP7cATX-TJRNoBA8I3XxBO54OUQK0mS6E3jRn91Utc/edit?usp=sharing', queryOpts);

        // Send the query with a callback function.
        query.send(handleQueryResponseArea01);
      }

      function handleQueryResponseArea01(response) {

        if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
          }

        var data = response.getDataTable();
        var chart = new google.visualization.AreaChart(document.getElementById('adas-fund-area01'));

        // Set chart options
        var options = { chartArea: {width: '80%'},
                  width:"100%", 
                  height:360, 
                  legend: 'bottom', 
                  colors: ['#367bb7','#b89d18']}
        chart.draw(data, options);
      }
// END AREA 01 //
// AREA 02 //
      function drawArea02() {

        var queryOpts = {sendMethod: 'auto'};

        // Replace the data source URL on next line with your data source URL.
        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1WVE0txe7DaCxvyijNwWA2-RSzb9Zp9r2Ryd0blQMwRY/edit?usp=sharing', queryOpts);

        // Send the query with a callback function.
        query.send(handleQueryResponseArea02);
      }

      function handleQueryResponseArea02(response) {

        if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
          }

        var data = response.getDataTable();
        var chart = new google.visualization.AreaChart(document.getElementById('adas-fund-area02'));

        // Set chart options
        var options = { chartArea: {width: '80%'},
                  width:"100%", 
                  height:360, 
                  legend: 'bottom', 
                  colors: ['#367bb7','#b89d18']}

  
        chart.draw(data, options);
      }
// END AREA02 //
// TABLE 05 //
function drawTable05() {
  var opts = {sendMethod: 'auto'};
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1u6gLn_RfvqcsSfCj9HM6j-CSYhpgKRLrl-dmkX0RNvY/edit?usp=sharing', opts);

  query.send(handleQueryResponseTable05);
}

function handleQueryResponseTable05(response) {
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


  var chart = new google.visualization.Table(document.getElementById('adas-fund-table05'));
  chart.draw(data, options);
}
// END TABLE 05 //
// DONUT 01 //
      function drawDonut01() {

        var queryOpts = {sendMethod: 'auto'};

        // Replace the data source URL on next line with your data source URL.
        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1-HmaAsRHQnQABkKu09MdQJCbnGSV9DxkOxPj3sHpqSU/edit?usp=sharing', queryOpts);

        // Send the query with a callback function.
        query.send(handleQueryResponseDonut01);
      }

      function handleQueryResponseDonut01(response) {

        if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
          }

        var data = response.getDataTable();
        var chart = new google.visualization.PieChart(document.getElementById('adas-fund-donut01'));

        // Set chart options
        var options = {title:'Exposure - Long', pieHole: 0.3};

/*
        var rStart = 
        var rEnd = 
        var gStart = 
        var gEnd = 
        var bStart = 
        var bEnd = 

        var arrayLength = options.colors.length;

        for (var i = 0; i < arrayLength; i++) {
          options.colors[]
        }







                  options.colors[0] = 'rgb(255,0,0)';
                  options.colors[1] = 'rgb(0,255,0)';
*/


  
        chart.draw(data, options);
      }
// END DONUT 01 //
// DONUT 02 //
      function drawDonut02() {

        var queryOpts = {sendMethod: 'auto'};

        // Replace the data source URL on next line with your data source URL.
        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1nr_OfSgHqMfpAExGE-kIizZb4cUpKrrtQ6OkliNtRrA/edit?usp=sharing', queryOpts);

        // Send the query with a callback function.
        query.send(handleQueryResponseDonut02);
      }

      function handleQueryResponseDonut02(response) {

        if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
          }

        var data = response.getDataTable();
        var chart = new google.visualization.PieChart(document.getElementById('adas-fund-donut02'));
        var options = {title:'Exposure - Short', pieHole: 0.3};


  
        chart.draw(data, options);
      }
// END DONUT 02 //
// COLUMN 01 //
      function drawColumn01() {

        var queryOpts = {sendMethod: 'auto'};

        // Replace the data source URL on next line with your data source URL.
        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/17l7vaWrLyHpRUrZc-ruOb4V2SPttNY9upZCHZCJCkok/edit?usp=sharing', queryOpts);

        // Send the query with a callback function.
        query.send(handleQueryResponseColumn01);
      }

      function handleQueryResponseColumn01(response) {

        if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
          }

        var data = response.getDataTable();
        var chart = new google.visualization.ColumnChart(document.getElementById('adas-fund-column01'));

        // Set chart options
        var options = { chartArea: {width: '80%'},
                  width:"100%", 
                  height:540, 
                  legend: 'bottom', 
                  colors: ['#367bb7','#b89d18']}

  
        chart.draw(data, options);
      }
// END COLUMN 01 //
// TABLE 06 //
function drawTable06() {
  var opts = {sendMethod: 'auto'};
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1QfT0FclLMdoeN-hfc04oEP6elWEoIqI71CYPwRtKw6M/edit?usp=sharing', opts);

  query.send(handleQueryResponseTable06);
}

function handleQueryResponseTable06(response) {
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


  var chart = new google.visualization.Table(document.getElementById('adas-fund-table06'));
  chart.draw(data, options);
}
// END TABLE 06 //
// TABLE 07 //
function drawTable07() {
  var opts = {sendMethod: 'auto'};
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/10WSLZIM9cVe9gRT1_avo6FvRlUFcEnAXmfo31O3mUws/edit?usp=sharing', opts);

  query.send(handleQueryResponseTable07);
}

function handleQueryResponseTable07(response) {
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

  var chart = new google.visualization.Table(document.getElementById('adas-fund-table07'));
  chart.draw(data, options);
}
// END TABLE 07 //
