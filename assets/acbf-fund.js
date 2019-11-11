function drawCharts {
    loadVisualization('acbf_monthly_perf_ALTCBOU.csv', drawSummaryFromPerfData, 'acbf-fund-table01');
    loadVisualization('acbf_monthly_perf_ALTCBOU.csv', drawPerfTable, 'acbf-fund-table02');
    loadVisualization('acbf_monthly_perf_ALTCBCG.csv', drawPerfTable, 'acbf-fund-table03');
    loadVisualization('acbf_monthly_perf_ALTCBAE.csv', drawPerfTable, 'acbf-fund-table04');
    loadVisualization('ACBF_share_classes.csv', drawPerfTable, 'acbf-fund-table05');
}