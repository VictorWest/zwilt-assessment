import React from 'react'

export default function NewImage({img, children, ...props}) {
  return (
    <div className='flex flex-col items-center px-3'>
      <div className='w-20 p-5 rounded-[50%] bg-[#f6f6f6] flex justify-center items-center'>
        <img className='' {...props} src={img} alt="brand logo"  />  
      </div>
      {children}
    </div>

  )
}
