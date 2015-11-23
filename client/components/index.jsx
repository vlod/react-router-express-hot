'use strict';
require("../css/style.scss");

if (module.hot) module.hot.accept(); // for hot reloading

import React from "react"
import { render } from 'react-dom'
import { createHistory } from 'history'
import createBrowserHistory from 'history/lib/createBrowserHistory' // https://goo.gl/1CZMd8
import { Router, Route, Link, IndexRoute } from 'react-router'

// app components
import App from "./app";
import SideBar from "./sidebar";
import Welcome from "./welcome";
import Breakfast from "./breakfast";
import Lunch from "./lunch";
import Dinner from "./dinner";

var DefaultRoute = Router.DefaultRoute;

// IMPORTANT: need to put Routes in a component so hot-loader works correctly
var Root = React.createClass( {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Route path="/" component={App}>
          <IndexRoute components={{content:Welcome}} />
          <Route path="welcome" components={{content:Welcome}} />
          <Route path="breakfast" components={{content:Breakfast, sidebar:SideBar}} />
          <Route path="lunch" components={{content:Lunch, sidebar:SideBar}} />
          <Route path="dinner" components={{content:Dinner, sidebar:SideBar}} />
        </Route>
      </Router>
    );
  }
});

render(<Root />,document.getElementById('app') );





