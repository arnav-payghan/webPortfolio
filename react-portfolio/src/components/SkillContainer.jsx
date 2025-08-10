import React from 'react';

const SkillContainer = ({ skillName }) => {
  return (
    <div
      className="text-sm border border-white/30 px-3.5 py-1.5 rounded-3xl text-bold
      inline-block transition-colors duration-200 ease-in-out bg-black/10 text-white bg-blur-sm
      hover:bg-[#0055ff] hover:text-white hover:font-semibold z-100 cursor-default"
    >
      <p className="text-center font-medium" style={{ fontFamily: 'Helvetica' }}>
        {skillName}
      </p>
    </div>
  );
};

export default SkillContainer;
