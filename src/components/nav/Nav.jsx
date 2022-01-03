import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { GrMail } from "react-icons/gr"
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import Dropdown from "../dropdown/Dropdown";
import "./nav.css";

export default function NavBar({ flag, setIsOpen }) {
  const toggleNav = (e) => {
    console.log(e);
    setIsOpen(!flag);
  }

  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, setIsOpen])
  return (
    <nav className={"nav" + (flag ? " toggled" : "")}>
      <div className="container">
        <div className="nav__left">
        <Link to="/" className="nav__logo">
          Yoshi
          {/* <img src="./" alt="logo to be inserted" /> */}
        </Link>
        <div className="nav__email">
          <GrMail className="nav__icons__icon" />
          <span>yoshiyukinagai7@gmail.com</span>
        </div>
        </div>
        <Dropdown flag={flag} />

        <div className="nav__right">
          <div className="nav__icons">
            <a href="https://www.linkedin.com/in/yoshiyuki-nagai-14734918a/" >
              <FaLinkedin className="nav__icons__icon" />
            </a>
            <a href="https://www.linkedin.com/in/yoshiyuki-nagai-14734918a/" >
              <FaGithub className="nav__icons__icon" />
            </a>
          </div>

          <div className="nav__hamburger" onClick={toggleNav}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
