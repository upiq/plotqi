require: './Symbol.js';
var privateSym = new Symbol();
import {
  DataPoint,
  TimeDataPoint,
  DataSeries,
  TimeDataSeries,
  MultiSeriesChart,
  TimeSeriesChartSchema
} from './chartviz';
var moment = require('moment');
var d3 = require('d3');
var nv = require('imports?d3=d3!exports?window.nv!nvd3');
import {addStylesheetRules, debounce} from './init';

export function LargeChart(mschart, node) {
  node = node || d3.select('body').append('div').attr('id', 'chart-div-' + (mschart.uid || Math.floor(Math.random() * 1000)));
  node.classed('chart-div', true)
      .style("width", mschart.width + mschart.width_units);

  var relative = (mschart.width_units == '%');
  var ratio = mschart.aspect_ratio ? (mschart.aspect_ratio[1] / mschart.aspect_ratio[0]) : undefined;
  var yMax, xMax;
  if(relative) {
    yMax = mschart.range_max - mschart.range_min;
    xMax = ratio * (mschart.range_max - mschart.range_min);
  } else {
    if(!ratio) {
      yMax = mschart.height;
      xMax = mschart.width;
    } else {
      yMax = ratio * mschart.width;
      xMax = mschart.width;
    }
  }

  if(relative) {
    if(ratio)
      addStylesheetRules([
        ['#' + node.attr('id') + ':after',
          ['content', '""'],
          ['display', 'block'],
          ['margin-top', (ratio * 100) + '%']
        ]
      ]);
    else
      node.style('height', mschart.height + mschart.height_units);
  } else {
    if(!ratio)
      node.style('height', mschart.height + mschart.height_units);
    else
      node.style('height', (ratio * mschart.width) + 'px')
  }

  node = node.append('svg')
             .attr('class', 'upiq-chart chart-svg');

  var margins = {top: 30, bottom: 80, left: 40, right: 10};
  var data = extractData(mschart);
  var domain = mschart.domain;
  var tick_domain = domain.slice();
  tick_domain[1] = d3.time.month.offset(domain[1], 1);
  var tickVals = d3.time.months(...tick_domain).map( month => month.valueOf() );

  return function () {
    node.append('g')
    .attr('class', 'nv-background')
    .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');

    var chart = nv.models.lineChart()
                  .id(mschart.uid)
                  .showLegend(false)
                  .useInteractiveGuideline(false)
                  .tooltips(false)
                  .interactive(false)
                  .margin(margins)
                  .transitionDuration(500)
                  .tooltipContent(function(seriesName, x, y, graph) {
                    return '<h3>' + seriesName.slice(0, seriesName.lastIndexOf('::')) + '</h3>' + '<p>' + graph.point.note + '</p>'
                    + '<p class=\'footer\'>' + graph.point.title + ', ' + graph.series.format(y / 100) + '</p>';
                  })
                  chart.lines.scatter.onlyCircles(false).useVoronoi(false);

    chart.xAxis
         .tickFormat( d => d3.time.format('%B')(new Date(d)).slice(0,3) + " " + d3.time.format('%Y')(new Date(d)) )
         .tickValues(tickVals)
         .showMaxMin(false)
         .tickPadding(6)
         .rotateLabels(-45);
    chart.yAxis
         .tickFormat(d3.format(','))
         .ticks(5)
         .showMaxMin(false)
         .tickPadding(6);
    chart
         .xDomain(domain.map( x => x.valueOf() ))
         .yDomain(mschart.range);
    if(mschart.x_label)
      chart.xAxis.axisLabel(mschart.x_label)
    if(mschart.y_label)
      chart.yAxis.axisLabel(mschart.y_label)
                 .axisLabelDistance(48);

    node.datum(data).call(chart);

    var yscale = chart.yScale();
    var xscale = chart.xScale();

    //Dashed lines for all missing areas
    node.selectAll('.nv-wrap.nv-line > g > g.nv-groups .nv-group').filter( d => d.dashed )
        .style('stroke-dasharray', '5 5');

    //Fix Axis Ticks
    node.selectAll('.nv-y.nv-axis .nvd3.nv-wrap.nv-axis g.tick:not(:nth-of-type(1)):not(:nth-last-of-type(1))')
      .append('line')
      .attr('y2', 0)
      .attr('x2', 4)
      .style('stroke', 'dimgray');

    //Graph Title
    if(mschart.title) {
      node.append('g')
          .attr('class', 'nvd3 nv-chart-title')
          .append('text')
          .attr('class', 'nv-title')
          .attr('x', 10)
          .attr('y', 15)
          .text(mschart.title);
    }

    /*//Fix for Firefox - 2px lines must be shifted by .5px to align to pixel boundaries
    node.select('.nv-y.nv-axis .nvd3.nv-wrap.nv-axis .tick:nth-of-type(1) line')
        .attr('y1', 0.5)
        .attr('y2', 0.5);
    node.select('.nv-y.nv-axis .nvd3.nv-wrap.nv-axis .tick:nth-last-of-type(1) line')
        .attr('y1', -0.5)
        .attr('y2', -0.5);*/
    /*
    //Graph Title
    node.append('g')
        .attr('class', 'nvd3 nv-small-chart nv-chart-title')
        .append('text')
        .attr('class', 'nv-small-chart nv-title')
        .attr('x', 5)
        .attr('y', 10)
        .text(mschart.title);

    var legend = node.append('g')
                     .attr('class', 'nvd3 nv-legend')
                     .attr('transform', 'translate(' + 5 + ',' + '100' + ')')
                     .append('g')
                     .attr('class', 'nv-leg')
                     .selectAll('circle.legend-pt.nv-point')
                     .data(mschart.series.slice(0, 2))
                     .enter().append('g');

    //Graph Legend
    legend.append('circle')
          .attr('class', 'nv-legendpt nv-point')
          .attr('cx', 5 )
          .attr('cy', (d, i) => i * 12 )
          .attr('r', 4)
          .style('stroke', d => d.color )
          .style('stroke-opacity', 1)
          .style('fill', d => d.color )
          .style('fill-opacity', 0.5);
    legend.append('text')
          .attr('class', 'nv-goal-lbl')
          .attr('text-anchor', 'start')
          .attr('x', 15)
          .attr('y', (d, i) => (i * 12) + 3 )
          .attr('dy', '0.1em')
          .text( d => d.title );

    //Zebra striped background
    var tickDiff = xscale(tickVals[1]) - xscale(tickVals[0]);
    var bg = node.select('.nv-background')
                 .selectAll('rect.nv-zebra')
                 .data(tickVals)
                 .enter().append('rect')
                 .attr('y', 0)
                 .attr('x', d => xscale(d))
                 .attr('height', yscale(mschart.range[0]))
                 .attr('width', tickDiff)
                 .attr('visibility', (d, i) => i !== (tickVals.length - 1) ? 'visible' : 'hidden' )
                 .style('fill', d => new Date(d).getFullYear() === domain[0].getFullYear() ? '#E6F0FF' : '#FFEBF5' )
                 .style('opacity', (d, i) => i % 2 === 0 ? 0.55 : 1.0 );

    /*chart.dispatch.on('changeState.fix_axes', function (e) {
      node.select('.nv-y.nv-axis .nvd3.nv-wrap.nv-axis .tick:nth-of-type(1) line')
        .attr('y1', 0.5)
        .attr('y2', 0.5);
    node.select('.nv-y.nv-axis .nvd3.nv-wrap.nv-axis .tick:nth-last-of-type(1) line')
        .attr('y1', -0.5)
        .attr('y2', -0.5);
    });*/
    render(mschart, node, margins).call(chart);
    console.log(chart);
    if(relative)
      nv.utils.windowResize(debounce(render(mschart, node, margins).bind(chart), 250, false));
    return chart;
  };
}

