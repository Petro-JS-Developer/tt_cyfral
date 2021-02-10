import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import './styleFormForNotRegistered.scss';

export const FormForNotRegistered = ({
  arrUsers,
  setCurrentUser,
  setIsUserRegistered,
  setRegistrationRequired,
  setArrUsers,
}) => {
  const addNewUserLocalStorage = (e) => {
    e.preventDefault();
    const form = e.target.parentElement;

    const createNewUser = {
      id: uuidv4(),
      name: form.name.value,
      lastName: form.lastName.value,
      surName: form.surName.value,
      position: form.position.value,
      phone: form.phone.value,
      login: form.login.value,
      password: form.password.value,
    };

    arrUsers.push(createNewUser);
    setArrUsers(arrUsers);
    setCurrentUser(createNewUser);
    setIsUserRegistered(true);
    setRegistrationRequired(true);
    localStorage.setItem('data', JSON.stringify(arrUsers));
  };

  return (
    <div className="formLogin">
      <form action="" className="notRegisteredUser">
        <label htmlFor="name" className="labelForm">Name</label>
        <input name="name" type="text" placeholder="Name" id="name" className="inputForm" />
        <label htmlFor="lastName" className="labelForm">Last name</label>
        <input name="lastName" type="text" placeholder="Last name" id="lastName" className="inputForm" />
        <label htmlFor="surnames" className="labelForm">Surnames</label>
        <input name="surName" type="text" placeholder="Surnames" id="surnames" className="inputForm" />
        <label htmlFor="position" className="labelForm">Position</label>
        <input name="position" type="text" placeholder="Position" id="position" className="inputForm" />
        <label htmlFor="phone" className="labelForm">Phone</label>
        <input name="phone" type="text" placeholder="Phone" id="phone" className="inputForm" />
        <label htmlFor="login" className="labelForm">Login</label>
        <input name="login" type="text" placeholder="Login" id="login" className="inputForm" />
        <label htmlFor="password" className="labelForm">Password</label>
        <input name="password" type="text" placeholder="Password" id="password" className="inputForm" />
        <label htmlFor="passwordConfirmation" className="labelForm">Password confirmation</label>
        <input type="text" placeholder="Repeat the password" id="passwordConfirmation" className="inputForm" />
        <button type="submit" className="buttonRegisteredUser" onClick={(e) => addNewUserLocalStorage(e)}>Send</button>
      </form>
    </div>
  );
};

FormForNotRegistered.propTypes = {
  arrUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      surName: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setCurrentUser: PropTypes.func.isRequired,
  setIsUserRegistered: PropTypes.func.isRequired,
  setRegistrationRequired: PropTypes.func.isRequired,
  setArrUsers: PropTypes.func.isRequired,
};
