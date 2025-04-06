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
import ProjectsSection from './components/ProjectsSection'
import TechnologySection from './components/TechnologySection'
import ContactSection from './components/ContactSection'

function App() {

  return (
    <>
      <Header />
      <Particle />
      {/* <HeroSection /> */}
      <Introduction />
      <UspSection />
      {/* <ServicesSection /> */}
      <ProjectsSection />
      <TechnologySection />
      <ContactSection />
      <WhatsApp />
    </>
  )
}

export default App
