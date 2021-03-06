/*jshint esnext:true, eqnull:true, undef:true */
/*globals require, window */

var moment = require('moment');
var d3 = require('d3');
var nv = require('./vendor/nvd3');
import {styleSheet, d3textWrap, range} from './utils';
import {debounce} from './vendor/debounce';
import {TabularLegendRenderer} from './tabularLegendRenderer';
import {PointLabelsRenderer} from './pointLabelsRenderer';
import {TrendLineRenderer} from './trendLineRenderer';
import {GoalLineRenderer} from './goalLineRenderer';
import {ContinuityLinesPlugin} from './breakLines';
import {AxisTitleRenderer} from './axisTitles';
import {XTickLabelsRenderer} from './xTickLabels';
import {BasicLegendRenderer} from './basicLegend';
import {PointHoverPlugin} from './hover';
import {PointClickPlugin} from './click';
import {CompactLayoutPlugin} from './compact';
import {INTERVALS, WEEKDAYS, submonthly, AutoIntervalPlugin} from './interval';

// Set up namespace:
window.plotqi = window.plotqi || {};

// Global list of plotters, may be used by plugins or external:
window.plotqi.plotters = [];

// Integration plugins, may be appended to core/stock plugins (late-binding):
window.plotqi.ADDITIONAL_PLUGINS = window.plotqi.ADDITIONAL_PLUGINS || [];

// Core plugins:
window.plotqi.RENDERING_PLUGINS = window.plotqi.RENDERING_PLUGINS || [
  AutoIntervalPlugin,
  CompactLayoutPlugin,
  ContinuityLinesPlugin,
  GoalLineRenderer,
  XTickLabelsRenderer,
  AxisTitleRenderer,
  TabularLegendRenderer,
  TrendLineRenderer,
  PointLabelsRenderer,
  BasicLegendRenderer,
  PointHoverPlugin,
  PointClickPlugin
];

// Class names:
var SVG_CLASSNAME = 'upiq-chart chart-svg';

// Line chart selectors:
var SEL_LINECHART = '.nv-wrap.nv-lineChart';
var SEL_LINESWRAP = ' .nv-linesWrap';
var LINESWRAP_CLASSNAME = 'nv-linesWrap';
var SEL_SCATTERWRAP = '.nv-wrap.nv-line .nv-scatterWrap';
var SEL_LINEGROUPS = SEL_SCATTERWRAP + ' .nv-wrap.nv-scatter .nv-groups';
var SEL_LINEGROUP = SEL_LINEGROUPS + ' .nv-group';
var SEL_MARKER = SEL_LINEGROUPS + ' path.nv-point';
// Bar chart selectors:
var SEL_BARCHART = '.nv-wrap.nv-multiBarWithLegend';
var SEL_BARWRAP = ' .nv-barsWrap';
var BARWRAP_CLASSNAME = 'nv-barsWrap';
var SEL_BAR = SEL_BARWRAP + ' .nv-wrap.nv-multibar .nv-groups rect.nv-bar';
// Generic selectors:
var SEL_CHARTSVG = '.chart-svg';


// registration of custom marker symbols for NVD3 1.7.x+
nv.utils.symbolMap.set('x', function(specifiedSize) {
    var size = Math.sqrt(specifiedSize) * 1.8;
    return 'M' + (-size/2) + ',' + (-size/2) +
            'l' + size + ',' + size +
            'm0,' + -(size) +
            'l' + (-size) + ',' + size;
});

nv.utils.symbolMap.set('dash', function(specifiedSize) {
    var size = Math.sqrt(specifiedSize) * 1.8;
    return 'M' + (-size/2) + ',' + 0 +
            'l' + size + ',' + 0;
});

nv.utils.symbolMap.set('plus', function(specifiedSize) {
    var size = Math.sqrt(specifiedSize) * 1.8;
    return 'M0,0' +
            'l0,' + (size) +
            'm' + (-size/2) + ',' + -(size/2) +
            'l' + (size) + ',0';
});


export class TimeSeriesPlotter {
  // multi-adapter of D3-wrapped dom element (chart div) context and plot data

