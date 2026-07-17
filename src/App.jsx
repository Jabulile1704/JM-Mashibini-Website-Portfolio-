import { useEffect, useRef, useState } from 'react'
import { sectionIds } from './data.js'
import TitleBar from './components/TitleBar.jsx'
import FileTree from './components/FileTree.jsx'
import StatusBar from './components/StatusBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Certifications from './components/Certifications.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const editorRef = useRef(null)
  const [active, setActive] = useState('sec-home')
  const [treeOpen, setTreeOpen] = useState(false)

  // Scroll-spy: the section whose top is above scrollTop + 120 (last match) is active
  useEffect(() => {
    const ed = editorRef.current
    if (!ed) return
    const onScroll = () => {
      let cur = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= ed.scrollTop + 120) cur = id
      }
      setActive(cur)
    }
    ed.addEventListener('scroll', onScroll, { passive: true })
    return () => ed.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    const ed = editorRef.current
    const el = document.getElementById(id)
    if (ed && el) {
      ed.scrollTo({ top: id === 'sec-home' ? 0 : el.offsetTop - 8, behavior: 'smooth' })
    }
    setTreeOpen(false)
  }

  return (
    <div className="shell">
      <TitleBar treeOpen={treeOpen} onToggleTree={() => setTreeOpen((v) => !v)} />
      <div className="shell__main">
        <FileTree active={active} goTo={goTo} open={treeOpen} />
        <div className="editor" ref={editorRef}>
          <Hero goTo={goTo} />
          <About />
          <Skills editorRef={editorRef} />
          <Projects />
          <Experience />
          <Certifications />
          <Education />
          <Contact />
        </div>
      </div>
      <StatusBar />
    </div>
  )
}
