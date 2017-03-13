import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import HomePage from './pages/HomePage';
import NewTodoPage from './pages/NewTodoPage';
import EditTodoPage from './pages/EditTodoPage';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="/new" component={NewTodoPage} />
    <Route path="/edit/:id" component={EditTodoPage} />
  </Router>, document.getElementById('root')
);
