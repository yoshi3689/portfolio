import React from 'react'
import { Link } from 'react-router-dom'
import "./button.css"

const Button = ({ element, link, type, size, innertext }) => {
  let buttonToRender = "";
  switch (element) {
    case "a":
      buttonToRender = ( 
        <a href={link} className={`btn__${type} btn--${size}`} >
          {innertext}
          </a> );
      break;
    case "Link":
      buttonToRender = ( 
        <Link to={link} className={`btn__${type} btn--${size}`} >
          {innertext}
          </Link> );
      break;
    default:
      buttonToRender = ( 
        <button className={`btn__${type} btn--${size}`} >
          {innertext}
          </button> );
      break;
  }
  return buttonToRender;
}

export default Button
