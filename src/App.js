
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = (cls) => {
    console.log('primary')
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enable", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(()=>
      // {
      //   document.title= "TextUtils is Amazing Mode";
      // },2000)
      // setInterval(()=>
      // {
      //   document.title= "Install TextUtils Now";
      // },1500)
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      // document.title = "TextUtils - Light Mode"
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar /> */}
        <Routes >
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />} />
        </Routes >
      </Router>
    </>
  );
}

export default App;
