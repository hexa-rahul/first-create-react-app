
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null)
    },2000)
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#cccccc';
      showAlert('Dark mode has been enabled', 'success');
      
      setInterval(() => {
        document.title = 'App - Update';  
      }, 3000);
    }else{
      setMode('light');
      document.body.style.backgroundColor = '#808080';
      showAlert('Light mode has been enabled', 'danger');
      
      setInterval(() => {
        document.title = 'App - Install &';  
      }, 1500);
    }
  } 
  return (
    <>
    <BrowserRouter>
      <Navbar title="ReactJs Header" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
          <Route exact path="/" element={<TextForm title="Enter Message What You Want?" mode={mode} />} />
          <Route exact path="/about" element={<About />} />  
          
        </Routes>
    </BrowserRouter>  

    
    </>
  );
}

export default App;
