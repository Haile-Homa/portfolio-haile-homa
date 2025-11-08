import React from 'react'
import ProjectButton from "./ProjectButton";


const ProjectItem = ({ project }) => {

    return (
        <div
            className=" mx-4  md:mx-auto  
                                flex flex-col  
                                border border-slate-400 
                                rounded-lg overflow-hidden shadow-sm 
                                hover:shadow-lg transition duration-300 
                              ">
            {/* Image Section */}
            <div className="overflow-hidden p-2  bg-bg-primary rounded-lg shadow flex-shrink-0">
                <img
                    src={project.imageUrl}
                    alt={project.alt}
                    className="w-full h-60 md:h-60  object-cover transition-transform duration-300 hover:scale-105 rounded-md"
                />
            </div>

            <div className=" relative p-6 md:px-5   flex flex-1 flex-col justify-center">

                <h2 className="text-2xl md:text-xl font-bold text-text-primary text-wrap mb-4 pt-1 pr-28 md:pr-0 w-full">
                    {project.name}
                </h2>

                <p className="text-text-secondary text-start mt-1 md:mt-0 md:mb-6 line-clamp-4">{project.description}</p>

                <ProjectButton status={project.status} projectId={project.id} />
            </div>

        </div>
    )
}

export default ProjectItem