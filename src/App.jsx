import { useState, version } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import WhatsApp from './components/WhatsApp'
import UspSection from './components/UspSection'
import Introduction from './components/Introduction'
import ServicesSection from './components/ServicesSection'
import Particle from './components/Particle'

function App() {

  return (
    <>
      <Header />
      <Particle />
      {/* <HeroSection /> */}
      <Introduction />
      <UspSection />
      <ServicesSection />
      <WhatsApp />
    </>
  )
}

export default App
