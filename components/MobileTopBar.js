'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { nav, waLink } from '@/lib/site';
import { ArrowRight, Calendar, ChevronRight, Close, Menu, WhatsApp } from './Icons';

// Phone & tablet top bar (Concept C): menu left, wordmark (or page title) centre, WhatsApp right.
export default function MobileTopBar({ title }) {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menu]);

  return (
    <>
      <div className="c-top">
        <button className="c-icon" onClick={() => setMenu(true)} aria-label="Open menu"><Menu width="22" height="22" /></button>
        {title ? (
          <span className="c-top-title">{title}</span>
        ) : (
          <Link href="/" className="c-wordmark" aria-label="Ecotop Silent Media home">
            <span>ECOTOP</span>
            <small>SILENT MEDIA</small>
          </Link>
        )}
        <a className="c-icon c-icon-round" href={waLink('Hello ESM, I would like to make an enquiry.')} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <WhatsApp width="19" height="19" />
        </a>
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
        <Link href="/#contact" className="c-btn c-btn-red m-sheet-cta" onClick={() => setMenu(false)}>
          <Calendar width="18" height="18" /> Book a Session <ArrowRight width="16" height="16" />
        </Link>
      </div>
    </>
  );
}
