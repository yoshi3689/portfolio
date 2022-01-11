import React from 'react';

import SlideShow from '../slideShow/SlideShow';

import "./portfolio.css"
import Cards from '../cards/Cards';

const Portfolio = ({ path, titleTxt, portfolioItems }) => {
  return (
    <section className="portfolio">
      <div className="container spacer">
      <h2 className='txt--title' >{titleTxt}</h2>
      {path === "/"
      ? (
        <SlideShow items={portfolioItems} />
      )
      : (
        <Cards items={portfolioItems} />
      )
    }
        </div>
      </section>
  )
}

export default Portfolio
