'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { nav } from '@/lib/site';
import { ArrowRight, Calendar, ChevronRight, Close, Dots } from './Icons';

// Phone & tablet top bar: logo + "•••" button that slides up the menu.
export default function MobileTopBar({ title }) {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menu]);

  return (
    <>
      <div className="m-top m-in" style={{ '--d': 0 }}>
        <Link href="/" className="m-logo"><img src="/logo.png" alt="Ecotop Silent Media" /></Link>
        {title && <span className="m-top-title">{title}</span>}
        <button className="m-dots" onClick={() => setMenu(true)} aria-label="Open menu"><Dots width="20" height="20" /></button>
      </div>

      <div className={`m-sheet-bg ${menu ? 'open' : ''}`} onClick={() => setMenu(false)} />
      <div className={`m-sheet ${menu ? 'open' : ''}`} role="dialog" aria-label="Menu" aria-hidden={!menu}>
        <div className="m-sheet-handle" />
        <div className="m-sheet-head">
          <b>Menu</b>
          <button onClick={() => setMenu(false)} aria-label="Close menu"><Close width="18" height="18" /></button>
        </div>
        <div className="m-sheet-links">
          {nav.map((n, i) => (
            <Link key={n.href} href={n.href} onClick={() => setMenu(false)} style={{ '--i': i }}>
              <span>{String(i + 1).padStart(2, '0')}</span>{n.label}<ChevronRight width="16" height="16" />
            </Link>
          ))}
        </div>
        <Link href="/#contact" className="m-btn m-btn-dark m-sheet-cta" onClick={() => setMenu(false)}>
          <Calendar width="18" height="18" /> Book a Session <ArrowRight width="16" height="16" />
        </Link>
      </div>
    </>
  );
}
