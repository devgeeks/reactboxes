var React = require('react');

require('./index.sass');

var Item = React.createClass({

  displayName: 'Item',

  render: function() {
    'use strict';
    return (
      <div className='item' />
    );
  }

});

module.exports = Item;
