import React from 'react';

const SkillContainer = ({ skillName }) => {
  return (
    <div
      className="text-sm border border-white/30 px-3.5 py-1.5 rounded-3xl text-bold
      inline-block text-white transition-colors duration-200 ease-in-out bg-black/0
      hover:bg-white hover:text-black"
    >
      <p className="text-center" style={{ fontFamily: 'Arial' }}>
        {skillName}
      </p>
    </div>
  );
};

export default SkillContainer;
