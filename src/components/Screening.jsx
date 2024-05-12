import React, { useState } from 'react'
import UnitScreening from './UnitScreening'
import womanPic from '../assets/womanface.png'
import UnitNumber from './UnitNumber'
export default function 
() {

  return (
    <div className='flex pt-[5rem] justify-between'>
      <div>
        <div className='ps-14'>
            <h1 className='text-4xl font-bold w-[25rem] pb-5'>How we ensure you’re in good hands.</h1>
            <p className='w-[30rem] pb-5'>With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.</p>            
        </div>
        <UnitScreening num={1} type="Resume Screening" />
        <UnitScreening num={2} type="Video Intervew" desc="Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."/>
        <UnitScreening num={3} type="Technical Evaluation" />
        <UnitScreening num={4} type="Application Review" />
        <UnitScreening  num={5} type="Let's get to work" />        
      </div>
      <div className=''>
        <img className='ms-auto pe-14 drop-shadow-xl' src={womanPic} alt="" /> 
        <div className='pe-[10rem]'>
          <UnitNumber className="rounded-ss-xl rounded-se-xl bg-[#8BA4FD] p-3" number={1} words="Tell us something about yourself"/>
          <UnitNumber number={2} words="Give a short brief about your experience"/>
          <UnitNumber number={3} words="Explain about good customer experience"/>
          <UnitNumber number={4} words="How to manage SOP of customers care?"/>
          <UnitNumber className="rounded-es-xl rounded-ee-xl bg-[#8BA4FD] p-3" number={5} words="Tell us something about yourself"/>          
        </div>

      </div>
    </div>
  )
}
