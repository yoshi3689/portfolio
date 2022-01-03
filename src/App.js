import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import { Home, Projects, About, Contact } from "./pages/index"
import './app.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  // closes the navigation on clicking something else 
  // the below code is problematic because it prevents from opening the nav 
  // when the 
  const closeNav = (e) => {
    if (isOpen && (e.target.classList.contains("nav__hamburger") && e.target.parent.classList.contains("nav__hamburger"))) {
      setIsOpen(false);
    }
  }
  document.addEventListener("click", closeNav);

  return (
    <>
    <Router>
      <Nav flag={isOpen} setIsOpen={setIsOpen} />
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
