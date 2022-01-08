import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { GrMail } from "react-icons/gr"
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import Dropdown from "../dropdown/Dropdown";
import "./nav.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const closeNav = (e) => {
    if (isOpen && (e.target.classList.contains("nav__hamburger") && e.target.parent.classList.contains("nav__hamburger"))) {
      setIsOpen(false);
    }
  }
  document.addEventListener("click", closeNav);

  const toggleNav = (e) => {
    console.log(e);
    setIsOpen(!isOpen);
  }

  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, setIsOpen]);


  return (
    <nav className={"nav" + (isOpen ? " toggled" : "")}>
      <div className="container">
        <div className="nav__left">
        <Link to="/" className="nav__logo item">
          Yoshi
        </Link>
        <div className="nav__email">
          <GrMail className="nav__icons__icon" />
          <span>yoshiyukinagai7@gmail.com</span>
        </div>
        </div>
        <Dropdown isOpen={isOpen} />

        <div className="nav__right">
        <div className="nav__icons">
            <a href="https://www.linkedin.com/in/yoshiyuki-nagai-14734918a/" >
              <FaLinkedin className="nav__icons__icon item" />
            </a>
            <a href="https://www.linkedin.com/in/yoshiyuki-nagai-14734918a/" >
              <FaGithub className="nav__icons__icon item" />
            </a>
          </div>

          <div className="nav__hamburger item" onClick={toggleNav}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
