import React from 'react'

const ProjectBox = ({ projectURL, projectTitle, projectDesc }) => {
  return (
    <div>
        <div className="border border-white/20 rounded-xl absolute transition duration-300 hover:scale-110">
            <div className="px-4 py-3">
                <div className="flex items-center"> {/* PROJECT IMAGE CONTAINER */}
                    <img src={`${ projectURL }`} alt="Project Image" className="h-35 rounded-lg" />
                </div>
                <div 
                className="flex items-center text-left grid grid-rows-2 max-w-xs mt-2"> {/* PROJECT INFORMATION CONTAINER */}
                    <p className="" style={{ fontFamily: 'NeometricAltMedium' }}>{ projectTitle }</p>
                    <p className="" style={{ fontFamily: 'Helvetica', fontStyle: 'normal' }}>{ projectDesc }</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectBox
