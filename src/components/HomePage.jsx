/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../img/homepage.svg';
import '../css/style.css';
import Header from './HeaderComponent.jsx';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header>
        <div className="header-link">
            <Link to="/signup">Signup</Link>
            <Link to="/login" id="last-header-link">
              Login
            </Link>
          </div>
        </Header>
        <div className="homepage-container">
          <div className="homepage-image-section">
            <img src={Icon} alt="Signup" className="center" />
          </div>

          <div className="homepage-text-section">
            <div className="center">
              <h1> Welcome to Donor Management System</h1>
              <Link to="/signup" className="button">
                Get Started
              </Link>
              <div />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
