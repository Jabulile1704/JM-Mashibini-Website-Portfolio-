import { profile } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="sec-about" className="section">
      <SectionHeading number="01" file="about.md">
        About<span className="accent">.</span>me
      </SectionHeading>
      <div className="about">
        <div className="about__photo-col">
          <div className="about__photo-frame">
            <img className="about__photo" src={profile.photo} alt="Jabulile Mashibini" width="188" height="188" />
          </div>
          <div className="about__photo-caption">jabulile.jpg · 200×200</div>
        </div>
        <div className="about__text">
          <p>
            I&apos;m a software engineering professional and facilitator based in South Africa. By day I teach the
            next generation of developers C#, Java, and full-stack development at CTU Training Solutions; by night I
            design and build complete real-world applications — from requirements and ERDs through CI/CD and
            delivery.
          </p>
          <p>
            My flagship work includes <strong>MoTirong</strong>, a geo-verified staff attendance platform built for
            the Mangaung Metro Municipality, and <strong>TiroMoMangaung</strong>, a location-aware job-matching app
            connecting local job seekers with employers.
          </p>
          <p>
            I hold 12+ Microsoft, AWS, Oracle and Cisco certifications and I&apos;m currently working toward
            Microsoft Certified Trainer status. I&apos;m looking for a Junior Full Stack Developer role where I can
            build reliable, well-tested applications end to end.
          </p>
        </div>
      </div>
    </section>
  )
}
