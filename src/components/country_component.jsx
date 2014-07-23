/** @jsx React.DOM */

'use strict';

var Bacon = require('baconjs').Bacon,
    React = require('react/addons'),
    core  = require('../core');

var cx = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'CountryComponent',

  propTypes: {
    country:  React.PropTypes.object.isRequired,
    nearby:   React.PropTypes.bool.isRequired,
    selected: React.PropTypes.bool.isRequired,
    stream:   React.PropTypes.instanceOf(Bacon.Observable).isRequired
  },

  didSelectCountry: function(country) {
    this.props.stream.push({type: 'select-country', country: country});
  },

  classes: function() {
    var player = this.props.country.player,
        color  = player ? player.toString() : '';

    var classes = {
      country:  true,
      nearby:   this.props.nearby,
      selected: this.props.selected
    };

    classes[color] = true;

    return classes;
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    // Don't update the component if the props haven't changed.
    return nextProps.country !== this.props.country ||
           nextProps.nearby != this.props.nearby ||
           nextProps.selected != this.props.selected;
  },

  render: function() {
    var country = this.props.country;

    core.log('CountryComponent#render (' + country + ')');

    return (
      /* jshint ignore:start */
      <polygon
        className={cx(this.classes())}
        points={country.polygon}
        onClick={this.didSelectCountry.bind(this, country)}
      />
      /* jshint ignore:end */
    );
  }
});
