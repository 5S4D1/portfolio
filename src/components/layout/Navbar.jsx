import { profile } from '../../data/portfolio'

const links = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Awards', '#achievements'],
  ['Projects', '#projects'],
  ['Certificates', '#certificates'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#hero" className="logo">{profile.initials}<span>.</span></a>
      <nav>
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
    </header>
  )
}