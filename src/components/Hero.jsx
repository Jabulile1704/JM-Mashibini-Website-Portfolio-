import { heroIntro, profile } from '../data.js'
import TransitMap from './TransitMap.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__head">
        <div>
          <p className="eyebrow">Network map · {profile.role} · South Africa</p>
          <h1 className="hero__title">{profile.name}</h1>
        </div>
        <p className="hero__corner mono">
          not to scale
          <br />
          rev. 2026.09
        </p>
      </div>
      <p className="hero__intro">{heroIntro}</p>
      <div className="hero__actions">
        <a className="btn btn--solid" href="#build">
          See what I’ve built
        </a>
        <a className="btn btn--outline" href="#contact">
          Get in touch
        </a>
      </div>
      <TransitMap />
    </section>
  )
}
