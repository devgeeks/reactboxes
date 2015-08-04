var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute } = Router;

var a11y = require('react-a11y');
a11y(React);

var App = require('./components/App');
var Login = require('./components/Login');
var ItemList = require('./components/ItemList');

require('./index.sass');

var routes = (
  <Route handler={ App } name='index' path='/'>
    <Route handler={ ItemList } name='itemlist' path='items' />
    <Route handler={ Login } path='login'/>
    <DefaultRoute handler={ Login } />
  </Route>
);

Router.run(routes, (Handler) => {
  'use strict';
  React.render(<Handler/>, document.getElementById('app'));
});
