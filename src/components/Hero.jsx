import { profile } from '../data.js'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <p className="hero__greeting">👋 Hi, I&apos;m</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__headline">{profile.headline}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <ul className="hero__roles" aria-label="Target roles">
          {profile.targetRoles.map((role) => (
            <li key={role} className="chip">
              {role}
            </li>
          ))}
        </ul>

        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get In Touch
          </a>
        </div>

        <div className="hero__social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </section>
  )
}
