import React from 'react'
import "./porfolioItem.css"
export const PortfolioItem = ({ link, img, title, desc }) => {
  return (
    <div className='portfolio__item'>
      <a href={link} className='portfolio__item__link' >
        <img src={img} alt={title} />
        <div className="portfolio__item_text">
        <h3>{title}</h3>
        <span>{desc}</span>
      </div>
      </a>
    </div>
  )
}
