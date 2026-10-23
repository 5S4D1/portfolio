import Parallax from '../ui/Parallax'
import Reveal from '../ui/Reveal'
import { profile, skills, stats } from '../../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container two-col">
        <Parallax speed={0.1}>
          <Reveal>
            <p className="label">01 — About</p>
            <h2>Code is my craft,<br />details are my signature.</h2>
          </Reveal>
        </Parallax>

        <Parallax speed={-0.05}>
          <Reveal delay={150}>
            <p className="lead">{profile.about}</p>
            <div className="tags">
              {skills.map((s) => <span key={s}>{s}</span>)}
            </div>
            <div className="stats">
              {stats.map((s) => (
                <div key={s.t}>
                  <strong>{s.n}</strong>
                  <span>{s.t}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Parallax>
      </div>
    </section>
  )
}