  constructor (plotDiv, data, opts) {
    this.options = this.getOptions(opts);
    this.plotDiv = plotDiv;   // DOM (d3) node (outer plot div)
    this.data = data;         // TimeSeriesChart object
    this._loadConfig();
    // State to be created or re-created later, by this.render():
    this.chart = null;        // will be NVD3 chart obj
    this.plotCore = null;     // will be plot core inner div
    this.svg = null;          // will be svg inside the plot core div
    // Initialize plugins:
    this._initPlugins();
    // Completion flag may be used by onComplete() of plugins or external:
    this.complete = false;
    // make global reference available in plotqi namespace for plotter(s):
    window.plotqi.plotters.push(this);
  }

  getOptions(o) {
    /** get options and/or load initial defaults */
    o = Object.create(o) || {};
    // interactive mode:
    o.interactive = (o.interactive === undefined) ? true : o.interactive;
    // Check for whether plot will be contained inside a compact layout:
    o.compact = (o.layout === 'compact');
    // tiny mode (may be overridden by sizePlot during preRender (<165px),
    // may be true/false, undefined, or 'disabled':
    o.tiny = (o.tiny === undefined) ? false : o.tiny;
    // small mode usually auto-configured in preRender (<400px):
    o.small = (o.small === undefined) ? false : o.small;
    // prefix:
    o.prefix = o.prefix || 'plot';
    return o;
  }

  _intervalConfig() {
    var freq = this.data.frequency,
        base = INTERVALS[freq || 'monthly'],
        weekly = (freq === 'weekly'),
        interval = base,
        firstDate;
    if (weekly && this.data.series && this.data.series[0].data.size()) {
      // d3 forces funny dance with weekly, must specify day of week;
      // otherwise, nvd3 will choke.
      firstDate = moment.utc(this.data.series[0].data.values()[0].key);
      // day of week, lower-case as interval for d3:
      interval[1] = firstDate.locale('en-us').format('dddd').toLowerCase();
    }
    return interval;
  }

  _loadConfig(intval) {
    var interval = intval || this._intervalConfig(),
        domain = this.data.domain,
        dValue = x => x.valueOf(),
        type = this.data.chart_type || 'line',
        isLine = (type === 'line'),
        // right-side padding typically zero because last datapoint is
        // beginning of period, and domain bounds are to end of period;
        // in such case zero padded intervals is still effectively one.
        rightSidePadding = 0,
        leftSidePadding = (isLine) ? -1 : 0;
    // initial values:
    this.baseFontSize = 14;   // px
    // chart type:
    this.type = type;
    // whether plot is relative (not fixed-px) width:
    this.relativeWidth = (this.data.width_units == '%');
    // Weekdays, used only for weekly freq/interval:
    this.weekdays = WEEKDAYS;
    // interval bits:
    this.timeStep = interval[0];
    this.interval = interval[1];
    this.d3Interval = d3.time[this.interval].utc;
    // was interval overridden from auto-detection
    if (intval && intval.length === 2 && submonthly(intval)) {
      // submonthly auto-interval override:
      this.data.forceGenerated = interval;
    }
    // pad left/right with 0-1 periods of space:
    domain = [
      this.timeOffset(domain[0], leftSidePadding),
      this.timeOffset(domain[1], rightSidePadding)
    ];
    this.domain = domain;
    // time range function:
    this.timeRange = (start, end) => {
      return this.d3Interval.range(start, end, this.timeStep);
    };
    // tick values:
    this.tickVals = this.timeRange(
      domain[0],
      this.timeOffset(domain[1], +1)
      ).map(dValue);
    // plot domain for bar chart is continouous, but not for bar chart, which
    // is merely sorted/discrete; therefore bar chart xDomain needs to
    // include all values:
    this.xDomain = (isLine) ? domain.map(dValue) : this.tickVals;
    // NVD3 selectors contingent on plot type:
    this.nvType = (isLine) ? SEL_LINECHART : SEL_BARCHART;
    this.wrapType = (isLine) ? LINESWRAP_CLASSNAME : BARWRAP_CLASSNAME;
  }

  _allPlugins() {
    var core = window.plotqi.RENDERING_PLUGINS,
        additional = window.plotqi.ADDITIONAL_PLUGINS;
    return core.concat(additional);
  }

