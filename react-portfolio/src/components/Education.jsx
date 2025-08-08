import React from 'react'

const Education = ( {instituteName, study, duration, marks} ) => {
  return (
    <div className="border rounded-xl border-white/20 py-4 px-5 items-center mt-4">
        <div className="grid grid-cols-[3fr_1fr]">
            <div className="text-left">
                <p className="text-lg" style={{ fontFamily: 'NeometricBold' }}>{ instituteName }</p>
                <p className="text-sm mt-1" style={{ fontFamily: 'Helvetica' }}>{ study }</p>
                <p className="text-sm mt-1" style={{ fontFamily: 'Helvetica' }}>{ marks }</p>
            </div>
            <div className="text-right">  
                <p className="text-md" style={{ fontFamily: 'NeometricAltMedium' }}>{ duration }</p>
            </div>
        </div>
    </div>
  )
}

export default Education
