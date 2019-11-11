function drawCharts(){
    loadVisualization('acbf_monthly_perf_ALTCBOU.csv', drawTable01);
}


// TABLE 01 //
function drawTable01(data) {

  var dataSubset = new google.visualization.DataTable();
  dataSubset.addColumn('string', 'Title');
  dataSubset.addColumn('number', 'Return');
  const origCols = data.getNumberOfColumns();
  const origRows = data.getNumberOfRows();

  dataSubset.addRows([
  [data.getColumnLabel(origCols-2), {v: parseFloat(data.getValue(origRows-1, origCols-2)), 
    f:data.getValue(origRows-1, origCols-2)}], 
  [data.getColumnLabel(origCols-1), {v: parseFloat(data.getValue(origRows-1, origCols-1)), 
    f:data.getValue(origRows-1, origCols-1)}]
  ]);

    var cssClassNames = {
        headerRow: 'ag-table-summary-hdr',
        tableRow: 'ag-table-summary-row',
        oddTableRow: 'ag-table-summary-odd-row'
    };
    // Set chart options
    var options = {
        showRowNumber: false,
        width: '100%',
        cssClassNames: cssClassNames
    };

    var chart = new google.visualization.Table(document.getElementById('acbf-fund-intro-table01'));
    chart.draw(dataSubset, options);
}
// END TABLE 01 //