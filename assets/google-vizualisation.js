const docRoot = 'https://mybrightidea.squarespace.com/assets/chart-data/';
//const docRoot = 'https://s3.amazonaws.com/cdn.altanawealth.com/public/csv/';

const gold = '#b89d18';
const lightblue = '#367bb7';
const darkblue = 'rgb(2, 2, 136)';

function makeTimeSeries(data) {
    var timeSeriesData;
    timeSeriesData = new google.visualization.DataTable();

    timeSeriesData.addColumn('string', data.vg[0].label);

    for (var i = 1; i < data.vg.length; ++i) {
        timeSeriesData.addColumn('number', data.vg[i].label);
    }

    const origRows = data.getNumberOfRows();
    timeSeriesData.addRows(origRows);

    for (var i = 0; i < data.getNumberOfRows(); i++) {
        timeSeriesData.setCell(i, 0, data.getValue(i, 0));
        for (var j = 1; j < data.vg.length; ++j) {
            timeSeriesData.setCell(i, j, parseFloat(data.getValue(i, j)));
        };
    }

    return timeSeriesData;
}

function drawDonut(data, div) {
    // Set chart options
    var options = {
        sliceVisibilityThreshold: 0.1,
        pieResidueSliceColor: 'red',
        pieSliceTextStyle: {
            color: 'white'
        },
        pieSliceText: 'value',


        slices: {
            0: {
                color: darkblue,
                offset: 0.4
            },
            1: {
                color: lightblue
            },
            2: {
                color: '#6A5ACD'
            },
            3: {
                color: gold
            },
            4: {
                color: 'transparent'
            },
            5: {
                color: 'transparent'
            },
            6: {
                color: 'transparent'
            },
            7: {
                color: 'transparent'
            },
            8: {
                color: 'transparent'
            },
            9: {
                color: 'transparent'
            }
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById(div));
    chart.draw(makeTimeSeries(data), options);
}

function drawColumn(data, div) {
    // Set chart options
    var options = {
        chartArea: {
            width: '80%'
        },
        //                  width:"100%", 
        height: 540,
        legend: 'bottom',
        colors: [lightblue, gold]
    }

    var chart = new google.visualization.ColumnChart(document.getElementById(div));
    chart.draw(makeTimeSeries(data), options);
}

function drawArea(data, div, isStacked) {
    // Set chart options
    var options = {
        chartArea: {
            width: '80%'
        },
        width: "100%",
        height: 540,
        legend: 'bottom',
        colors: [lightblue, gold, darkblue],
        isStacked: isStacked
    }

    var chart = new google.visualization.AreaChart(document.getElementById(div));
    chart.draw(makeTimeSeries(data), options);
}

function drawSummaryFromPerfData(data, div) {

const fmt = new Intl.NumberFormat(undefined, {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })


    var dataSubset = new google.visualization.DataTable();
    dataSubset.addColumn('string', 'Title');
    dataSubset.addColumn('number', 'Return');
    const origCols = data.getNumberOfColumns();
    const origRows = data.getNumberOfRows();

    dataSubset.addRows([
        [data.getColumnLabel(origCols - 2), {
            v: parseFloat(data.getValue(origRows - 1, origCols - 2)),
            f: fmt.formatWithSign(parseFloat(data.getValue(origRows - 1, origCols - 2))) + '%'
        }],
        [data.getColumnLabel(origCols - 1), {
            v: parseFloat(data.getValue(origRows - 1, origCols - 1)),
            f: fmt.formatWithSign(parseFloat(data.getValue(origRows - 1, origCols - 1))) + '%'
        }]
    ]);

    drawSummaryPerfTable(dataSubset, div);
}

function drawSummaryPerfTable(data, div) {
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

    var chart = new google.visualization.Table(document.getElementById(div));
    chart.draw(data, options);
}


function drawLine(data, div) {
    // Set chart options
    var options = {
        chartArea: {
            width: '80%'
        },
        width: "100%",
        height: 540,
        legend: 'bottom',
        colors: [lightblue, gold, darkblue],
        vAxis: {
            format: '#,##0',
            title: 'Return'
        },
        hAxis: {
            format: 'MM/YY',
            title: ''
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById(div));
    chart.draw(makeTimeSeries(data), options);
}

function drawMap(data, div, region, resolution) {

    var mapData;
    mapData = new google.visualization.DataTable();
    mapData.addColumn('string', 'Country');
    mapData.addColumn('number', 'Filings');
    const origRows = data.getNumberOfRows();

    for (var i = 0; i < data.getNumberOfRows(); i++) {
        mapData.addRows([
            [data.getValue(i, 0), {
                v: parseFloat(data.getValue(i, 1))
            }]
        ]);
    }


    // Set chart options
    var options = {
        datalessRegionColor: 'rgb(227, 213, 140)',
        colorAxis: {
            colors: ['lightblue', darkblue]
        },
        region: region,
        resolution: resolution
    };
    var chart = new google.visualization.GeoChart(document.getElementById(div));
    chart.draw(mapData, options);
}


Intl.NumberFormat.prototype.formatWithSign = function(x) {
    let y = this.format(x);
    return x < 0 ? y : '+' + y;
}

function drawGauge(data, div) {

    const fmt = new Intl.NumberFormat(undefined, {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })

    var gaugeData = new google.visualization.DataTable();
    gaugeData.addColumn('number', 'Sentiment');
    gaugeData.addRows(1);

    var val = parseFloat(data.getValue(0, 1));

    gaugeData.setCell(0, 0,
        val,
        fmt.formatWithSign(val));

    var cssClassNames = {};
    // Set chart options
    var gaugeOptions = {
        //weird - gauge only reacts to height
        height: 300,
        min: -1,
        max: 1,
        yellowFrom: -0.33,
        yellowTo: 0.33,
        redFrom: -1,
        redTo: -0.33,
        greenFrom: 0.33,
        greenTo: 1,
        majorTicks: ["-1.0", "0", "+1.0"],
        minorTicks: 2,
        greenColor: "#77dd77",
        yellowColor: "#FADA5E",
        redColor: "#F2003C"
    };
    gauge = new google.visualization.Gauge(document.getElementById(div));
    gauge.draw(gaugeData, gaugeOptions);
}

function drawPerfTable(data, div) {
    var cssClassNames = {
        headerRow: 'ag-table-hdr',
        tableRow: 'ag-table-row',
        oddTableRow: 'ag-table-odd-row'
    };

    // Set chart options
    var options = {
        showRowNumber: false,
        width: '100%',
        cssClassNames: cssClassNames
    };

    var chart = new google.visualization.Table(document.getElementById(div));
    chart.draw(data, options);
}

function stringTo2dArray(string, d1, d2) {
    return string.split(d1).map(function(x) {
        return x.split(d2)
    });
}

function loadVisualization(chartFile, chartLoader, div, param1, param2) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            loadVizCallBack(this, chartLoader, div, param1, param2);
        }
    };
    chartFile = docRoot + chartFile;
    xhttp.open("GET", chartFile, true);
    xhttp.send();
}

function loadVizCallBack(xml, chartLoader, div, param1, param2) {
    var tableData = stringTo2dArray(xml.responseText, '\n', ',');
    tableData = tableData.slice(0, tableData.length - 1);

    chartLoader(google.visualization.arrayToDataTable(tableData), div, param1, param2);
}