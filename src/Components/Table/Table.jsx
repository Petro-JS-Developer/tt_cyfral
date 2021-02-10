import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styleTable.scss';
import { User } from '../User/User';

export const Table = ({
  arrUsers, currentUser, active, setArrUsers, setCurrentUser,
}) => {
  const [isEditCell, setIsEditCell] = useState('0');

  return (
    <div className="gridTable">
      <div className="gridTable__header">
        <div className="headerItem">Name</div>
        <div className="headerItem">Last Name</div>
        <div className="headerItem">Surname</div>
        <div className="headerItem">Position</div>
        <div className="headerItem">Phone</div>
        <div className="headerItem">Login</div>
        <div className="headerItem">Password</div>
      </div>
      <div className="tableBody">
        {active === 'changeUserSettings' ? (
          <User
            key={currentUser.id}
            {...currentUser}
            isEditCell={isEditCell}
            setIsEditCell={setIsEditCell}
            arrUsers={arrUsers}
            setArrUsers={setArrUsers}
            setCurrentUser={setCurrentUser}
          />
        )
          : arrUsers.map((user) => (
            <User
              key={user.id}
              {...user}
              isEditCell={isEditCell}
              setIsEditCell={setIsEditCell}
              arrUsers={arrUsers}
              setArrUsers={setArrUsers}
              setCurrentUser={setCurrentUser}
            />
          ))}

      </div>
    </div>
  );
};

Table.propTypes = {
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
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    surName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  active: PropTypes.string.isRequired,
  setArrUsers: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};

Table.defaultProps = {
  currentUser: {},
};
