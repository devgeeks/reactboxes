var React = require('react');

require('./index.sass');

var Login = React.createClass({

  displayName: 'Login',

  render: function() {
    'use strict';
    return (
      <div className='login'>
        <a href="#/items">Items</a>
      </div>
    );
  }

});

module.exports = Login;
