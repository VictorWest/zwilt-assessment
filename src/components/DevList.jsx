import React from 'react'

export default function DevList() {
  return (
    <div className='flex flex-col bg-[#F8F8F8] mx-auto items-center mt-[4.5rem] text-[#202229] w-fit py-3 px-[5rem] rounded-xl'>
        <ul className='flex pb-5'>
            <li className='py-3 px-7 bg-[#C7F4C2] rounded-2xl font-bold development'>IT & Development</li>
            <li className='py-3 px-7 bg-[#edecec] rounded-2xl'>Design and Creative</li>
        </ul>
        <ul className='flex gap-[5rem] text-[#3c3c3c]'>
            <ul className='space-y-2'>
                <li>Python Developer</li>
                <li>Shopify Developer</li>
                <li className='font-bold'>MERN Stack Developer</li>
                <li>Full Stack Developer</li>
            </ul>
            <ul className='space-y-2'>
                <li>Data Scientist</li>
                <li>Front End Developer</li>
                <li>Shopify Developer</li>
                <li>Python Developer</li>
            </ul>
            <ul className='space-y-2'>
                <li>Shopify Developer</li>
                <li>Python Developer</li>
                <li>Full Stack Developer</li>
                <li className='font-bold'>Explore More</li>
            </ul>
        </ul>
    </div>
  )
}
