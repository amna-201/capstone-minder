import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GetStarted from './Components/GetStarted';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} /> 
      </Routes>
    </div>
  );
}

export default App;
