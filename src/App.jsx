import { useEffect, useState, version } from 'react'
import reactLogo from './assets/react.svg'
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
import Loader from './components/Loader'
import Footer from './components/Footer'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Particle />
            <Introduction />
            <TechnologySection />
            <ProjectsSection />
            <UspSection />
            <ContactSection />
            <Footer />
            <WhatsApp />
          </>
        )

      }
    </>
  )
}

export default App
