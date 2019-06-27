import React from 'react';
import Proptype from 'prop-types';
import '../css/style.css';

const inputField = ({
  type, placeholder, name, value, onChange, className, error, labelName, onFocus,
}) => (
  <div className="form-group">
  <label htmlFor="">{labelName}</label>
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      autoComplete='off'
    />
    <small className="error-message">{error}</small>
  </div>
);

inputField.propTypes = {
  type: Proptype.string.isRequired,
  placeholder: Proptype.string,
  name: Proptype.string,
  value: Proptype.string.isRequired,
  onChange: Proptype.func,
  className: Proptype.string.isRequired,
  error: Proptype.string,
  labelName: Proptype.string,
  onFocus: Proptype.func,
};

export default inputField;
