import React, { useState } from "react";

const ShowMechanical = ({ project }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className=" mb-8">
          <h1 className="text-center text-3xl font-bold text-text-primary mb-4">
            {project.name}
          </h1>
          <p className="text-lg text-text-secondary">
            {project.description}
          </p>
        </div>


        {/* Media Section - Desktop Layout */}
        <div className="flex flex-col  gap-8 mb-8">

          {/* Left Side - Video (Larger) */}
          <div className="flex flex-col">
            {project.videoUrl && (
              <div className="md:p-4">
                <div className="relative pt-[50%] bg-black rounded-lg overflow-hidden">
                  <video
                    src={project.videoUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    controls
                  />
                </div>
                <p className="text-center text-text-secondary mt-2">Project Video</p>
              </div>
            )}
          </div>


          {/* Right Side - Images Grid */}
          <div className="w-full">
            {project.images && project.images.length > 0 && (
              <div className=" p-4">
                <h3 className="text-xl font-bold text-text-primary mb-4">Project Images</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.name} ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Technologies Section */}
        {project.technologies && (
          <div className=" border border-slate-300 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-text-primary mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-6 h-6"
                  />
                  <span className="text-text-secondary font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="border border-slate-300 rounded-lg shadow-lg">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("description")}
              className={`flex-1 py-4 font-medium ${activeTab === "description"
                ? "text-cyan-500 border-b-2 border-cyan-400"
                : "text-text-secondary"
                }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`flex-1 py-4 font-medium ${activeTab === "features"
                ? "text-cyan-500 border-b-2 border-cyan-400"
                : "text-text-secondary"
                }`}
            >
              Features
            </button>
          </div>

          <div className="p-6">
            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="prose max-w-none">
                {project.richDescription ? (
                  <div
                    className="text-text-secondary leading-8 rich-text"
                    dangerouslySetInnerHTML={{ __html: project.richDescription }} />
                ) : (
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                )}
              </div>
            )}

            {/* Features Tab */}
            {activeTab === "features" && project.features && (
              <div className="space-y-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                    <span className="text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>


      </div>
    </div>
  );
};

export default ShowMechanical;