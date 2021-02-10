import React, { useEffect, useState } from 'react';
import './App.scss';
import { FormForNotRegistered } from './Components/FormForNotRegistered';
import { FormForRegistered } from './Components/FormForRegistered';
import { Tabs } from './Components/Tabs';

function App() {
  const [arrUsers, setArrUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [registrationRequired, setRegistrationRequired] = useState(false);
  const getDataFromServer = [{
    id: '1',
    name: 'Leanne',
    lastName: 'Graghm',
    surName: 'Bret',
    position: 'manager',
    phone: '+380985655987',
    login: 'leanne$123',
    password: 'FD53456463',
  },
  {
    id: '2',
    name: 'Piter',
    lastName: 'Lemon',
    surName: 'Sims',
    position: 'accountant',
    phone: '+380922355987',
    login: 'Sims3віа23',
    password: 'ABC211534563',
  },
  {
    id: '3',
    name: ' Graghm',
    lastName: 'Howell',
    surName: 'Antonette',
    position: 'engineer',
    phone: '+380985655987',
    login: 'Bret$123',
    password: 'as453456463',
  },
  {
    id: '4',
    name: 'Ervin',
    lastName: 'Graghm',
    surName: 'Bret',
    position: 'manager',
    phone: '+380985655987',
    login: 'leanne$123',
    password: 'rty53456463',
  },
  {
    id: '5',
    name: 'Victor',
    lastName: 'Graghm',
    surName: 'Plains',
    position: 'manager',
    phone: '+380985655987',
    login: 'leanne$123',
    password: 'dfg53456463',
  },
  {
    id: '6',
    name: 'Clementine',
    lastName: 'Bauch',
    surName: 'Karianne',
    position: 'manager',
    phone: '+380985655987',
    login: 'leanne$123',
    password: '3454sdf53456463',
  },
  {
    id: '7',
    name: 'Chelsey',
    lastName: 'Dietrich',
    surName: 'Kamren',
    position: 'manager',
    phone: '+380985655987',
    login: 'leanne$123',
    password: 'sfsf53456463',
  },
  {
    id: '8',
    name: 'Dennis',
    lastName: 'Schulist',
    surName: 'Crossing',
    position: 'manager',
    phone: '+380985655987',
    login: 'leanne$123',
    password: 'sdfe53456463',
  },
  ];

  if (localStorage.getItem('data') === null) {
    localStorage.setItem('data', JSON.stringify(getDataFromServer));
  }

  function getData() {
    return JSON.parse(localStorage.getItem('data') || getDataFromServer);
  }

  useEffect(() => {
    setArrUsers(getData());
  }, []);

  const checkingUserAccess = (e) => {
    e.preventDefault();
    const form = e.target.parentElement;
    const login = form.login.value;
    const password = form.password.value;
    arrUsers.forEach((item) => {
      if (item.login === login && item.password === password) {
        setIsUserRegistered(true);
        setRegistrationRequired(true);
        setCurrentUser(item);
      }
    });

    setRegistrationRequired(true);
  };

  return (
    <div className="app">
      {!registrationRequired && <FormForRegistered checkingUserAccess={checkingUserAccess} />}
      {isUserRegistered && registrationRequired
      && (
      <Tabs
        arrUsers={arrUsers}
        currentUser={currentUser}
        setArrUsers={setArrUsers}
        setCurrentUser={setCurrentUser}
      />
      )}
      {!isUserRegistered && registrationRequired && (
      <FormForNotRegistered
        arrUsers={arrUsers}
        setCurrentUser={setCurrentUser}
        setIsUserRegistered={setIsUserRegistered}
        setRegistrationRequired={setRegistrationRequired}
        setArrUsers={setArrUsers}
      />
      )}
    </div>
  );
}

export default App;
