/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Proptype from 'prop-types';
import { connect } from 'react-redux';
import * as yup from 'yup';
import '../css/style.css';
import Header from './HeaderComponent.jsx';
import Icon from '../img/dashboard.svg';
import getCardDetails from '../actions/cardAction';
import donor from '../actions/createDonor';
import Card from './card.jsx';
import InputField from './InputField.jsx';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  phoneNo: yup.number().required().min(11),
});

class Dashboard extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    errors: {},
    focus: false,
  };

  componentDidMount() {
    this.props.getCardDetails();
  }

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

    const validationError = await this.checkValidation();

    const {
      firstName, lastName, email, phoneNo,
    } = this.state;

    const obj = {
      firstName,
      lastName,
      email,
      phoneNo,
      methodOfComms: 'skype',
      pastDonations: 'Nigeria donations',
    };

    if (validationError) {
      this.props.donor(obj, this.props.history);
    }
  };

  render() {
    const { cards } = this.props;

    return (
      <Fragment>
        <div className="general-container">
          <Header>
            <div className="header-link">
              <Link to="/">logout</Link>
            </div>
          </Header>
          <div className="first-dashboard-section">
            <div className="image-dashboard-section">
              <img src={Icon} alt="Signup" />
            </div>
            <div className="dashboard-form-section">
              <div className="dashboard-form">
                <form action="" className="dash-form" onSubmit={this.onSubmit}>
                  <div className="server-success-message">{this.props.createDonor.message}</div>
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
                    name="phoneNo"
                    value={this.state.phoneNo}
                    onChange={this.onChange}
                    error={this.state.errors.phoneNo && this.state.errors.phoneNo}
                  />

                  <InputField type="submit" className="form-button" value="create" />
                </form>
              </div>
            </div>
          </div>
          <div className="second-dashboard-section">
            <h1>Donors</h1>
            <div className="card-head">
              {cards.map(card => (
                <Card
                  key={card.id}
                  firstName={card.firstName}
                  lastName={card.lastName}
                  phoneNo={card.phoneNo}
                  email={card.email}
                  methodOfComms={card.methodOfComms}
                  pastDonations={card.pastDonations}
                  lastCommsDate={card.lastCommsDate}
                />
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  getCardDetails: Proptype.func.isRequired,
  card: Proptype.array,
  map: Proptype.func,
  donor: Proptype.object,
  history: Proptype.object,
  cards: Proptype.object,
  createDonor: Proptype.object,
};

const mapStateToProps = state => ({
  cards: state.card.cards,
  createDonor: state.createDonor.body,
});

export default connect(
  mapStateToProps,
  { getCardDetails, donor },
)(withRouter(Dashboard));
