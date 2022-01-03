import React from 'react'
import Hero from '../../components/hero/Hero'
import Portfolio from '../../components/portfolio/Portfolio'
import { PROJECTS } from '../projects/constants'

const Home = () => {
  return (
    <main>
      <Hero />
      <Portfolio path="/" additionalTxt="Featured " portfolioItems={PROJECTS} />
    </main>
  )
}

export default Home
