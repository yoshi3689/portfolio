import React from 'react'
// import { Link } from 'react-router-dom'
import Button from '../button/Button'
import "./cards.css"

const Card = ({ src, title, desc, link, additionalClass }) => {
  return (
    <div className={`cards__card${additionalClass ? " " + additionalClass : ""}`} >
      <img src={src} alt={src} className="cards__card__img" />
      <div className="cards__card__body">
        <h4 className="cards__card__title">{title}</h4>
        <p className="cards__card__details">{desc}</p>
        <Button element="a" link={link} type="outline" size="large" innertext="See Details" />
      </div>
    </div>
  )
}

export default Card
