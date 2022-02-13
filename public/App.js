
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import $ from 'jquery';


$(document).ready(function () {
    ReactDom.render((
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={Dashboard}/>
          {/* <Route path="*" component={NotFound}/> */}
        </Route>
      </Router>
    ), document.getElementById('root'));
  });