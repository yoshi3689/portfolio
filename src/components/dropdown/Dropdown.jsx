import React from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

export default function DropDown({ flag }) {
  return (
    <ul className="dropdown">
      <li>
        <Link className="item" to="/">Home</Link>
      </li>
      <li>
        <Link className="item" to="/about">About</Link>
      </li>
      <li>
        <Link className="item" to="/projects">Projects</Link>
      </li>
      <li>
        <Link className="item" to="/contact">Contact</Link>
      </li>

    </ul>
  );
}
