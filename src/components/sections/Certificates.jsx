import { useState } from 'react'
import Reveal from '../ui/Reveal'
import Lightbox from '../ui/Lightbox'
import { certificates, certificatesVisible } from '../../data/portfolio'

function CertContent({ c }) {
  return (
    <>
      {c.image && (
        <div className="cert-thumb">
          <img src={c.image} alt={c.title} loading="lazy" />
        </div>
      )}
      <div className="cert-info">
        <span className="issuer">{c.issuer}</span>
        <h3>{c.title}</h3>
        <span className="year">
          {c.year} {c.image ? '· View ⤢' : c.link ? '↗' : ''}
        </span>
      </div>
    </>
  )
}

function CertCard({ c, onOpen }) {
  if (c.image) {
    return (
      <button type="button" className="cert" onClick={() => onOpen(c)}>
        <CertContent c={c} />
      </button>
    )
  }
  if (c.link) {
    return (
      <a className="cert" href={c.link} target="_blank" rel="noreferrer">
        <CertContent c={c} />
      </a>
    )
  }
  return (
    <div className="cert">
      <CertContent c={c} />
    </div>
  )
}

export default function Certificates() {
  const [showAll, setShowAll] = useState(false)
  const [active, setActive] = useState(null)

  const list = showAll ? certificates : certificates.slice(0, certificatesVisible)
  const hiddenCount = certificates.length - certificatesVisible

  const toggle = () => {
    if (showAll) {
      document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })
    }
    setShowAll(!showAll)
  }

  return (
    <section id="certificates" className="section">
      <div className="container">
        <Reveal>
          <p className="label">05 — Certifications</p>
          <h2>Badges &amp; <em>certificates</em>.</h2>
        </Reveal>

        <div className="cert-grid">
          {list.map((c, i) => (
            <Reveal key={c.title + i} delay={(i % 3) * 80}>
              <CertCard c={c} onOpen={setActive} />
            </Reveal>
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="see-more">
            <button type="button" className="btn" onClick={toggle}>
              {showAll ? 'Show less ↑' : `See all (${certificates.length}) ↓`}
            </button>
          </div>
        )}
      </div>

      {active && <Lightbox item={active} onClose={() => setActive(null)} />}
    </section>
  )
}