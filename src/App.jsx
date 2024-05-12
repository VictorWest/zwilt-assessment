import React from 'react'
import Header from './components/Header'
import './index.css'
import Hero from './components/Hero'
import DevList from './components/DevList'
import Union from './components/Union'
import Marketplace from './components/Marketplace'
import Jason from './components/Jason'
import Screening from './components/Screening'
import UnitScreening from './components/UnitScreening'
import StartJourney from './components/StartJourney'
export default function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <DevList/>
      <Union/>
      <Marketplace/>
      <Jason/>
      <Screening/>
      <StartJourney/>
    </div>
  )
}
