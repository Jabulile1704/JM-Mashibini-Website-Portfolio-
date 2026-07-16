import { projects } from '../data.js'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">Featured Projects</h2>
      <p className="section__subtitle">Real products for real users — including a government client</p>

      <div className="projects__grid">
        {projects.map(({ name, type, icon, description, tech, repo }) => (
          <article className="project-card" key={name}>
            <header className="project-card__header">
              <span className="project-card__icon" aria-hidden="true">
                {icon}
              </span>
              <div>
                <h3>{name}</h3>
                <p className="project-card__type">{type}</p>
              </div>
            </header>
            <p className="project-card__description">{description}</p>
            <ul className="project-card__tech">
              {tech.map((t) => (
                <li key={t} className="chip chip--small">
                  {t}
                </li>
              ))}
            </ul>
            <a className="project-card__link" href={repo} target="_blank" rel="noreferrer">
              <FiGithub /> View on GitHub <FiExternalLink />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
