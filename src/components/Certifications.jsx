import { certificationGroups } from '../data.js'
import { FiShield } from 'react-icons/fi'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2 className="section__title">Certifications</h2>
      <p className="section__subtitle">
        14 industry credentials, ordered by relevance to cloud, DevOps &amp; software engineering
      </p>

      <div className="certs__grid">
        {certificationGroups.map(({ provider, certs }) => (
          <div className="cert-card" key={provider}>
            <div className="cert-card__provider">
              <FiShield />
              <h3>{provider}</h3>
            </div>
            <ul>
              {certs.map(({ name, code, status }) => (
                <li key={code} className="cert-card__item">
                  <span className="cert-card__badge">{code}</span>
                  <span>
                    {name}
                    {status && <em className="cert-card__status"> — {status}</em>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
