import React from 'react'
import { Link } from 'react-router-dom'
import "./button.css"

const Button = ({ element, link, type, size, position, innerText, onClick }) => {
  let buttonToRender = "";
  const className = `btn btn__${type} btn__${position} btn--${size}`;
  switch (element) {
    case "a":
      buttonToRender = ( 
        <a onClick={onClick} href={link} className={className} >
          {innerText}
          </a> );
      break;
    case "Link":
      buttonToRender = ( 
        <Link onClick={onClick} to={link} className={className} >
          {innerText}
          </Link> );
      break;
    default:
      buttonToRender = ( 
        <button onClick={onClick} className={className} >
          {innerText}
          </button> );
      break;
  }
  return buttonToRender;
}

export default Button
