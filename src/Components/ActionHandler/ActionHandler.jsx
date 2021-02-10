import React, { useState } from 'react';
import './styleActionHandler.scss';

export const ActionHandler = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputResult, setInputResult] = useState('');

  const showResult = () => {
    setInputResult(inputValue);
    setInputValue('');
  };

  return (
    <div className="actionHandler">
      <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="Enter the data" className="inputForm" />
      <input type="text" value={inputResult} placeholder="This is the output field" disabled className="inputForm inputForm--bc_green" />
      <button type="button" onClick={showResult} className="buttonExit"> Show result</button>
    </div>
  );
};
