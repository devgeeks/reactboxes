var React = require('react/addons');
var Router = require('react-router');
var { RouteHandler } = Router;
var TimeoutTransitionGroup = require('timeout-transition-group');

var App = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  displayName: 'App',

  render: function() {
    'use strict';
    let name = this.context.router.getCurrentPath();
    return (
      <div className='app'>
        <TimeoutTransitionGroup
            enterTimeout={ 300 } leaveTimeout={ 300 }
            transitionName='pagetransition'>
          <RouteHandler key={ name } />
        </TimeoutTransitionGroup>
      </div>
    );
  }

});

module.exports = App;
