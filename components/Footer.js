import Link from 'next/link';
import { nav, site, activeSocials } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <img src="/logo.png" alt="Ecotop Silent Media" className="footer-logo" />
          <p className="footer-tag">{site.tagline}</p>
        </div>
        <div>
          <h4>Explore</h4>
          {nav.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
        </div>
        <div>
          <h4>Contact</h4>
          <span>{site.phone}</span>
          <span>{site.email}</span>
          <span>{site.phone2}</span>
          <span>{site.address}, {site.location}</span>
        </div>
        <div>
          <h4>Follow</h4>
          {activeSocials().map(([k, v]) => (
            <a key={k} href={v} target="_blank" rel="noopener noreferrer" className="cap">{k}</a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p className="footer-credit">
          Crafted with <span className="footer-heart">Love</span> and passion · by{' '}
          <span className="footer-author">#mimsanii</span>
        </p>
      </div>
    </footer>
  );
}