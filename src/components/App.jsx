/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Signup from './signupComponent.jsx';
import Login from './loginComponent.jsx';
import HomePage from './HomePage.jsx';
import NotFound from './NotFound.jsx';
import Dashboard from './dashboard.jsx';

class App extends Component {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={HomePage} exact />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/*" component={NotFound} />
        </Router>
      </Provider>
    );
  }
}

export default App;
