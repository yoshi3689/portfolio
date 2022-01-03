import React from 'react'
import './footer.css'
// import Menu from '../Menu/Menu'
// import { FOOTER_MENU, SOCIAL_LINKS } from '../constants'

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="container split spacer">
        <div className="menu__container">
          <h4>Follow Us</h4>
          <Menu menuClass='social-links' items={SOCIAL_LINKS} />
        </div>
        <div className="menu__container">
          <h4>Useful Links</h4>
          <Menu menuClass='menu spacer' itemClass="menu__item" items={FOOTER_MENU} />
        </div>
        <div className="menu__container">
          <h4>Follow Us</h4>
          <Menu menuClass='social-links' items={SOCIAL_LINKS} />
        </div>
        <div className="menu__container">
          <h4>Useful Links</h4>
          <Menu menuClass='menu spacer' itemClass="menu__item" items={FOOTER_MENU} />
        </div>
      </div>  */}
      <div className="copy-right">
        <small className="copy-right__name">Yoshiyuki Nagai</small>
      </div>
  </footer>
  )
}

export default Footer
