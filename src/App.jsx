import logo from './logo.svg';
import './App.css';
import Todo from './components/TODO.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';
import Counter from './components/Counter.jsx'
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Nav from "./components/nav.jsx";
import Users from "./components/pages/Users";
function App() {
  
  return (
    <div>
      <Router>
        <Nav/>
          
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:username" element={<Users/>} />
        </Routes>
      </Router>

      
    </div>
  );
} 
export default App;