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

 const handleInputChange1 = (e) => {
  setInputValue(e.target.value);
};

const handleInputChange2 = (e) => {
  setNumber(e.target.value);
  
};


 const handleInputChange = (e) => {
  const value = e.target.value;
 
  

  if (value === inputValue) {
    setInputValue('');
  }
  

  
  if (value.trim() === '') {
    setError('Input cannot be empty.');
  } else {
    setError('');
  }
};
 const handleConfirmClick = (e) => {
  setIsHidden(true);
  e.preventDefault()
  
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
        handleInputChange1={handleInputChange1}
        handleInputChange2={handleInputChange2}
        />
      </div>
    </div>
  );
}

export default App;
