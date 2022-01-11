import React from 'react'
import "./modal.css"
const Modal = ({ isClicked, src }) => {
  return (
    <div className={`modal ${isClicked ? "-active" : ""}`}>
      <img src='src' alt={src} className='modal__img' />
      Hellloooo
    </div>
  )

}

export default Modal
