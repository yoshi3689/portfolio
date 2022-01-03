import React from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

export default function DropDown({ flag }) {
  return (
    <ul className="dropdown">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>

    </ul>
  );
}
