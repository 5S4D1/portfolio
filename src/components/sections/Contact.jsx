import Parallax from '../ui/Parallax'
import Reveal from '../ui/Reveal'
import { profile } from '../../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container center">
        <Parallax speed={0.1}>
          <Reveal>
            <p className="label">06 — Contact</p>
            <h2>Let's build something <em>great</em>.</h2>
            <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
            <div className="btn-row socials">
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </Reveal>
        </Parallax>
      </div>
    </section>
  )
}