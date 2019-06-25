/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import Header from './HeaderComponent.jsx';


class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Header>
          <div className="header-link">
            <Link to="/login">logout</Link>
          </div>
        </Header>
        <div className='dashboard-container'>
        <div className='sidebar'>
        <Link to='/' class="sidebarlink" ><i className="fas fa-plus sidebaricons"></i>Compose</Link>

        </div>

        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
