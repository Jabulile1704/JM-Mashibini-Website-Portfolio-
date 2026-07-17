import { projects } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

function FolderIcon() {
  return (
    <svg width="15" height="13" viewBox="0 0 20 17" fill="none" aria-hidden="true">
      <path
        d="M1 3.5C1 2.4 1.9 1.5 3 1.5h4l2 2.5h8c1.1 0 2 .9 2 2v7.5c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3.5z"
        stroke="#3fe07f"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="sec-projects" className="section">
      <SectionHeading number="03" file="projects/">
        Flagship<span className="accent">.</span>projects
      </SectionHeading>
      <div className="projects">
        {projects.map(({ folder, title, description, bullets, tech }) => (
          <article className="project" key={folder}>
            <header className="project__header">
              <FolderIcon />
              <span className="project__folder">{folder}</span>
              <span className="project__pill">FLAGSHIP</span>
            </header>
            <div className="project__body">
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="project__tech">
                {tech.map((t) => (
                  <span className="tech-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
