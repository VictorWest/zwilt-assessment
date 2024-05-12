import React from 'react'
import faceImg from '../assets/face.png'
export default function Hero() {
  return (
    <div className='flex flex-wrap pt-[6rem] mx-auto w-[50%] justify-center text-center'>
        <div className='font-bold text-5xl hero'>
            <p className=''>Finding the right fit<img className='inline' src={faceImg} alt="image of man" />has never been easier.</p>
        </div> 
        <div className='text-[#202229] text-lg pt-5 w-[75%]'>With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again.</div>

        <form className='flex items-center justify-center mt-5'>
            <input className='border boder-[#959595] p-5 rounded-lg w-[25rem]'  type="text" placeholder='design |' />
            <button className='bg-[#FFBE2E] p-6 rounded-lg button-logo'>
            <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3588 7.5C13.3588 11.036 10.3683 13.9024 6.67939 13.9024C2.99046 13.9024 -2.2912e-08 11.036 -1.55709e-08 7.5C-8.22979e-09 3.96403 2.99046 1.09756 6.67939 1.09756C10.3683 1.09756 13.3588 3.96403 13.3588 7.5Z" fill="#202229"/>
            <path d="M11.6412 15L11.6412 2.41685e-08L25 7.5L11.6412 15Z" fill="#202229"/>
            </svg>
            </button>
        </form>
        
    </div>
    
  )
}
