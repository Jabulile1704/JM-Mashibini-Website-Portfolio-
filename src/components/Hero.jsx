import { heroIntro, roles } from '../data.js'
import { useTypewriter } from '../hooks/useTypewriter.js'
import MatrixRain from './MatrixRain.jsx'

const SHOW_RAIN = true
const RAIN_SPEED = 1
const TYPING_EFFECT = true

export default function Hero({ goTo }) {
  const typed = useTypewriter(roles, { enabled: TYPING_EFFECT })

  return (
    <section id="sec-home" className="hero">
      <MatrixRain enabled={SHOW_RAIN} speed={RAIN_SPEED} />
      <div className="hero__content">
        <div className="hero__comment">// hello_world.tsx</div>
        <div className="hero__code">
          const <span className="hero__code-name">developer</span> = {'{'}
        </div>
        <h1 className="hero__title">
          Jabulile
          <br />
          Mashibini<span className="hero__underscore">_</span>
        </h1>
        <div className="hero__typed">
          &gt; {typed}
          <span className="hero__caret" />
        </div>
        <p className="hero__intro">{heroIntro}</p>
        <div className="hero__actions">
          <button className="hero__btn hero__btn--solid" onClick={() => goTo('sec-projects')}>
            ./view_projects
          </button>
          <button className="hero__btn hero__btn--outline" onClick={() => goTo('sec-contact')}>
            ./contact_me
          </button>
          <span className="hero__cert-note">AZ-204 Azure Developer certified ✓</span>
        </div>
        <div className="hero__code hero__code--close">{'};'}</div>
      </div>
    </section>
  )
}
