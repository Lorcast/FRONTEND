import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/electron-vite.animate.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login.jsx';
import Cadastro from './Pages/Cadastro/Cadastro.jsx';
import Dashboard from './Pages/Dashboard.jsx';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    </Router>
   
  );
}

export default App
