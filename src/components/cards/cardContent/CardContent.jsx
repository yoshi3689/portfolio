import React from 'react'
import "./cardContent.css"

const CardContent = ({ content }) => {
  return (
    <div className='card__content'>
      {content.map(contentItem => {
        console.log(contentItem)
        return contentItem && (
          <div key={contentItem.label} className='card__content__item'>
            {contentItem.label && (<label>{contentItem.label + ": " }</label>)}
            <span className='card__content__itemC'>{contentItem.items.map((item, index) => (<span key={item + index}>{item}</span>))}</span>
          </div>
        )})}
    </div>
  )
}

export default CardContent
