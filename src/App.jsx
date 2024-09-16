import './App.css'
import Navbar from './Components/Navbar'

/* eslint-disable no-unused-vars */
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
// import ProductsPage from './Component/Pages/ProductsPage';
// import AboutPage from './Component/Pages/AboutPage';
// import ContactPage from './Component/Pages/ContactPage';

function App() {

  return (
    <>
<Router>
    <div>
      <Navbar />
      <div className="pt-24">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/products" element={<ProductsPage />} /> */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
      </div>
    </div>
  </Router>
    </>
  )
}

export default App
