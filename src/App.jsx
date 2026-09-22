import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import BuildLine from './components/BuildLine.jsx'
import CareerLine from './components/CareerLine.jsx'
import CertLine from './components/CertLine.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main className="page">
        <Hero />
        <About />
        <BuildLine />
        <CareerLine />
        <CertLine />
        <Contact />
      </main>
    </>
  )
}
