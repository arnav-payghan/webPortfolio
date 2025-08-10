import React from 'react'

const SkillContainer = ({ skillIcon, skillName }) => {
  return (
    <div>
        <div className="border-2 border-white/10 px-4 py-3 rounded-2xl">
            <div className="">
                <span 
                className=""
                >
                    { skillIcon }
                </span>
                <p 
                className=""
                style={{ fontFamily: 'NeometricMedium' }}
                >
                    { skillName }
                </p>
            </div>
        </div>
    </div>
  )
}

export default SkillContainer