  _initPlugins() {
    // init plugins for later use by respective hookable methods
    this.plugins = [];
    this._allPlugins().forEach(function (klass) {
        var adapter = new klass(this);  // plugin adapts this plotter core
        this.plugins.push(adapter);
      },
      this
    );
  }

  pluginName(p) {
    /** plugin name: __name__ string stable post-minification, constructor name
      * not guranteed safe, so only used as fallback.
      */
    return p.__name__ || p.constructor.name;
  }

  pluginEnabled(name) {
    /** return true if plugin singleton instance by name is enabled */
    var plugin = this.plugins.filter(p => (this.pluginName(p) === name))[0];
    return plugin && plugin.enabled; 
  }

  getPlugin(name) {
    /** get plugin by name */
    var plugin = this.plugins.filter(p => (this.pluginName(p) === name))[0];
    return plugin;
  }

  computedInterval(value) {
    /** Given maximum possible value, infer a display maximum, interval.
      * Returns two-value array of max, interval.
      */
    var n, n_max=0, interval, m = Math;
    // boundary check:
    if (value <= 0 || value === Infinity) return [100, 20];  // safety
    // normal inference:
    for (n=1; n_max < value; n++) {
      n_max = 10 * m.max(1, m.pow(10, m.floor((n - 1) / 5))) * ((n % 5) || 5);
      interval = ([0,1].indexOf(n % 5) !== -1) ? n_max/5 : n_max / (n % 5);
    }
    return [n_max, interval];
  }

  _configAxes() {
    var range = [Math.floor(this.data.range[0]), Math.ceil(this.data.range[1])],
        rangeSpread = range[1] - range[0],
        chart = this.chart,
        labelFn = d => this.data.axisLabel(d).label,
        tabular = this.data.legend_placement === 'tabular',
        dFormat = d => moment.utc(d).format('YYYY-MM-DD'),
        yTickVals = n => {
          var out = [],
              interval = (range[1] - range[0]) / n,
              inferred,
              i;
          if (range[0] === range[1] && range[1] <= 100) {
            // e.g. range of [0,0] causes problem interval, infinite loop
            range = [0, 100];
            interval = 20;
          }
          if (range[1] > 100 && !this.data.range_max) {
            inferred = this.computedInterval(range[1]);
            range = [0, inferred[0]];
            interval = inferred[1];
          }
          for (i = range[0]; i <= range[1]; i += interval) {
            out.push(i);
          }
          return out;
        };
    // x-axis tick lines should be rendered, even if default CSS makes them
    // invisible, but labels should not be rendered by nvd3, so we have 
    // function yeilding empty string always.
    chart.xAxis.tickFormat(() => '');
    chart.xAxis.tickValues(this.tickVals);
    // y-axis:
    chart.yAxis
      .tickFormat(d3.format(',.0f'))
      .tickValues(yTickVals((rangeSpread < 5) ? rangeSpread : 5))
      .showMaxMin(false)
      .tickPadding(6);
    chart
      .xDomain(this.xDomain)
      .yDomain(range);
  }

  timeOffset(date, n) {
    /** n can be +/- integer for direction, number of intervals to offset */
    var weekly = this.weekdays.indexOf(this.interval) !== -1,
        interval = (weekly) ? 'week' : this.interval;
    return moment.utc(date).add(n * this.timeStep, interval).toDate();
  }

  _margins() {
    /** make default margins for plot */
    return {top: 10, bottom: 5, left: 40, right: 10};
  }

  nvChartFactory() {
    // factory for appropriate chart function to be used by 
    // d3 selection.call() or transition.call()
    var m = nv.models,
        type = this.data.chart_type || 'line',
        factory = (type === 'line') ? m.lineChart : m.multiBarChart,
        chart = factory(),
        markerSize = d => (d.size || 8) * Math.pow(this.plotWidth / 320, 2);
    chart
      .id(this.data.uid)
      .showLegend(false)    // do not use nvd3 for legends
      .tooltips(false);
    if (type === 'line') {
      chart
        .useInteractiveGuideline(false)
        .pointSize(markerSize)
        .interactive(false);
    }
    if (type === 'bar') {
      chart.showControls(false)
        .groupSpacing(0.3)
        .reduceXTicks(false);
    }
    return chart;
  }

