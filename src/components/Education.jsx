import { education } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Education() {
  return (
    <section id="sec-education" className="section">
      <SectionHeading number="06" file="education.cs">
        Education<span className="accent">()</span>
      </SectionHeading>
      <div className="edu">
        {education.map(({ period, title, institution }) => (
          <div className="edu__card" key={title}>
            <div className="edu__period">{period}</div>
            <h3 className="edu__title">{title}</h3>
            <div className="edu__institution">{institution}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
