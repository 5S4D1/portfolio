import ThreeBackground from './components/three/ThreeBackground'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Achievements from './components/sections/Achievements'
import Projects from './components/sections/Projects'
import Certificates from './components/sections/Certificates'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}