import { builds } from '../data.js'
import LineHeading from './LineHeading.jsx'

export default function BuildLine() {
  return (
    <section id="build" className="section">
      <LineHeading line="build" letter="B" title="Build line">
        {builds.length} stations, newest first
      </LineHeading>
      <ol className="route tm-build">
        {builds.map(({ id, name, tagline, status, flagship, upcoming, description, bullets, tech, links }) => (
          <li
            id={`build-${id}`}
            key={id}
            className={`stop ${flagship ? 'stop--flagship' : ''} ${upcoming ? 'stop--upcoming' : ''}`}
          >
            <span className="stop__dot" aria-hidden="true" />
            <article className="stop__card">
              <header className="stop__head">
                <h3 className="stop__name">{name}</h3>
                {status && <span className="stop__status mono">{status}</span>}
              </header>
              <p className="stop__tagline">{tagline}</p>
              <p>{description}</p>
              {bullets && (
                <ul className="stop__bullets">
                  {bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              <div className="stop__foot">
                <ul className="chips" aria-label="Stack">
                  {tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="stop__links">
                  {links.map(({ label, href }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                      {label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
