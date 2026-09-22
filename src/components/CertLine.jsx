import { certCount, certGroups, nowBoarding, toolbox } from '../data.js'
import LineHeading from './LineHeading.jsx'

export default function CertLine() {
  return (
    <section id="certs" className="section">
      <LineHeading line="cert" letter="X" title="Cert line">
        {certCount} certifications across Microsoft, AWS, Oracle, Cisco and ISO
      </LineHeading>
      <div className="certs">
        {certGroups.map(({ stop, certs }) => (
          <div className="certs__group" key={stop}>
            <h3 className="certs__stop mono">{stop}</h3>
            <ul>
              {certs.map(([code, name]) => (
                <li key={code}>
                  <span className="certs__code mono">{code}</span>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <dl className="board">
        <div>
          <dt className="mono">Rolling stock</dt>
          <dd>
            <ul className="chips">
              {toolbox.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="mono">Now boarding</dt>
          <dd>{nowBoarding.join(' · ')}</dd>
        </div>
      </dl>
    </section>
  )
}
