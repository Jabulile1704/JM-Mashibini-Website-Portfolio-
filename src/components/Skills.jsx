import { skillCategories } from '../data.js'
import {
  FiCode,
  FiGlobe,
  FiCloud,
  FiDatabase,
  FiTool,
  FiGitBranch,
  FiCheckCircle,
} from 'react-icons/fi'

const icons = {
  code: <FiCode />,
  web: <FiGlobe />,
  cloud: <FiCloud />,
  db: <FiDatabase />,
  tools: <FiTool />,
  git: <FiGitBranch />,
  test: <FiCheckCircle />,
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section__title">Technical Skills</h2>
      <p className="section__subtitle">Organised the way a hiring manager reads them</p>

      <div className="skills__grid">
        {skillCategories.map(({ title, icon, skills }) => (
          <div className="skill-card" key={title}>
            <div className="skill-card__header">
              <span className="skill-card__icon">{icons[icon]}</span>
              <h3>{title}</h3>
            </div>
            <ul className="skill-card__list">
              {skills.map((skill) => (
                <li key={skill} className="chip chip--small">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
