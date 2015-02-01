/*jshint esnext:true, eqnull:true */
/*globals require */

import {getObjects} from './utils';
import {Chart} from './chartviz';
import {SmallMultiplesChart} from './smallMultiplesChart';
import {LargeChart} from './largeFormatChart';
var nv = require('imports?d3=d3!exports?window.nv!nvd3');
getObjects('report.json', function (charts) {
  var lineChart, barChart,
      data = charts[0];

  charts = charts.map( graph => new Chart(graph) );
  lineChart = charts[0];
  barChart = new Chart(data);
   
  window.charts = charts;

  barChart.chart_type = 'bar';

  var small_div = d3.select('#small-chart-div-test');
  var largeLinePlotDiv = d3.select('#chart-div-test-1');
  var largeBarPlotDiv = d3.select('#chart-div-test-2');
  nv.addGraph(SmallMultiplesChart(lineChart, small_div));
  nv.addGraph(LargeChart(lineChart, largeLinePlotDiv));
  nv.addGraph(LargeChart(barChart, largeBarPlotDiv));
});
