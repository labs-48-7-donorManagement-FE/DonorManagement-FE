/* eslint-disable no-unused-expressions */
import React from 'react';
import propTypes from 'prop-types';
import '../css/style.css';
import Profile from '../img/profile.jpg';

const Card = ({
  firstName, lastName, phoneNo, email,
}) => (
    <div className="card">
      <img src={Profile} alt="profile" />
      <h4>
        {firstName} {lastName}
      </h4>
      <p className="price">{phoneNo}</p>
      <p>{email}</p>
    </div>
);

Card.propTypes = {
  firstName: propTypes.string.isRequired,
  lastName: propTypes.string.isRequired,
  phoneNo: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
};

export default Card;
