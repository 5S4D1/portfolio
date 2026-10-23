import { useEffect, useRef } from 'react'

export default function Parallax({ speed = 0.15, children, className = '' }) {
  const outer = useRef(null)
  const inner = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    let raf = 0
    const update = () => {
      raf = 0
      const rect = outer.current.getBoundingClientRect()
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2
      inner.current.style.transform = `translate3d(0, ${-offset * speed}px, 0)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [speed])

  return (
    <div ref={outer} className={className}>
      <div ref={inner} className="parallax-inner">{children}</div>
    </div>
  )
}