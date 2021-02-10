import React from 'react';
import PropTypes from 'prop-types';
import './styleFormForRegistered.scss';

export const FormForRegistered = ({ checkingUserAccess }) => (
  <div name="loginForm">
    <form action="" className="registeredUser">
      <label htmlFor="login" className="labelForm">Login</label>
      <input type="text" placeholder="Login" id="login" className="inputForm" name="login" />
      <label htmlFor="passwordLogin" className="labelForm">Password</label>
      <input type="text" placeholder="Password" id="passwordLogin" className="inputForm" name="password" />
      <button
        type="submit"
        className="buttonEntrance"
        onClick={(e) => checkingUserAccess(e)}
      >
        Login
      </button>
    </form>
  </div>
);

FormForRegistered.propTypes = {
  checkingUserAccess: PropTypes.func.isRequired,
};
