import { useState, version } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import WhatsApp from './components/WhatsApp'
import UspSection from './components/UspSection'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <UspSection />
      <WhatsApp />
    </>
  )
}

export default App
