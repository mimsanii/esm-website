'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav, waLink } from '@/lib/site';
import { ArrowRight, Menu, Close, WhatsApp } from './Icons';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === '/';
  const [current, setCurrent] = useState(onHome ? 'top' : 'gallery');

  // On the homepage, highlight the menu item for the section in view.
  useEffect(() => {
    if (!onHome) { setCurrent(pathname.startsWith('/gallery') ? 'gallery' : ''); return; }
    const ids = nav.filter((n) => n.href.startsWith('/#')).map((n) => n.id);
    const onScroll = () => {
      let active = 'top';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) active = id;
      }
      setCurrent(active);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onHome, pathname]);

  return (
    <header className="nav">
      <Link href="/" className="nav-logo" aria-label="Ecotop Silent Media home">
        <img src="/logo.png" alt="Ecotop Silent Media" />
      </Link>

      <nav className={`nav-pill ${open ? 'is-open' : ''}`} aria-label="Main">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={item.id === current ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="nav-actions">
        <a className="icon-btn" href={waLink('Hello ESM, I would like to make an enquiry.')} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <WhatsApp width="19" height="19" />
        </a>
        <Link href="/#contact" className="btn btn-dark btn-arrow">
          Book a Session
          <span className="btn-arrow-circle"><ArrowRight width="16" height="16" /></span>
        </Link>
        <button className="icon-btn nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
