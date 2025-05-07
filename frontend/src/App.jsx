import React from 'react';
import './index.css';
import Home from './Home/Home';
import About from './About/About';
import Services from './Service/Services';
import Contact from './Contact/contact';
import { Routes, Route } from 'react-router-dom';
import Navbar from './reUsedComponents/Navbar';
import Footer from './reUsedComponents/Footer';


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;