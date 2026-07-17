import { contactIcons, profile } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Contact() {
  return (
    <section id="sec-contact" className="section section--last">
      <SectionHeading number="07" file="contact.sh">
        Let&apos;s<span className="accent">.</span>connect
      </SectionHeading>
      <div className="terminal">
        <div className="terminal__header">bash — jabulile@portfolio:~</div>
        <div className="terminal__body">
          <div>
            <span className="terminal__prompt">$</span> <span className="terminal__cmd">whoami</span>
          </div>
          <div className="terminal__out">
            Jabulile Mashibini — Junior Full Stack Developer, open to opportunities
          </div>
          <div className="terminal__gap">
            <span className="terminal__prompt">$</span> <span className="terminal__cmd">cat contact.txt</span>
          </div>
          <div className="terminal__kv">
            <span className="terminal__key">email</span>
            <span className="terminal__eq">=</span> <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="terminal__kv">
            <span className="terminal__key">phone</span>
            <span className="terminal__eq">=</span> <span className="terminal__out">{profile.phone}</span>
          </div>
          <div className="terminal__kv terminal__kv--icon">
            <span className="terminal__key">github</span>
            <span className="terminal__eq">=</span>
            <img src={contactIcons.github} alt="" width="15" height="15" />
            <a href={profile.github} target="_blank" rel="noreferrer">
              {profile.githubLabel}
            </a>
          </div>
          <div className="terminal__kv terminal__kv--icon">
            <span className="terminal__key">linkedin</span>
            <span className="terminal__eq">=</span>
            <img src={contactIcons.linkedin} alt="" width="15" height="15" />
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedinLabel}
            </a>
          </div>
          <div className="terminal__gap">
            <span className="terminal__prompt">$</span> <span className="terminal__cursor">▊</span>
          </div>
        </div>
      </div>
    </section>
  )
}
