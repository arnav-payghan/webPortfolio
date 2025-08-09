export default function SkillBox({ Icon, skillName }) {
  return (
    <div className="flex items-center gap-3 bg-gray-0 border border-neu1tral-700 rounded-3xl px-4 py-2 shadow-md hover:scale-105 transition-transform cursor-pointer">
      {/* Skill Icon */}
      <Icon className="text-blue-600 w-6 h-6" />
      
      {/* Skill Name */}
      <span className="text-white font-medium sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md">{skillName}</span>
    </div>
  );
}