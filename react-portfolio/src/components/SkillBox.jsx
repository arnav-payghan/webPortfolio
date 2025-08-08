export default function SkillBox({ Icon, skillName }) {
  return (
    <div className="flex items-center gap-3 bg-gray-0 border border-neutral-700 rounded-xl px-4 py-2 shadow-md hover:scale-105 transition-transform cursor-pointer">
      {/* Skill Icon */}
      <Icon className="text-blue-500 w-7 h-7" />
      
      {/* Skill Name */}
      <span className="text-white font-medium sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md">{skillName}</span>
    </div>
  );
}
