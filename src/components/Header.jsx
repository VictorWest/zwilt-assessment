import React from 'react'

export default function Header() {
  return (
    <div className='flex items-center p-3 mt-9 mx-9 text-white font-bold bg-[#525AA0] rounded-2xl shadow-lg'>
        <div className='flex gap-2 text-2xl items-center'>
            <p>Zwilt</p>
            <svg width="35" height="23" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.0933 11.671C19.0933 16.7077 15.007 20.7908 9.96633 20.7908C4.92564 20.7908 0.839355 16.7077 0.839355 11.671C0.839355 6.63425 4.92564 2.55119 9.96633 2.55119C15.007 2.55119 19.0933 6.63425 19.0933 11.671Z" fill="#FFBE2E"/>
            <path d="M16.7464 22.3542V0.987793L35.0003 11.671L16.7464 22.3542Z" fill="#FFBE2E"/>
            </svg>
        </div>
        <ul className='mx-auto flex gap-5 font-bold'>
            <li>Find Work</li>
            <li>Find Talent</li>
            <li>Articles</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
        <div className='flex gap-4'>
            <button className='text-white'>Log In</button>
            <button className='bg-white text-[#202229] p-3 rounded-2xl'>Join Now</button>
        </div>
    </div>
  )
}
