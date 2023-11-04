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
        />
      </div>
    </div>
  );
}

export default App;
