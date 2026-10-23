import Parallax from '../ui/Parallax'
import Reveal from '../ui/Reveal'
import { profile } from '../../data/portfolio'

export default function Hero() {
  const [a, b, c] = profile.tagline
  return (
    <section id="hero" className="section hero">
      <Parallax speed={0.25} className="hero-ghost">
        {/* <span>ENGINEER</span> */}
        <span>SHEIKH SADI</span>
      </Parallax>

      <div className="container">
        <Reveal>
          <p className="label">// {profile.role}</p>
        </Reveal>
        <Parallax speed={0.08}>
          <Reveal delay={100}>
            <h1>
              {a}<br />
              <em>{b}</em> {c}
            </h1>
          </Reveal>
        </Parallax>
        <Reveal delay={200}>
          <p className="lead">Hi, I'm {profile.name}. {profile.intro}</p>
        </Reveal>
        <Reveal delay={300}>
          <div className="btn-row">
            <a className="btn primary" href="#experience">My journey</a>
            <a className="btn" href="#contact">Contact me</a>
          </div>
        </Reveal>
      </div>

      <div className="scroll-hint">SCROLL ↓</div>
    </section>
  )
}