/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var polygons = this.props.polygons.map(function(polygon, index) {
      /* jshint ignore:start */
      return <polygon key={index} points={polygon.toString()} />;
      /* jshint ignore:end */
    });

    /* jshint ignore:start */
    return <g className={this.props.className}>{polygons}</g>;
    /* jshint ignore:end */
  }
});
