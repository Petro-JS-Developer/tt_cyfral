/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styleUser.scss';

export const User = ({
  id,
  name,
  lastName,
  surName,
  position,
  phone,
  login,
  password,
  isEditCell,
  setIsEditCell,
  arrUsers,
  setArrUsers,
  setCurrentUser,
}) => {
  let copyArr = arrUsers;

  const [editName, setEditName] = useState(false);
  const [customName, setCustomName] = useState(name);

  const [editLastName, setEditLastName] = useState(false);
  const [customLastName, setLastName] = useState(lastName);

  const [editSurName, setEditSurName] = useState(false);
  const [customSurName, setSurName] = useState(surName);

  const [editPosition, setEditPosition] = useState(false);
  const [customPosition, setPosition] = useState(position);

  const [editPhone, setEditPhone] = useState(false);
  const [customPhone, setCustomPhone] = useState(phone);

  const [editLogin, setEditLogin] = useState(false);
  const [customLogin, setCustomLogin] = useState(login);

  const [editPassword, setEditPassword] = useState(false);
  const [customPassword, setCustomPassword] = useState(password);

  const verificationEditCell = (setValue) => {
    setEditName(false);
    setEditLastName(false);
    setEditSurName(false);
    setEditLastName(false);
    setEditPosition(false);
    setEditLogin(false);
    setEditPhone(false);
    setEditPassword(false);

    setIsEditCell(id);
    setValue(true);
  };

  useEffect(() => {
    if (isEditCell !== id) {
      setEditName(false);
      setEditLastName(false);
      setEditSurName(false);
      setEditLastName(false);
      setEditPosition(false);
      setEditLogin(false);
      setEditPhone(false);
      setEditPassword(false);
    }
  }, [isEditCell]);

  const handleEdit = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleSave = (e, setValue, currentValue, baseValue) => {
    if (e.code === 'Enter') {
      if (!editName
        || !editLastName
        || !editSurName
        || !editPosition
        || !editLogin
        || !editPhone
        || !editPassword) {
        setValue(currentValue);
        copyArr = copyArr.map((item) => {
          if (item.id === id) {
            let copyItem = item;
            copyItem = {
              id,
              name: customName,
              lastName: customLastName,
              surName: customSurName,
              position: customPosition,
              phone: customPhone,
              login: customLogin,
              password: customPassword,
            };
            setCurrentUser(copyItem);
            return copyItem;
          }
          return item;
        });
        setArrUsers(copyArr);
        localStorage.setItem('data', JSON.stringify(copyArr));
      }
      setIsEditCell(0);
    }

    if (e.code === 'Escape') {
      setValue(baseValue);
      setIsEditCell(0);
    }
  };

  useEffect(() => {
    setArrUsers(copyArr);
  }, arrUsers);
  return (
    <>
      <div className="bodyItem bodyNameItem" onDoubleClick={() => { verificationEditCell(setEditName); }}>
        {editName
          ? (
            <input
              autoFocus
              value={customName}
              onChange={(e) => handleEdit(e, setCustomName)}
              onKeyDown={(e) => handleSave(e, setCustomName, customName, name)}
            />
          ) : customName}
      </div>
      <div className="bodyItem bodyEmailItem" onDoubleClick={() => { verificationEditCell(setEditLastName); }}>
        {editLastName
          ? (
            <input
              autoFocus
              value={customLastName}
              onChange={(e) => handleEdit(e, setLastName)}
              onKeyDown={(e) => handleSave(e, setLastName, customLastName, lastName)}
            />
          ) : customLastName}
      </div>
      <div className="bodyItem bodyEmailItem" onDoubleClick={() => { verificationEditCell(setEditSurName); }}>
        {editSurName
          ? (
            <input
              autoFocus
              value={customSurName}
              onChange={(e) => handleEdit(e, setSurName)}
              onKeyDown={(e) => handleSave(e, setSurName, customSurName, surName)}
            />
          ) : customSurName}
      </div>
      <div className="bodyItem bodyEmailItem" onDoubleClick={() => { verificationEditCell(setEditPosition); }}>
        {editPosition
          ? (
            <input
              autoFocus
              value={customPosition}
              onChange={(e) => handleEdit(e, setPosition)}
              onKeyDown={(e) => handleSave(e, setPosition, customPosition, position)}
            />
          ) : customPosition}
      </div>
      <div className="bodyItem bodyPhoneItem" onDoubleClick={() => { verificationEditCell(setEditPhone); }}>
        {editPhone
          ? (

            <input
              autoFocus
              value={customPhone}
              onChange={(e) => handleEdit(e, setCustomPhone)}
              onKeyDown={(e) => handleSave(e, setCustomPhone, customPhone, phone)}
            />
          ) : customPhone}
      </div>
      <div className="bodyItem bodyEmailItem" onDoubleClick={() => { verificationEditCell(setEditLogin); }}>
        {editLogin
          ? (
            <input
              autoFocus
              value={customLogin}
              onChange={(e) => handleEdit(e, setCustomLogin)}
              onKeyDown={(e) => handleSave(e, setCustomLogin, customLogin, login)}
            />
          ) : customLogin}
      </div>
      <div className="bodyItem bodyWebsiteItem" onDoubleClick={() => { verificationEditCell(setEditPassword); }}>
        {editPassword
          ? (
            <input
              autoFocus
              value={customPassword}
              onChange={(e) => handleEdit(e, setCustomPassword)}
              onKeyDown={(e) => handleSave(e, setCustomPassword, customPassword, password)}
            />
          ) : customPassword}
      </div>
    </>
  );
};

User.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  surName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isEditCell: PropTypes.string.isRequired,
  setIsEditCell: PropTypes.func.isRequired,
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
