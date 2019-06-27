/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Proptype from 'prop-types';
import { connect } from 'react-redux';
import '../css/style.css';
import Header from './HeaderComponent.jsx';
import Icon from '../img/dashboard.svg';
import getCardDetails from '../actions/cardAction';
// import Profile from '../img/profile.jpg';
import Card from './card.jsx';
import InputField from './InputField.jsx';

class Dashboard extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    errors: {},
    focus: false,
  };

  componentDidMount() {
    console.log('componentdidmount');
    this.props.getCardDetails();
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className="general-container">
          <Header>
            <div className="header-link">
              <Link to="/login">logout</Link>
            </div>
          </Header>
          <div className="first-dashboard-section">
            <div className="image-dashboard-section">
              <img src={Icon} alt="Signup" />
            </div>
            <div className="dashboard-form-section">
              <div className="dashboard-form">
                <form action="" className="dash-form" onSubmit={this.onSubmit}>
                  <h2>Create A Donor</h2>
                  <InputField
                    onFocus={e => this.clearFocus(e.target.name)}
                    type="text"
                    labelName="First Name"
                    className="form-control"
                    placeholder="Enter first name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChange}
                    error={this.state.errors.firstName && this.state.errors.firstName}
                  />

                  <InputField
                    onFocus={e => this.clearFocus(e.target.name)}
                    type="text"
                    labelName="Last Name"
                    className="form-control"
                    placeholder="Enter last name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.onChange}
                    error={this.state.errors.lastName && this.state.errors.lastName}
                  />

                  <InputField
                    onFocus={e => this.clearFocus(e.target.name)}
                    type="text"
                    labelName="Email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={this.state.errors.email && this.state.errors.email}
                  />

                  <InputField
                    onFocus={e => this.clearFocus(e.target.name)}
                    type="text"
                    labelName="Phone number"
                    className="form-control"
                    placeholder="Enter phone number"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChange}
                    error={this.state.errors.email && this.state.errors.email}
                  />

                  <InputField type="submit" className="form-button" value="create" />
                </form>
              </div>
            </div>
          </div>
          <div className="second-dashboard-section">
            <h1>Donors</h1>
            <div className="card-head">
              <Card firstName="simi" lastName="joe" phoneNo="07080195678" email="simi@gmail.com" />
              <Card firstName="simi" lastName="joe" phoneNo="07080195678" email="simi@gmail.com" />
              <Card firstName="simi" lastName="joe" phoneNo="07080195678" email="simi@gmail.com" />
              <Card firstName="simi" lastName="joe" phoneNo="07080195678" email="simi@gmail.com" />
              <Card firstName="simi" lastName="joe" phoneNo="07080195678" email="simi@gmail.com" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  getCardDetails: Proptype.func.isRequired,
};

const mapStateToProps = state => ({
  card: state.card.body,
});

export default connect(
  mapStateToProps,
  { getCardDetails },
)(withRouter(Dashboard));
