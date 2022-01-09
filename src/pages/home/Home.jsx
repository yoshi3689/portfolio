import React from 'react'
import Hero from '../../components/hero/Hero'
import Portfolio from '../../components/portfolio/Portfolio'
import { PROJECTS } from '../projects/constants'

import Button from '../../components/button/Button'

const scrollToBottom = () => {
  console.log(document.body.scrollHeight);
  window.scrollTo(0, document.body.scrollHeight);
}
const copyToClipboard = (e) => {
  const messageToDisplay = document.createElement("div");
  messageToDisplay.classList.add("alert");
  messageToDisplay.classList.add("disappear");
  console.log(e.target.innerText);
  navigator.clipboard.writeText(e.target.innerText)
  .then(() => messageToDisplay.innerHTML = "successfully copied to clipboard!")
  .catch(err => messageToDisplay.innerHTML = err);

  e.target.parentElement.appendChild(messageToDisplay);
}
const HERO_HOME_CONTENTS = { 
  startSmallTxt: "My name is",
  startBigTxt: "Yoshiyuki Nagai",
  img: "/img/profile_pic.jpeg",
  bottomHighlight: "",
  bottomContents: [
    <>I am a term 2 CST student at BCIT with experience with React.</>,
    <>Feel free to look at my projects on the <Button element="Link" link="/projects" type="text" size="small" position="space-right" innertext={"portfolio page"}/> or <Button element="" onClick={scrollToBottom} type="text" size="small" position="space-right" innertext={"here."}/></> ,
    <>Please contact me at <Button element="button" onClick={copyToClipboard} type="text" size="small" position="space-right" innertext={"yoshiyukinagai7@gmail.com"}/></>,
    // <>My bio is on the <Button element="Link" link="/projects" type="text" size="small" position="space-right" innertext={"about page"}/></>  
] 
};

const Home = () => {
  return (
    <main>
      <Hero startSmallTxt={HERO_HOME_CONTENTS.startSmallTxt} startBigTxt={HERO_HOME_CONTENTS.startBigTxt} img={HERO_HOME_CONTENTS.img} bottomLeading ={HERO_HOME_CONTENTS.bottomLeading} bottomHighlight={HERO_HOME_CONTENTS.bottomHighlight} bottomContents={HERO_HOME_CONTENTS.bottomContents} />
      <Portfolio path="/" additionalTxt="Featured " portfolioItems={PROJECTS} />
    </main>
  )
}

export default Home