  yformat(y) {
    return ((typeof y === 'number') ? d3.format(',.1f')(y) : 'N/A');
  }

  allSeries() {
    var input = this.data,
        keys = this.timeRange(
          input.domain[0],
          this.timeOffset(input.domain[1], +2)
        ),
        // transform fn for series model to plot semantics:
        _transform = function (series, index) {
            var plotType = this.type,
                obj = {
                  key: series.position,
                  color: series.color,
                  values: [],
                  format: d3.format(series.display_format),
                };
            if (plotType === 'line') {
              obj.incomplete = series.break_lines;
              obj.thickness =  series.line_width || 2.0;
              obj.markerThickness = series.marker_width || 2.0;
            }
            keys.map(k => k.valueOf()).forEach(function (key) {
              var datapoint = series.data.get(key),
                  value,
                  info;
              if (series.data.has(key)) {
                value = datapoint.value;
                info = {
                  x: moment.utc(datapoint.key).valueOf(),
                  y: (!!value || value === 0) ? value : NaN,
                  note: datapoint.note,
                  title: datapoint.title,
                  uri: datapoint.uri,
                  seriesIndex: index,
                };
                if (plotType === 'line') {
                  info.size = series.marker_size;
                  info.shape = series.marker_style;
                }
                obj.values.push(info);
              } else if (plotType === 'line') {
                obj.values.push({
                  x: moment.utc(key).valueOf()
                });
              }
            });
            return obj;
        };
    return input.series.map(_transform, this);
  }

  _updateLineDetail() {
    var lineGroups = this.svg.selectAll(
          '.nv-wrap.nv-line > g > g.nv-groups .nv-group'
        ),
        relStrokeWidthFactor = 0.25 + (this.gridWidth() / 600);
    lineGroups
      .style('stroke-dasharray', d => d.dashed ? '5 5' : 'none')
      .style('stroke-width', d => (d.thickness || 2) * relStrokeWidthFactor);
  }

  _updateMarkerDetail() {
    /** resize markers: d3 pointSize will draw paths of appropriate size,
      *      but will not scale stroke accordingly, we do this after
      *      initial rendering.
      */
    var relStrokeWidthFactor = 1 + this.plotWidth / 640,
        thickness = d => (d.markerThickness || 2) * relStrokeWidthFactor;
    this.svg.selectAll('.nv-point').style({
      'stroke-width': d => '' + thickness(d) + 'px'
    });
  }

  sizePlot() {
    var data = this.data,
        width = +data.width || 100,
        units = data.width_units || '%',
        aspect = data.aspect_ratio,                                 // [w,h]
        hasRatio = (aspect && aspect.length === 2),
        ratio = (hasRatio) ? (aspect[1] / aspect[0]) : undefined,   // h / w
        relHeight = (!hasRatio && data.height_units === '%'),
        widthSpec = '' + width + units,
        clientWidth,
        minHeight = 160,
        minFontSize = 9,  // px
        computedHeight;
    // plot core div is 100% width of outer:
    this.plotCore.style('width', '100%');
    // and outer is as wide as specified:
    this.plotDiv.style('width', widthSpec);
    if (!data.series.length) {
      // minimal height, placeholder text:
      this.plotCore.style('height', '15px');
      this.plotCore.html('<em>No series data yet provided for plot.</em>');
      return;
    }
    clientWidth = this.plotCore[0][0].clientWidth;
    if ((!hasRatio) && (data.height_units === 'px')) {
      // fixed pixel (absolute) height is specified:
      computedHeight = data.height;
    } else {
      if (relHeight && data.height) {
        // height relative to width, but no specified aspect ratio
        ratio = (data.height / 100.0);  // pct to ratio
      }
      // use explicitly provided or just-computed aspect ratio:
      computedHeight = Math.round(ratio * clientWidth);
    }
    // check computed vs. min:
    computedHeight = Math.max(minHeight, computedHeight);
    this.plotCore.style('height', '' + computedHeight + 'px');
    // save width, height of plotCore for reference by rendering:
    this.plotWidth = clientWidth;
    this.plotHeight = computedHeight;
    // set base font size on svg element:
    this.baseFontSize = Math.max(
      minFontSize,
      Math.floor(clientWidth/45 * 2) / 2.0    // rounded to 0.5px
    );
    // plot width flags: if sufficiently small, auto-set the 'tiny' flag:
    if (this.options.tiny !== 'disabled' && this.plotWidth < 165) {
      this.options.tiny = true;
    } else if (this.plotWidth >= 165) {
      this.options.tiny = false;
    }
    // plot width flags: if sufficiently small, auto-set the 'small' flag:
    this.options.small = (this.plotWidth < 400);
  }

