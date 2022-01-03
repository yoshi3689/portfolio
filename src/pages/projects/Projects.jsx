import React from 'react'
import Portfolio from '../../components/portfolio/Portfolio'
import { PROJECTS } from './constants'
import { portfolioItems } from '../../config/config';

const Projects = () => {
  return (
    <div>
      <main className='projects'>
      <Portfolio path={"/projects"} portfolioItems={PROJECTS} />
    </main>
    </div>
  )
}

export default Projects