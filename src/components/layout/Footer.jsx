import { profile, asset } from '../../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img src={asset('/footerLogo.svg')} alt={`${profile.name} logo`} />
        <span>© {new Date().getFullYear()} {profile.name}</span>
      </div>
    </footer>
  )
}