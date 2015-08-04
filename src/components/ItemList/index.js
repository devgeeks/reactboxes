var React = require('react');

var Item = require('../Item');

require('./index.sass');

var ItemList = React.createClass({

  displayName: 'ItemList',

  render: function() {
    'use strict';
    return (
      <div className='itemlist'>
        <Item />
        <a href='#/'>back</a>
      </div>
    );
  }

});

module.exports = ItemList;
