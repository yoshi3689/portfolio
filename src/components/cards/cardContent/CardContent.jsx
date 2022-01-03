import React from 'react'
import "./cardContent.css"

const CardContent = ({ content }) => {
  return (
    <div className='card__content'>
      {content.map(contentItem => (
        <div className='card__content__item'>
          {contentItem.label && (<label>{contentItem.label + ": " }</label>)}
          <span className='card__content__itemC'>{contentItem.items.map(item => (<span>{item}</span>))}</span>
        </div>
      ))}
    </div>
  )
}

export default CardContent
