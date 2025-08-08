import React from 'react'

const Education = ( {instituteName, study, duration} ) => {
  return (
    <div className="border rounded-xl border-white/20 py-3 px-4 items-center">
        <div className="grid grid-cols-[3fr_1fr]">
            <div className="text-left">
                <p className="" style={{ fontFamily: 'NeometricBold' }}>{ instituteName }</p>
                <p style={{ fontFamily: 'Helvetica' }}>{ study }</p>
            </div>
            <div className="text-right">  
                <p style={{ fontFamily: 'Helvetica' }}>{ duration }</p>
            </div>
        </div>
    </div>
  )
}

export default Education
