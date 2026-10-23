import Reveal from '../ui/Reveal'
import { achievements, otherActivities } from '../../data/portfolio'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <Reveal>
          <p className="label">03 — Achievements</p>
          <h2>Awards &amp; <em>competitions</em>.</h2>
        </Reveal>

        <div className="award-grid">
          {achievements.map((a, i) => (
            <Reveal key={a.event} delay={i * 80}>
              <div className="award">
                <span className="rank">{a.rank}</span>
                <h3>{a.event}</h3>
                {a.detail && <p>{a.detail}</p>}
                <span className="year">{a.year}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="label more">Also participated in</p>
          <div className="tags">
            {otherActivities.map((t) => <span key={t}>{t}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}