import React, { Fragment } from 'react';
import Proptype from 'prop-types';
import '../css/style.css';

const Header = props => (
    <Fragment>
      <header>
        <h3 id="app-title">Donor Management System</h3>
        {props.children}
      </header>
    </Fragment>
);

Header.propTypes = {
  children: Proptype.object,
};

export default Header;
