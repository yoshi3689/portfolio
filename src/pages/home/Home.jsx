import React from 'react'
import Hero from '../../components/hero/Hero'
import Portfolio from '../../components/portfolio/Portfolio'
import { HERO_HOME_CONTENTS } from '../projects/constants'
import { FEATURED_PROJECT } from '../projects/constants'

const Home = () => {
  return (
    <main>
      <Hero startSmallTxt={HERO_HOME_CONTENTS.startSmallTxt} startBigTxt={HERO_HOME_CONTENTS.startBigTxt} img={HERO_HOME_CONTENTS.img} imgLink={HERO_HOME_CONTENTS.imgLink} bottomLeading ={HERO_HOME_CONTENTS.bottomLeading} bottomHighlight={HERO_HOME_CONTENTS.bottomHighlight} bottomContents={HERO_HOME_CONTENTS.bottomContents} />
      <Portfolio path="/" titleTxt="Featured Project" portfolioItems={FEATURED_PROJECT} />
    </main>
  )
}

export default Home