function render(mschart, node, margins) {
  return function () {
    this.update();
    node.selectAll('.nv-linesWrap .nv-wrap.nv-line g.nv-scatterWrap .nv-wrap.nv-scatter .nv-groups g.nv-group').filter( d => d.dashed )
        .attr('visibility', 'hidden')
        .remove();

    var yscale = this.yScale();
    var xscale = this.xScale();
    //Goal Line
    if(mschart.goal) {
      var distWrap = node.selectAll('g.nv-distribution')
                         .data([mschart.goal]);
      distWrap.enter().append('g').attr('class', 'nvd3 nv-distribution').attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');

      var goal = distWrap.selectAll('g.nv-dist.nv-goal').data([mschart.goal]);
      var goalEnter = goal.enter().append('g')
                          .attr('class', 'nv-dist nv-goal')
                          .style('color', mschart.goal_color);
      goalEnter.append('line')
               .attr('class', 'nv-goal-line');
      goalEnter.append('text')
               .attr('class', 'nv-goal-lbl')
               .text('Goal: ' + mschart.goal)
               .attr('text-anchor', 'start')
               .attr('x', 3)
               .attr('y', -5);

      goal.transition().duration(500).attr('transform', 'translate(0,' + (Math.floor(yscale(mschart.goal)) + 0.5) + ')');
      goal.select('line').transition().duration(500).attr('x2', xscale(mschart.domain[1].valueOf()));
    }
  }
}

function preprocessData(mschart) {
  var data = [];
  var domain = mschart.domain;
  domain[1] = d3.time.month.offset(domain[1], 2);
  var keys = d3.time.month.range(...domain);
  mschart.series.forEach(function (series, index) {
    var obj = {
      key: series.title,
      color: series.color,
      values: [],
      format: d3.format(series.display_format),
    };

    keys.forEach(function (key) {
      var datapoint = series.data.get(key);
      if(series.data.has(key))
        obj.values.push({
          x: moment(datapoint.key).valueOf(),
          y: datapoint.value,
          size: series.marker_size,
          shape: series.marker_style,
          note: datapoint.note,
          title: datapoint.title
          });
      else
        obj.values.push({
          x: moment(new Date(key)).valueOf(),
          missing: true
        });
    });
    data.push(obj);
  });
  return data;
}

function extractData(mschart) {
  var data = [];
  var oldData = preprocessData(mschart);
  oldData.forEach(function (series, i) {
    var poly_set = [];
    var poly_line, prev_pt = {missing: true};
    series.values.forEach(function (pt, i) {
      if(!pt.missing) {
        if(!poly_line) {
          poly_line = [];
          prev_pt = pt;
        }
         if(!prev_pt.missing) {
          poly_line.push(pt);
        } else {
          poly_line.push(pt);
          poly_set.push(poly_line);
          poly_line = [ pt ];
        }
        if(i === (series.values.length)) {
          poly_set.push(poly_line);
        }
      }
      if(pt.missing) {
         if(!prev_pt.missing) {
          poly_set.push(poly_line);
          poly_line = [ prev_pt ];
        }
      }
      prev_pt = pt;
    });

    poly_set.forEach(function (poly_line, i) {
      data.push({
        key: series.key + '::' + i,
        color: series.color,
        values: poly_line,
        format: series.format,
        dashed: i % 2 == 1
      });
    });
  });
  return data;
}