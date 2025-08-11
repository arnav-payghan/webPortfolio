import React, { useRef } from 'react';

const SkillContainer = ({ skillName }) => {
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
    <div
      onMouseEnter={handleMouseEnter}
      className="text-sm border border-white/30 px-3.5 py-1.5 rounded-3xl text-bold
      inline-block transition-colors duration-200 ease-in-out bg-black/10 text-white bg-blur-sm
      hover:bg-[#0055ff] hover:text-white hover:font-semibold hover:scale-105 z-100 cursor-default"
    >
      <p className="text-center font-medium" style={{ fontFamily: 'Helvetica' }}>
        {skillName}
      </p>

      {/* Audio element placed inside the same div to keep it scoped */}
      <audio
        ref={audioRef}
        src="/audio/keyboardClick.mp3"
        preload="auto"
      />
    </div>
  );
};

export default SkillContainer;
