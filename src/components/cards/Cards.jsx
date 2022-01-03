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
              content={[item.dates, item.duration, item.techStacks, item.description,  ]} 
              links={item.links}
            />
          ))}

        </div>
      </>
  )
}

export default Cards;