import Reveal from '../ui/Reveal'
import { experience } from '../../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <p className="label">02 — Experience</p>
          <h2>Where I've <em>worked</em>.</h2>
        </Reveal>

        <div className="timeline">
          {experience.map((e, i) => (
            <Reveal key={e.org + e.period} delay={i * 100}>
              <article className={`tl-item ${e.current ? 'current' : ''}`}>
                <span className="tl-dot" />
                <div className="tl-period">
                  {e.period}
                  {e.current && <b className="now">NOW</b>}
                </div>
                <h3>{e.role}</h3>
                <p className="tl-org">
                  {e.org}
                  {e.project && <span> · {e.project}</span>}
                </p>
                <ul>
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <div className="tags small">
                  {e.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}