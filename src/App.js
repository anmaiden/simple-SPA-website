import React from "react";

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import  { Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
