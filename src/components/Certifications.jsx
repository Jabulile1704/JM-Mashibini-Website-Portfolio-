import { certs, certSummary } from '../data.js'
import CertGlobe from './CertGlobe.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Certifications() {
  return (
    <section id="sec-certs" className="section">
      <SectionHeading number="05" file="certifications.yml">
        Certifications<span className="accent">[15]</span>
      </SectionHeading>
      <p className="certs__subtitle">Microsoft, AWS, Oracle and Cisco certified — cloud, security, identity and data.</p>

      <div className="certs__globe-row">
        <CertGlobe />
        <div className="certs__status">
          <div className="certs__status-label">
            cert_globe<span className="certs__status-dim">.status</span>
          </div>
          <p>
            Fifteen certifications orbiting one developer — spanning{' '}
            <strong>Azure development &amp; administration</strong>, <strong>security &amp; identity</strong>, and{' '}
            <strong>data engineering &amp; analytics</strong>.
          </p>
          <div className="certs__counts">
            {certSummary.map(({ count, label }) => (
              <div key={label}>
                <span className="accent">▸</span> <span className="certs__count">{count}</span> {label}
              </div>
            ))}
            <div>
              <span className="certs__hourglass">⧗</span> MCT — in progress
            </div>
          </div>
        </div>
      </div>

      <div className="certs__grid">
        {certs.map(({ code, name, icon }) => (
          <div className="cert-row" key={code}>
            <span className="cert-row__logo">
              <span className="cert-row__logo-img" style={{ backgroundImage: `url("${icon}")` }} />
            </span>
            <span className="cert-row__badge">{code}</span>
            <span className="cert-row__name">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
