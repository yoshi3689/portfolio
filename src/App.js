import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import { Home, Projects, About, Contact } from "./pages/index"
import './app.css';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
