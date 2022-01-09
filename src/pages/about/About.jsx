import React from 'react'
import "./about.css"
import Hero from "../../components/hero/Hero";
import { HERO_ABOUT_CONTENTS } from '../projects/constants';

const About = () => {
  return (
    <div className='about'>
      <Hero startSmallTxt={HERO_ABOUT_CONTENTS.startSmallTxt} startBigTxt={HERO_ABOUT_CONTENTS.startBigTxt} img={HERO_ABOUT_CONTENTS.img} imgLink={HERO_ABOUT_CONTENTS.imgLink} bottomLeading ={HERO_ABOUT_CONTENTS.bottomLeading} bottomHighlight={HERO_ABOUT_CONTENTS.bottomHighlight} bottomContents={HERO_ABOUT_CONTENTS.bottomContents} />
    </div>
  )
}

export default About