import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';


function App() {
 const [name, setName] = useState("");
 const [number, setNumber] = useState("");
 const [isHidden, setIsHidden] = useState(false);
 const [inputValue, setInputValue] = useState('');
 const [error, setError] = useState('');


 const handleInputChange = (e) => {
  const value = e.target.value;
  setInputValue(value);
  setNumber(value);

  
  if (value.trim() === '') {
    setError('Input cannot be empty.');
  } else {
    setError('');
  }
};
 const handleConfirmClick = () => {
  setIsHidden(true);
 };

  return (
    <div className="cont">
      <div className="container">
        <Display/>
        
        <Form
        isHidden={isHidden}
        handleConfirmClick={handleConfirmClick}
        setIsHidden={setIsHidden}
        error={error}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        setError={setError}
        number={number}
        />
      </div>
    </div>
  );
}

export default App;
