import { profile } from '../data.js'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi'

const items = [
  { icon: <FiMail />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: <FiPhone />, label: 'Phone', value: profile.phone, href: `tel:+27${profile.phone.replace(/\s/g, '').slice(1)}` },
  { icon: <FiMapPin />, label: 'Location', value: profile.location },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'jabulile-mashibini', href: profile.linkedin },
  { icon: <FiGithub />, label: 'GitHub', value: 'Jabulile1704', href: profile.github },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section__title">Get In Touch</h2>
      <p className="section__subtitle">
        Open to junior DevOps, cloud, software engineering &amp; full-stack opportunities
      </p>

      <div className="contact__grid">
        {items.map(({ icon, label, value, href }) => (
          <div className="contact-card" key={label}>
            <span className="contact-card__icon">{icon}</span>
            <span className="contact-card__label">{label}</span>
            {href ? (
              <a
                className="contact-card__value"
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                {value}
              </a>
            ) : (
              <span className="contact-card__value">{value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
