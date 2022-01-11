import React from 'react'
import Portfolio from '../../components/portfolio/Portfolio'
import { PROJECTS } from './constants'

const Projects = () => {
  return (
      <main className='projects'>
        <Portfolio path={"/projects"} titleTxt={"Projects"} portfolioItems={PROJECTS} />
      </main>
  )
}

export default Projects