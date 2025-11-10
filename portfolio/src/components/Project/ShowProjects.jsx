import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HiSparkles } from "react-icons/hi2";
import { FaTools, FaCheckCircle } from "react-icons/fa";
import ShowMechanical from "./ShowMechanical.jsx";


const ShowProjects = ({ projects }) => {

  const location = useLocation();
  const { projectId } = useParams();

  const project = projects.find(proj => proj.id === projectId);

    // Scroll to top when component mounts or projectId changes
  useEffect(() => {
     window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // <-- makes it scroll smoothly
  });
  }, [projectId, location.pathname]);


  if (!project) {
    return (
      <div className="min-h-screen bg-black bg-opacity-90 flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-cyan-400 text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="text-gray-300">The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  if (project.type === "mechanical") {
    return <ShowMechanical project={project} />;
  }


  return (
    <div className="min-h-screen flex items-center justify-center  mt-24 md:mt-18  ">



      <div className=" flex flex-col md:flex-row  px-4  ">

        {/* Image + Description Layout */}

        <div className="flex  justify-center items-center md:mr-10 md:ml-5 mb-6 max-w-[650px] h-full">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-auto rounded-lg border  "
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/400x250/0a0a0a/00ff00?text=${encodeURIComponent(project.name)}`;
            }}
          />
        </div>


        <div className="flex-1">
          <div className="mb-6 ">
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">
                {project.name}
              </h3>
            </div>
            <div className="text-text-secondary leading-relaxed">
              {project.description}
            </div>
          </div>



          {/* Technologies Section */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-6">
              <h4 className="text-cyan-400 text-lg mb-4 flex items-center gap-2">
                <FaTools className="text-cyan-400 text-xl" />
                Built With:
              </h4>
              <div className="flex flex-wrap gap-4">
                {project.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="border border-green-400 border-opacity-25 rounded-lg p-3 text-center w-28 bg-bg-tertiary transition-transform duration-300 hover:-translate-y-1 hover:border-green-400"
                    style={{ borderColor: `${tech.color}40` }}
                  >
                    <div
                      className="flex justify-center items-center h-14"
                      style={{ backgroundColor: `${tech.color}20` }}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/40/0a0a0a/00ff00?text=${tech.name.charAt(0)}`;
                        }}
                        style={{ filter: `drop-shadow(0 0 8px ${tech.color}80)` }}
                      />
                    </div>
                    <span
                      className="block mt-2 text-sm"
                      style={{ color: tech.color }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Section */}
          {project.features && project.features.length > 0 && (
            <div className="mt-6">
              <h4 className="text-cyan-300 mb-3 flex items-center gap-2">
                <HiSparkles className="text-cyan-400 text-xl" />
                Key Features:
              </h4>
              <div className="flex flex-wrap gap-3 gap-x-6 ml-2">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-text-secondary ">
                    <FaCheckCircle className=" mr-2 text-sm" />
                    <span>{feature}</span>
                  </div >
                ))}
              </div>
            </div>
          )}

          {/* Links Section */}
          <div className="mt-7 flex gap-4 flex-wrap">
            {project.github && project.status === "live" && (
              <a
                href={project.github}
                className="flex items-center gap-2 px-4 py-2 border border-cyan-400 border-opacity-25 rounded-lg text-cyan-400 no-underline transition-all duration-300 hover:bg-cyan-200 hover:bg-opacity-10 hover:-translate-y-0.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Code</span>
              </a>
            )}
            {project.liveDemo && project.status === "live" && (
              <a
                href={project.liveDemo}
                className="flex items-center gap-2 px-4 py-2 border border-cyan-400 border-opacity-25 rounded-lg text-cyan-400 no-underline transition-all duration-300 hover:bg-cyan-200 hover:bg-opacity-10 hover:-translate-y-0.5"
                target="_blank"
                rel="noopener noreferrer"
              >

                <span>Live Demo</span>
              </a>
            )}
            {project.status === "future" && (
              <div className="flex items-center gap-2 px-4 py-2 border border-yellow-400 border-opacity-25 rounded-lg text-yellow-400">
                <span>Coming Soon</span>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>


  );
};

export default ShowProjects;