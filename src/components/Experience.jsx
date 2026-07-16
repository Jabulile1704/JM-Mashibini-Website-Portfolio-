import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section__title">Experience</h2>
      <p className="section__subtitle">Teaching engineers by day, shipping software always</p>

      <div className="timeline">
        {experience.map(({ role, company, period, bullets }) => (
          <article className="timeline__entry" key={`${role}-${company}`}>
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__card">
              <header className="timeline__header">
                <h3>{role}</h3>
                <p className="timeline__company">
                  {company} <span className="timeline__period">· {period}</span>
                </p>
              </header>
              <ul className="timeline__bullets">
                {bullets.map((b) => (
                  <li key={b.slice(0, 32)}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
