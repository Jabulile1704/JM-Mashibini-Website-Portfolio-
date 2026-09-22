import { profile } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact__sign">
        <p className="eyebrow">Change here</p>
        <h2 className="contact__title">For collaborations, interviews or a coffee chat about Azure.</h2>
        <p className="contact__lead">
          I’m open to junior full-stack roles and to community projects that need a hand.
        </p>
        <div className="hero__actions">
          <a className="btn btn--solid" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a className="btn btn--outline" href={import.meta.env.BASE_URL + profile.cvFile} download>
            Download CV
          </a>
        </div>
      </div>
      <dl className="contact__list">
        <div>
          <dt className="mono">Email</dt>
          <dd>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </dd>
        </div>
        <div>
          <dt className="mono">Phone</dt>
          <dd>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          </dd>
        </div>
        <div>
          <dt className="mono">GitHub</dt>
          <dd>
            <a href={profile.github} target="_blank" rel="noreferrer">
              {profile.githubLabel}
            </a>
          </dd>
        </div>
        <div>
          <dt className="mono">LinkedIn</dt>
          <dd>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedinLabel}
            </a>
          </dd>
        </div>
      </dl>
      <footer className="footer mono">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>End of the line</span>
      </footer>
    </section>
  )
}
