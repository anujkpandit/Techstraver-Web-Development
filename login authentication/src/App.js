// src/App.js
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginButton from './LoginButton';
import Success from './Success';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login Authentication</h1>
        <Routes>
          <Route path="/" element={<LoginButton />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
