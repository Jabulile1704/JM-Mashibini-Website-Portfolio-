import { career, careerExtras } from '../data.js'
import LineHeading from './LineHeading.jsx'

export default function CareerLine() {
  return (
    <section id="career" className="section">
      <LineHeading line="career" letter="C" title="Career line">
        Teaching, and where I learned it
      </LineHeading>
      <ol className="route tm-career">
        {career.map(({ id, period, role, place, current, bullets }) => (
          <li id={`career-${id}`} key={id} className={`stop ${current ? 'stop--flagship' : ''}`}>
            <span className="stop__dot" aria-hidden="true" />
            <div className="stop__plain">
              <p className="stop__period mono">{period}</p>
              <h3 className="stop__name">{role}</h3>
              <p className="stop__place">{place}</p>
              {bullets && (
                <ul className="stop__bullets">
                  {bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
      <p className="career__extras">
        Also on this line: <strong>{careerExtras.join(' · ')}</strong>
      </p>
    </section>
  )
}
