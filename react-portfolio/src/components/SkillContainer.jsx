import React from 'react';

const SkillContainer = ({ skillName }) => {
  return (
    <div
      className="text-sm border border-white/20 px-3.5 py-1.5 rounded-3xl 
      inline-block text-white transition-colors duration-200 ease-in-out bg-black
      hover:bg-white hover:text-black"
    >
      <p className="text-center" style={{ fontFamily: 'Helvetica' }}>
        {skillName}
      </p>
    </div>
  );
};

export default SkillContainer;
