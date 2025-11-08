import React from 'react'


const SkillsCard = ({ title, skills, gradient }) => {
  return (
    <>
  <div className={`flex-1 text-xs h-auto bg-gradient-to-b ${gradient} to-transparent rounded-md px-4 mb-3 border-1 border-skill-border pb-6`}>
    <h2 className="h-15 flex items-center justify-center text-center font-bold text-black leading-snug">{title}</h2>
    <div className="flex flex-col gap-0.5 mt-2">
      {skills.map((skill, i) => (
        <p key={i} className="flex items-center">
          <span className="w-2 h-2 bg-gray-500 rounded-full inline-block mr-2"></span>{skill}
        </p>
      ))}
    </div>
  </div>


    </>
  )
}

export default SkillsCard