import React from "react";
import { Link } from "react-router-dom"
import "./hero.css";

const Hero = ({ startSmallTxt, startBigTxt, img, imgLink ,bottomLeading ,bottomHighlight, bottomContents }) => {
  
  return (
    <header className="hero">
      <div className="container">
        <div className="hero__content">
        <p className="hero__desc hero__desc--start">
            {startSmallTxt}
            <span className="txt--primary">{startBigTxt}</span>
        </p>
        <Link to={imgLink} className="hero__profile">
          <img
            className="hero__profile__pic"
            src={img}
            alt="Yoshi"
          />
        </Link>
        <p className="hero__desc hero__desc--end txt--body">
          {bottomContents.map((item, index) => (
            <span key={item + index} className="hero__desc__item" >{item} </span>
          ))}
        </p>
        </div>
      </div>
    </header>
  );
}

export default Hero;