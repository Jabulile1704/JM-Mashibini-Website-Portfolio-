import { experience } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  return (
    <section id="sec-experience" className="section">
      <SectionHeading number="04" file="experience.log">
        git<span className="accent"> log</span> --experience
      </SectionHeading>
      <div className="xp">
        {experience.map(({ hash, period, role, company, current, bullets }) => (
          <article className="xp__entry" key={hash}>
            <span className={`xp__dot ${current ? 'xp__dot--current' : ''}`} aria-hidden="true" />
            <div className="xp__commit">
              commit {hash} · <span className="xp__period">{period}</span>
            </div>
            <h3 className="xp__role">{role}</h3>
            <div className="xp__company">{company}</div>
            <ul className="xp__bullets">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
