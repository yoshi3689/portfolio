import React from 'react'
import Hero from '../../components/hero/Hero'
import Portfolio from '../../components/portfolio/Portfolio'

const Home = () => {
  return (
    <main>
      <Hero />
      <Portfolio path="/" additionalTxt="Featured " />
    </main>
  )
}

export default Home
