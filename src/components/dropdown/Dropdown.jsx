import React from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

const DropDown = ({ isMobile }) => {
  return (
    <ul className={`dropdown ${!isMobile && "desktop"}`}>
      <li>
        <Link className="item" to="/">Home</Link>
      </li>
      <li>
        <Link className="item" to="/projects">Projects</Link>
      </li>
      <li>
        <Link className="item" to="/about">About</Link>
      </li>

    </ul>
  );
}

export default DropDown;