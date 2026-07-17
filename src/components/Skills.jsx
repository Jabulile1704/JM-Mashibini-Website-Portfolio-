import { useEffect, useState } from 'react'
import { skills } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Skills({ editorRef }) {
  const [inView, setInView] = useState(false)

  // Chips animate in with a 45ms stagger once the section enters the editor viewport
  useEffect(() => {
    const sec = document.getElementById('sec-skills')
    const root = editorRef.current
    if (!sec || !('IntersectionObserver' in window)) {
      setInView(true)
      return undefined
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          io.disconnect()
        }
      },
      { root, threshold: 0.18 },
    )
    io.observe(sec)
    return () => io.disconnect()
  }, [editorRef])

  let chipIndex = 0

  return (
    <section id="sec-skills" className="section">
      <SectionHeading number="02" file="skills.json">
        Tech<span className="accent">.</span>stack
      </SectionHeading>
      <div className={`skills-card ${inView ? 'skills-card--in' : ''}`}>
        <div className="skills-card__brace">{'{'}</div>
        {skills.map(({ key, items }) => (
          <div className="skills-card__row" key={key}>
            <span className="skills-card__key">&quot;{key}&quot;</span>
            <span className="skills-card__punct">: [</span>
            {items.map(({ label, icon }) => (
              <span className="skill-chip" key={label} style={{ '--d': `${chipIndex++ * 45}ms` }}>
                {icon && <span className="skill-chip__icon" style={{ backgroundImage: `url("${icon}")` }} />}
                &quot;{label}&quot;
              </span>
            ))}
            <span className="skills-card__punct">],</span>
          </div>
        ))}
        <div className="skills-card__brace">{'}'}</div>
      </div>
    </section>
  )
}
