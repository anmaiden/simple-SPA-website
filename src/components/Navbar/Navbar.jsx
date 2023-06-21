import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './Navbar.css';

import Home from "../Home/Home";
import About from "../About/About";
import Contacts from '../Contacts/Contacts';

function Navbar() {
  return (
    <Router> 
      <div className='navbar-container'>
        <nav>
          <h4><Link to="/">Demo: simple SPA website React</Link></h4>
          <ul className='nav-links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </nav>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default Navbar