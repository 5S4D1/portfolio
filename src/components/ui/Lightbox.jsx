import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function Lightbox({ item, onClose }) {
    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose()
        const prevOverflow = document.body.style.overflow
        document.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = prevOverflow
        }
    }, [onClose])

    return createPortal(
        <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
            <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
                <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
                <img src={item.image} alt={item.title} />
                <div className="lightbox-info">
                    <div>
                        <span className="issuer">{item.issuer}</span>
                        <h3>{item.title}</h3>
                    </div>
                    {item.link && (
                        <a className="btn primary" href={item.link} target="_blank" rel="noreferrer">
                            Verify credential ↗
                        </a>
                    )}
                </div>
            </div>
        </div>,
        document.body
    )
}