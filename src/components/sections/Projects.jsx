import Reveal from '../ui/Reveal'
import { projects } from '../../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <p className="label">04 — Selected work</p>
          <h2>Projects</h2>
        </Reveal>
        <div className="project-list">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <a
                href={p.link || p.repo || '#'}
                target="_blank"
                rel="noreferrer"
                className="project"
              >
                <span className="num">0{i + 1}</span>
                <span className="name">{p.title}</span>
                <span className="meta">{p.tags}</span>
                <span className="meta">{p.year}</span>
                <span className="arrow">↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}