  clear() {
    /** stable clear: respect existing non-plotCore content */
    if (this.plotCore && this.plotCore.size()) {
      this.plotCore.remove();
    }
  }

  displayMetadata() {
    var plotTitle = this.plotDiv.selectAll('.plot-title').data([null]),
        plotDesc = this.plotDiv.selectAll('.plot-description').data([null]),
        plotInfo = this.plotDiv.selectAll('.plot-info').data([null]);
    plotTitle.enter()
      .append('h3')
        .classed('plot-title', true);
    plotTitle.text(this.data.title || '');
    plotDesc.enter()
      .append('p')
        .classed('plot-description', true);
    plotDesc.text(this.data.description || '');
    plotInfo.enter()
      .append('div')
        .classed('plot-info', true);
  }

  preRender() {
    /** prepare the chart div context for rendering */
    var chart;
    // - Set margins:
    this.margins = this._margins();
    // - Set metadata:
    this.displayMetadata();
    // - Clear existing (core plot) content:
    this.clear();
    // - Create inner (core) div, insert before any end-matter/plot-info:
    this.plotCore = this.plotDiv.insert('div', '.plot-info')
      .classed('chart-div', true)
      .style({
        'postion': 'relative'
      });
    // - Size div elements according to specifications:
    this.sizePlot();
    // - Add empty svg
    this.svg = this.plotCore.append('svg').attr('class', SVG_CLASSNAME);
    this.svg.outerNode = this.plotDiv;
    // - set core groups in this.svg:
    this.abovePlotGroup = this.svg.append('g').classed('upiq-above-plot', true);
    this.plotGroup = this.svg.append('g').classed('upiq-plot', true);
    // - set initial base styles on plotCore element that will be inherited:
    this.plotCore.style({
      'font-size': '' + this.baseFontSize + 'px',
    });
    // - Add singleton 'defs' to svg:
    this.svg.append('defs');
    // - create an NVD3 chart object that will be returned:
    this.chart = this.nvChartFactory();
    // - get scales from chart, set for use by plotter, plugins:
    // -- xScale may be oridinal or linear:
    this.xScale = this.chart.xScale();
    // -- yScale:
    this.yScale = this.chart.yScale();
    // - Bind plugin svg, scales for plugins, call any plugins pre-render
    this.plugins.forEach(function (plugin) {
        if (typeof plugin.preRender === 'function') {
          plugin.preRender();
        }
      },
      this
    );
    // - Set chart positioning: width, height, margins:
    this.chart.width(this.plotWidth);    // width before margins
    this.chart.height(this.plotHeight);  // height before margins
    this.chart.margin(this.margins);     // margins around exterior of grid
  }

  _grid () {
    var barSel = '.nv-multiBarWithLegend .nv-x',
        lineSel = '.nv-lineChart g rect',
        sGrid = (this.type === 'bar') ? barSel : lineSel;
    return this.svg.select(sGrid).node();
  }

  gridWidth() {
    var grid = this._grid();
    return (!!grid) ? grid.getBoundingClientRect().width : 0;
  }

  gridHeight() {
    var grid = this._grid();
    return (!!grid) ? grid.getBoundingClientRect().height : 0;
  }

  updateRenderingPlugins() {
    /** update rendering plugins, in order */
    this.plugins.forEach(function (plugin) {
        plugin.update();
      },
      this
    );
  }

