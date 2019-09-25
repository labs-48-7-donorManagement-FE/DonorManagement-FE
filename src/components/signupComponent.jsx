/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-deprecated */
import '@babel/polyfill';
import React, { Component, Fragment } from 'react';
import Proptype from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import '../css/style.css';
import { connect } from 'react-redux';
import * as yup from 'yup';
import fetchSignup from '../actions/signupAction';
import Icon from '../img/signup.svg';
import InputField from './InputField.jsx';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required()
    .min(6)
    .max(20),
});

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    errors: {},
    focus: false,
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkValidation = async () => {
    let formIsValid = false;

    try {
      await schema.validate(this.state, { abortEarly: false });
      formIsValid = true;
    } catch (err) {
      const errors = err.inner.reduce((accumulator, error) => {
        accumulator[error.path] = error.message;
        return accumulator;
      }, {});
      formIsValid = false;
      this.setState({ errors: { ...errors } });
    }
    return formIsValid;
  };

  clearFocus = (name) => {
    const previousErrors = { ...this.state.errors };
    delete previousErrors[name];
    this.setState({ errors: previousErrors });
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const {
      firstName, lastName, email, password,
    } = this.state;

    const obj = {
      firstName,
      lastName,
      email,
      password,
    };

    const validationError = await this.checkValidation();

    if (validationError) {
      this.props.fetchSignup(obj, this.props.history);
    }
  };

  render() {
    localStorage.clear();
    return (
      <Fragment>
        <div className="container">
          <div className="signup-container">
            <div className="image-section">
              <h2 className="align-center margin-top">Donor Management System</h2>
              <img src={Icon} alt="Signup" />
            </div>
            <div className="form-section">
              <div className="auth-form">
                <div className="nav">
                  <Link to="/signup" className="nav-button">
                    sign up
                  </Link>
                  <Link to="/login" className="nav-button nav-button2">
                    log in
                  </Link>
                </div>
                <h3>Sign Up</h3>
                <div className='server-error-message'>{this.props.signupError.message}</div>
                <form action="" className="form" onSubmit={this.onSubmit}>
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
                    type="password"
                    labelName="Password"
                    className="form-control"
                    placeholder="Enter password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={this.state.errors.password && this.state.errors.password}
                  />

                  <InputField type="submit" className="form-button" value="sign up" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Signup.propTypes = {
  fetchSignup: Proptype.func.isRequired,
  history: Proptype.object,
  signupError: Proptype.object,
};

const mapStateToProps = state => ({
  signup: state.signup.body,
  signupError: state.signup.error,
});

export default connect(
  mapStateToProps,
  { fetchSignup },
)(withRouter(Signup));
