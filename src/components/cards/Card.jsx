import React from 'react'
// import { Link } from 'react-router-dom'
import Button from '../button/Button'
import CardContent from "./cardContent/CardContent"
import "./cards.css"

const Card = ({ src, title, content, links, additionalClass }) => {
  return (
    <div className={`card${additionalClass ? " " + additionalClass : ""}`} >
      <img src={src} alt={src} className="card__img" />
      <div className="card__body">
        <h4 className="card__title">{title}</h4>
        <CardContent content={content} />
        <div className='card__actions'>
          <Button element="a" type="outline" size="large" link={links[0]} innertext={"Github"} />
          <Button element="a" type="outline" size="large" link={links[1]} innertext={"Try"} />
        </div>
      </div>
    </div>
  )
}

export default Card
