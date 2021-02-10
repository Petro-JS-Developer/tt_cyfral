import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Table } from '../Table';
import './styleTabs.scss';
import { ActionHandler } from '../ActionHandler';

export const Tabs = ({
  arrUsers,
  currentUser,
  setArrUsers,
  setCurrentUser,
}) => {
  const [active, setActive] = useState('changeUserSettings');
  const openTab = (e) => setActive(e.target.name);

  return (
    <div>
      <div className="tab">
        <button
          type="button"
          className="tab__button"
          onClick={openTab}
          key={v4()}
          name="changeUserSettings"
        >
          Change user settings
        </button>
        <button
          type="button"
          className="tab__button"
          onClick={openTab}
          key={v4()}
          name="showAllUsers"
        >
          Show all users
        </button>
        <button
          type="button"
          className="tab__button"
          onClick={openTab}
          key={v4()}
          name="actionHandler"
        >
          Action handler
        </button>
      </div>
      {active === 'changeUserSettings' ? <Table arrUsers={arrUsers} currentUser={currentUser} active={active} setArrUsers={setArrUsers} setCurrentUser={setCurrentUser} /> : ''}
      {active === 'showAllUsers' ? <Table arrUsers={arrUsers} currentUserID="0" setArrUsers={setArrUsers} setCurrentUser={setCurrentUser} /> : ''}
      {active === 'actionHandler' ? <ActionHandler /> : ''}
    </div>
  );
};

Tabs.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    surName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
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
  setArrUsers: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};
