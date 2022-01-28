import { BrowserRouter as Router, Routes, Route, useMatch } from 'react-router-dom';
import React from 'react';
import Header from './Components/Header';
import Home from './Routes/Home';
import Tv from './Routes/Tv';
import Search from './Routes/Search';
import './App.css';
import {  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  )
}

export default App;
