const ProjectSkillContainer = ({ skillItems }) => {
  return (
    <div className="skill-container mt-2 flex gap-2 flex-wrap">
      {skillItems?.map((skill, index) => (
        <span key={index} className="skill-badge px-2 py-1 bg-white/10 text-white text-sm rounded">
          {skill}
        </span>
      ))}
    </div>
  );
};

export default ProjectSkillContainer;
