import React from 'react'
import "./about.css"
import Hero from "../../components/hero/Hero";
// import Button from '../../components/button/Button';

const ABOUT_HOME_CONTENTS = { 
  startSmallTxt: "It's me, ",
  startBigTxt: <>Yoshi<small>(yuki)</small></>,
  img: "/img/profile_pic.jpeg",
  bottomContents: [
    <>I am from Japan, came to Canada 6 months ago. </>,
    <>My main tech stack is React. I also have built projects with other technologies. </>,
    <>My programing journey started after watching "Social Dilemma".</>,
    // <>Please contact me at <Button element="button" type="text" size="small" position="space-right" innertext={"yoshiyukinagai7@gmail.com"}/></>,
    <>Interests: podcasts, craft beer, climbing</>,
    // <>My bio is on the <Button element="Link" link="/projects" type="text" size="small" position="space-right" innertext={"about page"}/></>  
] 
}
const About = () => {
  return (
    <div>
      <Hero startSmallTxt={ABOUT_HOME_CONTENTS.startSmallTxt} startBigTxt={ABOUT_HOME_CONTENTS.startBigTxt} img={ABOUT_HOME_CONTENTS.img} bottomLeading ={ABOUT_HOME_CONTENTS.bottomLeading} bottomHighlight={ABOUT_HOME_CONTENTS.bottomHighlight} bottomContents={ABOUT_HOME_CONTENTS.bottomContents} />

    </div>
  )
}

export default About