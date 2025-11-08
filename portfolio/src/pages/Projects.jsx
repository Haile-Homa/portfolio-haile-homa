import React from 'react'
import ProjectIntro from "../components/Project/ProjectIntro";
import ProjectList from "../components/Project/ProjectList";



const Projects = () => {


  return (
    /* i set the bottom margins to look good margin mb-10 */
    <div className=' text-sm  md:pl-6 md:px-10 pb-7   mt-5  mb-10  pt-5'
      style={{
        background: 'var(  --gradient-portfolio-primary)'
      }}
    >
      <ProjectIntro />
      <ProjectList />
    </div>
  )
}

export default Projects
