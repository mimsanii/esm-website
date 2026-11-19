'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { waLink } from '@/lib/site';
import { Calendar, WhatsApp } from './Icons';

const HomeIcon = (p) => (<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" {...p}><path d="M4 10.5L12 4l8 6.5V20h-5v-6h-6v6H4z" /></svg>);
const GridIcon = (p) => (<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" /></svg>);
const UserIcon = (p) => (<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...p}><circle cx="12" cy="8" r="3.5" /><path d="M5 20a7 7 0 0 1 14 0" /></svg>);

// Phone & tablet bottom tab bar (Concept C). Highlights the tab for the page/section in view.
export default function MobileTabBar() {
  const pathname = usePathname();
  const onGallery = pathname.startsWith('/gallery');
  const [section, setSection] = useState('home');

  useEffect(() => {
    if (onGallery) return;
    const onScroll = () => {
      let s = 'home';
      for (const id of ['about', 'contact']) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) s = id;
      }
      // About stops being "current" once FAQ starts
      const faq = document.getElementById('faq');
      if (s === 'about' && faq && faq.getBoundingClientRect().top < window.innerHeight * 0.5) s = 'home';
      setSection(s);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onGallery]);

  const active = onGallery ? 'gallery' : section;

  return (
    <nav className="c-tabbar mobile-only" aria-label="Main">
      <Link href="/" className={active === 'home' ? 'on' : ''}><HomeIcon />Home</Link>
      <Link href="/gallery/" className={active === 'gallery' ? 'on' : ''}><GridIcon />Gallery</Link>
      <Link href="/#contact" className={`c-tab-book ${active === 'contact' ? 'on' : ''}`} aria-label="Book a session"><Calendar width="22" height="22" /></Link>
      <Link href="/#about" className={active === 'about' ? 'on' : ''}><UserIcon />About</Link>
      <a href={waLink('Hello ESM, I would like to make an enquiry.')} target="_blank" rel="noopener noreferrer"><WhatsApp width="20" height="20" />Chat</a>
    </nav>
  );
}
