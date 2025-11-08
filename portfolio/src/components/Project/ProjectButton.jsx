import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectButton = ({ status, projectId }) => {
    const navigate = useNavigate()

const handleViewProject = () => {
    if (status === 'live') {
      // Navigate to the live project page
      navigate(`/projects/${projectId}`)
    } else {

      navigate(`/projects/${projectId}`)
    
    }
  }

    return (
        <>

            {/* Desktop Conditional Button */}
            {status === "live" ? (
                <button
                    onClick={handleViewProject}
                    className="px-5 py-2 hidden md:block border
                                       border-black dark:border-slate-400  rounded-full text-sm 
                                       font-medium hover:bg-black hover:text-white transition">
                    View Project
                </button>
            ) : (
                <button 
                  onClick={handleViewProject}
                  className="px-5 py-2 hidden md:block border border-gray-400 rounded-full text-sm font-medium text-gray-400 ">
                    Future Project 
                </button>
            )}

            {/* Conditional Button for mobile bage button */}
            {status === "live" ? (
                <button
                    onClick={handleViewProject}
                    className="px-4 py-2  max-[350px]:hidden  md:hidden border
                                       border-black dark:border-slate-400 rounded-full text-sm 
                                       font-medium hover:bg-black  hover:text-white transition
                                       absolute top-6 right-4
                                       ">
                    View Project
                </button>
            ) : (
                <button 
                onClick={handleViewProject}
                className="px-4 py-2  max-[350px]:hidden  md:hidden border
                                             border-gray-400 rounded-full text-sm 
                                             font-medium text-gray-400 
                                             absolute top-6 right-4
                                             ">
                    Future Project
                </button>
            )}

        </>
    )
}

export default ProjectButton