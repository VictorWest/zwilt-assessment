import React from 'react'
import UnitMarket from './UnitMarket'
import arrowPNG from '../assets/firstLogoBox/arrow.png'
import dotnetPNG from '../assets/firstLogoBox/dotnet.png'
import magentoPNG from '../assets/firstLogoBox/magento.png'
import scientistPNG from '../assets/firstLogoBox/scientist.png'
import shopifyPNG from '../assets/firstLogoBox/shopify.png'
import webflowPNG from '../assets/firstLogoBox/webflow.png'
import cinemaPNG from '../assets/secondLogoBox/cinema.png'
import figmaPNG from '../assets/secondLogoBox/figma.png'
import illustratorPNG from '../assets/secondLogoBox/illustrator.png'
import psPNG from '../assets/secondLogoBox/ps.png'
import unrealPNG from '../assets/secondLogoBox/unreal.png'

export default function Marketplace() {
  return (
    <div className=''>
      <div className='pt-[6rem] text-center bg-[#EDEFFF]'>
          <h2 className='flex flex-wrap font-bold text-4xl w-[55%] mx-auto'>Your one-stop marketplace for finding the talent your business needs.</h2>
          
          <UnitMarket 
            headText="Find Dev and IT professionals to scale your business."
            skills="989"
            categories="45"
            boxText="IT & Development"
            imgArr={[
              {img: shopifyPNG, headText: "Shopify", subText: "Developer"},
              {img: magentoPNG, headText: "Magento", subText: "Developer"},
              {img: scientistPNG, headText: "Data", subText: "Scientist"},
              {img: webflowPNG, headText: "Webflow", subText: "Developer"},
              {img: dotnetPNG, headText: "Dot Net", subText: "Developer"},
              {img: arrowPNG, headText: "", subText: ""},
            ]}
          />
          <UnitMarket 
            headText="Explore Creative individuals with a keen eye for detail."
            skills="989"
            categories="45"
            profiles="1011"
            boxText="Design & Creative"
            imgArr={[
              {img: arrowPNG, headText: "", subText: ""},
              {img: figmaPNG, headText: "UX", subText: "Designer"},
              {img: psPNG, headText: "Graphics", subText: "Designer"},
              {img: illustratorPNG, headText: "Illustration", subText: "Artist"},
              {img: unrealPNG, headText: "Unreal", subText: "Engine"},
              {img: cinemaPNG, headText: "Cinema", subText: "4D"},
            ]}
          />
          <div className='flex mx-9 items-center px-5 pb-5'>
            <div className='flex items-center gap-4'>
              <button className='bg-[#000] p-6 rounded-full'>
                <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3588 7.5C13.3588 11.036 10.3683 13.9024 6.67939 13.9024C2.99046 13.9024 -2.2912e-08 11.036 -1.55709e-08 7.5C-8.22979e-09 3.96403 2.99046 1.09756 6.67939 1.09756C10.3683 1.09756 13.3588 3.96403 13.3588 7.5Z" fill="#EDEFFF"/>
                  <path d="M11.6412 15L11.6412 2.41685e-08L25 7.5L11.6412 15Z" fill="#EDEFFF"/>
                </svg>
              </button>              
            <span className='font-bold'>Explore More</span>
            </div>
            <p className='mx-auto'><span className='font-bold'>30 more</span> to explore</p>
          </div>
          
      </div>
      
    </div>

  )
}
