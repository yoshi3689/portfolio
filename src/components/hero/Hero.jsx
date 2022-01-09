import React from "react";
import { Link } from "react-router-dom"
import "./hero.css";

const Hero = ({ startSmallTxt, startBigTxt, img, bottomLeading ,bottomHighlight, bottomContents }) => {
  
  return (
    <header className="hero">
      <div className="container">
        <div className="hero__content">
        <p className="hero__desc hero__desc--start">
            {startSmallTxt}
            <span className="txt--primary">{startBigTxt}</span>
        </p>
        <Link to="/about" className="hero__profile">
          <img
            className="hero__profile__pic"
            src={img}
            alt="Yoshi"
          />
        </Link>
        <p className="hero__desc hero__desc--end txt--body">
          {bottomContents.map(item => (
            <span className="hero__desc__item" >{item} </span>
          ))}
        </p>
        </div>
      </div>
    </header>
  );
}

export default Hero;