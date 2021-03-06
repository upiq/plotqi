/*jshint esnext:true, eqnull:true, undef:true */
/*globals require, window */

var d3 = require('d3');
import {BaseRenderingPlugin} from './plugin';
import {d3textWrap} from './utils';

export class BasicLegendRenderer extends BaseRenderingPlugin {

  constructor(plotter) {
    super(plotter);
    this.all_locations = ['e', 'n'];  // 'east' is really northeast...
  }

  preRender() {
    super.preRender();
    this.placement = this.data.legend_placement;
    this.smallPlot = this.plotter.options.small;
    this.tiny = this.plotter.options.tiny;
    this.loc = this._location();
    this.enabled = this._enabled();
    if (this.enabled) {
      this.initialPositioning();
    }
    this.rowMax = ((this.tiny) ? 1 : (this.smallPlot) ? 2 : 4);
    this.textSize = this.plotter.baseFontSize * ((this.tiny) ? 0.9 : 0.8);
    if (this.data.series.length > 4 && !this.smallPlot && !this.tiny) {
      this.textSize *= 0.8;
    }
  }

  initialPositioning() {
    /** set width, height;
      * adjust margins and if needed positioning of plot relative to legend
      */
    var loc = this.loc,
        isTop = this.loc === 'n',
        tiny = this.tiny,
        plotWidth = this.plotter.plotWidth,
        legendHeight = (isTop) ? 30 : this.plotter.plotHeight,
        gridLeft = this.plotter.margins.left,
        topWidth = plotWidth - ((tiny) ? 10 : gridLeft) - this.margins.right,
        legendWidth = (isTop) ? topWidth : Math.floor(plotWidth * 0.2),
        legendMargin = Math.floor(0.01 * plotWidth),
        gridRight = plotWidth - legendWidth - legendMargin;
    this.width = legendWidth - 1;
    this.left = (isTop) ? gridLeft : gridRight + legendMargin;
    this.top = (isTop) ? 1 : this.plotter.margins.top - 1;
    this.height = legendHeight - this.top - 1;
    if (!isTop) {
      this.margins.right = this.width + legendMargin + 2;
    }
  }

  _enabled() {
    var nonTabularPlacement = (this.placement && this.placement !== 'tabular'),
        multiSeries = (this.data.series.length > 1);
    if (this.plotter.options.tiny || this.plotter.plotWidth < 320) {
      nonTabularPlacement = true;
    }
    return nonTabularPlacement && this.loc !== null && multiSeries;
  }

  _location() {
    var specifiedLocation = this.data.legend_location,
        unsupported = (this.all_locations.indexOf(specifiedLocation) === -1),
        plotWidth = this.plotter.plotWidth,
        loc = (unsupported) ? 'e' : specifiedLocation;
    if (!specifiedLocation) return null;  // no legend
    return (this.smallPlot) ? 'n' : loc;
  }

  _legendOrigin() {
    var left = (this.plotter.options.tiny) ? 10 : this.left;
    return [left, this.top];  // x,y
  }

  container() {
    /** outermost container for the legend */
    return (this.loc === 'n') ? this.abovePlotGroup : this.plotGroup;
  }

  mkGroup() {
    var group = this.container().selectAll('g.upiq-basic-legend').data([null]),
        [x, y] = this._legendOrigin();
    group.enter().append('g')
      .classed('upiq-basic-legend', true)
      .attr({
        transform: `translate(${x}, ${y})`
      });
    this.group = group;
  }

  drawBgRect() {
    this.group.append('rect')
      .classed('legend-bg', true)
      .attr({
        height: this.height,
        width: Math.floor(this.width),
        'fill': '#fff',
        'fill-opacity': 0,
        'stroke-opacity': 0
      })
      .style({
        'stroke-width': '0.175%',
        'stroke': '#999'
      });
  }

  mkElementGroup(idx, padding) {
    var isTop = this.loc === 'n',
        rowIdx = (isTop) ? Math.floor(idx / this.rowMax) : idx,
        leftPadding = (isTop) ? 0 : padding,
        rowPos = (isTop) ? idx % this.rowMax : idx,
        left = ((isTop) ? rowPos * this.itemWidth : 0) + leftPadding,
        rowTop = rowIdx * 30,
        group = this.group.append('g')
          .classed('upiq-legend-series', true)
          .attr({
            transform: `translate(${left}, ${rowTop})`
          });
    return group;
  }

