import { about, profile } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section about">
      <img className="about__photo" src={profile.photo} alt="Jabulile Mashibini" width="200" height="200" />
      <div className="about__text">
        <p className="eyebrow">Hello</p>
        {about.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
    </section>
  )
}
