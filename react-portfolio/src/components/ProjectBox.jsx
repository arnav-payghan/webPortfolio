import React, { useRef } from 'react';
import ProjectSkillContainer from './ProjectSkillContainer'; 

import { PiGlobeBold } from "react-icons/pi";


const ProjectBox = ({ projectURL, projectTitle, projectDesc, projectWebsite, projectSkill = [] }) => {
  const audioRef = useRef(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.warn("Audio play blocked or failed:", err);
      });
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      <div className="border border-white/20 rounded-xl absolute transition duration-300 hover:scale-110">
        <div className="px-4 py-3">
          <div className="flex items-center">
            <img src={projectURL} alt="Project Image" className="rounded-lg w-60" />
          </div>
          <div className="grid grid-rows-2 mt-2 text-left">
            <div className="">
                <p className="overflow-hidden" style={{ fontFamily: 'NeometricAltMedium' }}>
                    {projectTitle}
                </p>
            </div>
            <div className="">
                <ProjectSkillContainer skillItems={projectSkill} />
            </div>
            <div className="px-3 py-1 mt-2 bg-gray-200 text-black text-sm rounded-2xl font-bold hover:bg-gray-300"
                 style={{ fontFamily: 'Helvetica' }}>
                <button className="inline-flex items-center">
                    <PiGlobeBold className="inline-block mr-1" />
                    Website
                </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
