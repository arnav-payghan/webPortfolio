import React from 'react'

const ProjectBox = ({ projectURL, projectTitle, projectDesc }) => {
  return (
    <div>
        <div className="border border-white/20 rounded-xl absolute">
            <div className="px-4 py-3">
                <div className="flex items-center"> {/* PROJECT IMAGE CONTAINER */}
                    <img src={`${ projectURL }`} alt="Project Image" className="h-30" />
                </div>
                <div className="flex items-center text-left grid grid-rows-2 max-w-xs"> {/* PROJECT INFORMATION CONTAINER */}
                    <p className="">{ projectTitle }</p>
                    <p className="">{ projectDesc }</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectBox
