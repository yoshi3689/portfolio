import React, { useRef, useState, useEffect } from "react";
import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { GrMail } from "react-icons/gr"
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import Dropdown from "../dropdown/Dropdown";
import useCheckMobile from "../../hooks/useCheckMobile";
import "./nav.css";

const NavBar = () => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  let isMobile = useCheckMobile();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, setIsOpen]);

  useEffect(() => {
    const toggleNav = () => {
      setIsOpen(!isOpen);
    }
    const handleClicks = (e) => {
      let isOutside = (navRef.current && !navRef.current.contains(e.target));
      if (isOutside && isMobile) {
        setIsOpen(!isOutside);
      } else if(!isOutside && isMobile && (e.target.classList.contains("nav__hamburger") || e.target.parentElement.classList.contains("nav__hamburger"))) {
        toggleNav();
      } 
        
    }
    document.addEventListener(`click`, handleClicks);
    return () => {
      document.removeEventListener(`click`,handleClicks);
    }
  }, [navRef, isOpen, isMobile]);

  return (
    <nav ref={navRef} className={"nav" + (isOpen ? " toggled" : "")}>
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
        <Dropdown isMobile={isMobile} isOpen={isOpen} />

        <div className="nav__right">
        <div className="nav__icons">
            <a href="https://www.linkedin.com/in/yoshiyuki-nagai-14734918a/" >
              <FaLinkedin className="nav__icons__icon item" />
            </a>
            <a href="https://www.linkedin.com/in/yoshiyuki-nagai-14734918a/" >
              <FaGithub className="nav__icons__icon item" />
            </a>
          </div>
          {isMobile && 
            (
              <div className="nav__hamburger item" >
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
            )
          }
        </div>
      </div>
    </nav>
  );
}

export default NavBar;