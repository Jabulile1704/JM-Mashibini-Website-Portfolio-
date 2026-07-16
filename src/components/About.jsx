import { about } from '../data.js'
import { FiAward, FiBookOpen } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section__title">About Me</h2>
      <p className="section__subtitle">
        Engineer, facilitator, and cloud practitioner — in that order on weekends, reverse on weekdays
      </p>

      <div className="about__grid">
        <div className="about__text">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>

        <div className="about__stats">
          {about.stats.map(({ value, label }) => (
            <div className="stat" key={label}>
              <span className="stat__value">{value}</span>
              <span className="stat__label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="about__education">
        {about.education.map(({ qualification, institution, period }) => (
          <div className="edu-card" key={qualification}>
            <span className="edu-card__icon">
              {qualification.startsWith('Advanced') ? <FiAward /> : <FiBookOpen />}
            </span>
            <div>
              <h3>{qualification}</h3>
              <p>{institution}</p>
              <p className="edu-card__period">{period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
