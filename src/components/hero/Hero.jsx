import React from "react";
import "./hero.css";
import Button from "../button/Button";

export default function Hero() {
  return (
    <header className="hero">
      <div className="container">
      <p className="hero__desc hero__desc--start">
            I am the
            <span className="txt--primary">avocado web-dev</span>
        </p>
        <a href="/about" className="hero__profile">
          <img
            className="hero__profile__pic"
            src="/img/profile_placeholder.jpg"
            alt="Yoshi"
          />
        </a>
        <p className="hero__desc hero__desc--end txt--body">
          Hi! I am Yoshiyuki Nagai. 
          <span>
            I care about people's attention span.
          </span>
          <Button element="Link" link="/about" type="outline" size="large" innertext="contact" />
        </p>
      </div>
    </header>
  );
}