  setTimeScale() {
    // if xScale is ordinal, we need a (continuous) time-scale equivalent for
    // use by plugins:
    var [sDomain, sRange] = [this.xScale.domain(), this.xScale.range()];
    sRange = [sRange[0], sRange.slice(-1)[0]];
    sDomain = [sDomain[0], sDomain.slice(-1)[0]];
    // get an initial scale for proportions
    this.timeScale = d3.time.scale()
      .domain(sDomain)
      .range(sRange);
    // if plot type is bar, we need to extend the scale domain/range so that
    // we accommodate about 1 total period of left/right padding used by nvd3:
    if (this.type === 'bar') {
      sDomain[1] = this.timeOffset(sDomain[1], +1);
      sRange[1] = this.timeScale(sDomain[1]);
    }
    // use adjusted domain, range
    this.timeScale
      .domain(sDomain)
      .range(sRange);
  }

  render() {
    var data = this.allSeries(),
        sDomain, sRange;
    this.preRender();
    // now that we have chart, configure axes:
    this._configAxes();
    // Bind data to selection, call this.chart function in context
    // data-aware selection:
    this.plotGroup.datum(data).call(this.chart);
    // after this binding, we have x scales with concrete domain/range, but
    // for bar charts, we may need carefully constructed time-scale:
    this.setTimeScale();
    if (this.type === 'line') {
      // update line detail (e.g. dashes, thickness):
      this._updateLineDetail();
      this._updateMarkerDetail();
    }
    // Rendering plugins, in order:
    this.updateRenderingPlugins();
    return this.chart;
  }

  loadInteractiveFeatures() {
    /** load interactive features from plugins, as applicable, if this
      * is enabled (this.options.interactive === true).
      */
    if (!this.options.interactive) return;
    this.plugins.forEach(function (plugin) {
        plugin.loadInteractiveFeatures();
      },
      this
    );
  }

  highlightX(key) {
    /** given date key, highlight any tick line associated with that key */
    var value = (key) ? key.valueOf() : null,
        tickLines = this.svg.select('g.nv-x').selectAll('g.tick'),
        tick = tickLines[0].filter(l => d3.select(l).data() == value);
    d3.select(tick[0]).classed('selected', true);
  }

  clearHighlights() {
    var tickLines = this.svg.select('g.nv-x').selectAll('g.tick');
    tickLines.classed('selected', false);
  }

  reorderSeries() {
    /** DOM order is stacking/painting order; reversing puts the top-most
      * and front-most line in all series at the top of the drawing, with
      * subsequent (and assumed of lesser importance) lines are painted 
      * underneath.
      */
    var indexes = range(this.data.series.length);
    indexes.reverse();
    indexes.forEach(function (i) {
      var selector = '.nv-series-' + i,
          selection = this.plotGroup.selectAll(selector);
      selection[0].forEach(function (el) {
        el.parentNode.appendChild(el);
      });
      },
      this
    );
  }

  postRender() {
    var abovePlot = this.abovePlotGroup,
        _size = el => el.getBoundingClientRect().height,
        sizers,
        adjustHeight;
    // - Re-order series that NVD3 draws, if line chart:
    if (this.type === 'line') {
      this.reorderSeries();
    }
    // - per-plugin adjustments
    this.plugins.forEach(function (plugin) {
        plugin.postRender();
      },
      this
    );
    // - general adjustments
    // -- positioning adjustment to accommodate height of this.abovePlotGroup
    //    which may be adjusted by plugins (e.g. a top legend); note this
    //    adjusts the total plotCore height irrespective of aspect-ratio set
    //    in this.sizePlot() -- note: plugins must have a rect.sizing element,
    //    within their output, as introspection of box model for group
    //    elements is unreliable.
    sizers = abovePlot.selectAll('.sizing');
    if (sizers.size()) {
      adjustHeight = sizers[0].map(_size).reduce(((a, b) => a + b), 0);
    }
    if (adjustHeight) {
      this.plotGroup.attr({
        transform: `translate(0, ${adjustHeight})`
      });
      this.plotHeight += adjustHeight;
      this.plotCore.style({
        height: `${this.plotHeight}px`
      });
    }
    // - Mark as complete:
    this.complete = true;
    // - per-plugin on-complete notifiers:
    this.plugins.forEach(function (plugin) {
        plugin.onComplete();
      },
      this
    );
  }

  refresh() {
    this.render();
    this.loadInteractiveFeatures();
    this.postRender();
  }

  update() {
    // rendering stuff:
    this.refresh();
    if (this.relativeWidth) {
      window.addEventListener('resize', debounce(this.refresh.bind(this), 500, false));
    }
  }
}

