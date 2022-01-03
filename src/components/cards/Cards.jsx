import React from 'react'

import Card from './Card'
import './cards.css'

const Cards = ({ items, subItem }) => {

  return (
      <>
        {subItem}
        <div className="cards__wrapper split">
          {items && items.map((item, index) => (
            <Card 
            key={item.src + index}
            src={item.src}
            title={item.title}
            additionalClass={item.additionalClass} 
            to={item.to}
            desc={item.desc} />
          ))}

        </div>
      </>
  )
}

export default Cards;