  drawElement(series) {
    var color = series.color,
        label = series.title,
        tiny = this.tiny,
        padding = Math.floor(this.plotter.plotWidth * ((tiny) ? 0.1 : 0.01)),
        innerPadding = Math.floor(padding/2),
        idx = series.position,
        group = this.mkElementGroup(idx, padding),
        groupY = 0 + ((this.loc === 'n') ? 1 : idx) * this.textSize,
        colorBoxSize = Math.floor(this.plotter.plotWidth / ((tiny) ? 20 : 45)),
        textWidth = this.itemWidth - colorBoxSize - innerPadding * 3,
        text;
    // draw background rectangle (transparent by default, used for sizing)
    group.append('rect')
      .classed('legend-series-bg', true)
      .attr({
        x: 0,
        y: 0,
        width: this.itemWidth,
        height: 30
      })
      .style({
        stroke: '#aaa',
        'stroke-width': '0.2%',
        'fill': '#fff',
        'fill-opacity': 0,
        'stroke-opacity': 0
      });
    // draw color swatch for series:
    group.append('rect')
      .classed('legend-series-color', true)
      .attr({
        x: innerPadding,
        y: groupY,
        width: colorBoxSize,
        height: colorBoxSize * ((tiny) ? 2 : 1)
      })
      .style({
        fill: color
      });
    // draw label for series
    group.append('g')
      .attr({
        transform: `translate(${colorBoxSize + innerPadding * 2} ${groupY})`
      })
      .append('text')
        .attr({
          x: 0,
          y: 0,
          'font-size': `${this.textSize}px`
        })
        .style({
          'dominant-baseline': 'middle'
        })
        .text(label)
        .call(d3textWrap, textWidth, 0);
  }

  drawElements() {
    var isTop = this.loc === 'n',
        itemCount = this.data.series.length,
        n = (isTop) ? this.rowMax : itemCount;
    this.itemWidth = Math.floor((isTop) ? this.width / n : this.width * 0.9);  
    this.data.series.forEach(function (series) {
      this.drawElement(series);
      },
      this
    );
  }

  render() {
    if (!this.enabled) {
      return;
    }
    this.mkGroup();
    this.drawBgRect();
    this.drawElements();
  }

  _postRender() {
    var seriesGroups = this.group.selectAll('g.upiq-legend-series'),
        selParent = this.group[0][0],
        rowMax = this.rowMax,
        groupSelections = seriesGroups[0].map(function (group, idx) {
            return d3.select(group).call(g => g[0].parentNode = selParent);
          },
          this
        ),
        numSeries = groupSelections.length,
        selHeight = e => e[0][0].getBoundingClientRect().height,
        _height = g => Math.ceil(selHeight(g.select('text')) * 1.35),
        height = Math.max.apply(null, groupSelections.map(_height)),
        isTop = (this.loc === 'n'),
        margin = Math.floor(this.plotter.plotWidth / 120);
    // align elements within each series group:
    groupSelections.forEach(function (group, index) {
        var middle = Math.round(height / 2.0);
        group.select('rect.legend-series-color').call(function (rect) {
          var rectHeight = rect[0][0].getBoundingClientRect().height,
              rectTop = middle - Math.floor(rectHeight / 2);
          rect.attr({
            y: rectTop
          });
        });
        group.select('g').call(function (textGroup) {
          var [x, y] = d3.transform(textGroup.attr('transform')).translate,
              text = textGroup.select('text'),
              tHeight = text[0][0].getBoundingClientRect().height,
              numSpans = text.selectAll('tspan').size(),
              multi = numSpans > 1,
              lineHeight = Math.round(tHeight / numSpans),
              multiLineOffset = middle - Math.floor((tHeight - lineHeight) / 2),
              textMiddle = (multi) ? multiLineOffset : middle;
          textGroup.attr({
            transform: `translate(${x} ${textMiddle})`
          });
        });
      },
      this
    );
    // distribute series groups (evenly size, evenly spaced):
    groupSelections.forEach(function (group, index) {
        var rowIdx = Math.floor(index / rowMax),
            rowY = margin + (rowIdx * height),
            yOffset = (isTop) ? rowY : index * height + margin,
            xOffset = d3.transform(group.attr('transform')).translate[0],
            bgRect = group.select('rect.legend-series-bg');
        // space:
        group.attr({
          transform: `translate(${xOffset} ${yOffset})` 
        });
        // size: even height for background rectangles:
        bgRect.attr({
          height: height
        });
      },
      this
    );
    // adjust height of bg rect to content
    this.group.select('rect.legend-bg')
      .classed('sizing', true)
      .attr({
        height: function (d) {
          var numRows = Math.ceil(numSeries / rowMax);
          return Math.floor(height * ((isTop) ? numRows : numSeries)) + (margin * 2);
        }
      });
  }

  postRender() {
    if (!this.enabled) {
      return;
    }
    this._postRender();
  }

}

