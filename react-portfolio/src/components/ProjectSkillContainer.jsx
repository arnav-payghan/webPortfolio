const ProjectSkillContainer = ({ skillItems }) => {
  return (
    <div className="skill-container flex gap-1.5 flex-wrap">
      {skillItems?.map((skill, index) => (
        <span key={index} className="skill-badge px-3 py-1 mt-0.5 border border-white/30 bg-black/10 text-white text-xs rounded-2xl">
          {skill}
        </span>
      ))}
    </div>
  );
};

export default ProjectSkillContainer;
