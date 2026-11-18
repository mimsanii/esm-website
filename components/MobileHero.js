'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { site, waLink } from '@/lib/site';
import { slides } from './HeroSlideshow';
import MobileTopBar from './MobileTopBar';
import {
  ArrowRight, Calendar, Users, Camera, Heart, Award, ChevronRight, Sparkle, Check,
  WhatsApp, Instagram, TikTok, YouTube, Facebook, Phone,
} from './Icons';

// Phone & tablet homepage top (shown at 1024px and below). Desktop keeps the original hero.
const thumb = (src) => src.replace('/images/', '/images/thumbs/').replace(/\.(jpe?g|png|webp)$/i, '.webp');

const shortcuts = [
  { icon: Camera, title: 'Portraits', sub: 'Studio shoots', href: '/gallery/#portraits' },
  { icon: Heart, title: 'Maternity', sub: 'Baby showers', href: '/gallery/#maternity', dark: true },
  { icon: Users, title: 'Corporate', sub: 'Events & brands', href: '/gallery/#corporate' },
];

// Which right-side backdrop to use: 'sheet', 'lens', 'curve' or 'lens-curve' (chosen)
const LAYER = 'lens-curve';

const strip = ['photo21.webp', 'w5.webp', 'cor33.webp', 'slide-3.webp', 'photo24.webp', 'wedd16.webp'];

export default function MobileHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);


  const socials = [
    { icon: WhatsApp, href: waLink('Hello ESM, I would like to make an enquiry.'), label: 'WhatsApp', hot: true },
    { icon: Instagram, href: site.socials.instagram, label: 'Instagram' },
    { icon: TikTok, href: site.socials.tiktok, label: 'TikTok' },
    { icon: YouTube, href: site.socials.youtube, label: 'YouTube' },
    { icon: Facebook, href: site.socials.facebook, label: 'Facebook' },
  ].filter((x) => x.href);

  return (
    <section className="m-hero" id="top-mobile" data-layer={LAYER}>
      {/* Right-side backdrop. Chosen design: the brand curve with the camera-lens ring (LAYER = 'lens-curve'). */}
      {LAYER === 'sheet' && (
        <svg className="m-layer m-sheet-layer" viewBox="0 0 390 640" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="mSheetFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#fff8f1" />
            </linearGradient>
          </defs>
          <path className="m-layer-fill" d="M246,0 C296,36 314,118 306,200 C298,286 300,356 328,398 C346,424 372,436 390,438 L390,0 Z" />
          <path className="m-layer-line" d="M246,0 C296,36 314,118 306,200 C298,286 300,356 328,398 C346,424 372,436 390,438" />
        </svg>
      )}
      {(LAYER === 'curve' || LAYER === 'lens-curve') && (
        <svg className="m-layer m-curve-layer" viewBox="0 0 390 640" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="mCurveFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#d7261e" /><stop offset=".55" stopColor="#8e1b1b" /><stop offset="1" stopColor="#3a0d0d" />
            </linearGradient>
          </defs>
          <path className="m-layer-fill" d="M228,0 C206,92 330,138 302,236 C280,316 322,396 390,432 L390,0 Z" />
          <path className="m-layer-line" d="M228,0 C206,92 330,138 302,236 C280,316 322,396 390,432" />
        </svg>
      )}

      {/* Leaves peeking from the edges */}
      <svg className="m-leaf leaf-r" viewBox="0 0 120 70" aria-hidden="true">
        <defs>
          <linearGradient id="mLeafA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8e1b1b" /><stop offset="1" stopColor="#3a0d0d" /></linearGradient>
          <linearGradient id="mLeafB" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f7c160" /><stop offset="1" stopColor="#c9821a" /></linearGradient>
        </defs>
        <path d="M2,62 C22,14 74,2 118,4 C104,44 62,74 2,62 Z" fill="url(#mLeafA)" />
        <path d="M2,62 C40,44 78,22 118,4" />
      </svg>
      <svg className="m-leaf leaf-r2" viewBox="0 0 120 70" aria-hidden="true">
        <path d="M2,62 C22,14 74,2 118,4 C104,44 62,74 2,62 Z" fill="url(#mLeafB)" />
        <path d="M2,62 C40,44 78,22 118,4" />
      </svg>
      <svg className="m-leaf leaf-l" viewBox="0 0 120 70" aria-hidden="true">
        <path d="M2,62 C22,14 74,2 118,4 C104,44 62,74 2,62 Z" fill="url(#mLeafA)" />
        <path d="M2,62 C40,44 78,22 118,4" />
      </svg>

      <MobileTopBar />

      {/* Blob photo + orbit */}
      <div className="m-stage m-in" style={{ '--d': 1 }}>
        <svg className="m-orbit" viewBox="0 0 300 300" aria-hidden="true">
          <ellipse cx="150" cy="150" rx="140" ry="92" transform="rotate(-24 150 150)" />
          <ellipse cx="150" cy="150" rx="128" ry="70" transform="rotate(32 150 150)" />
        </svg>
        {(LAYER === 'lens' || LAYER === 'lens-curve') && (
          <svg className="m-lens" viewBox="-180 -180 360 360" aria-hidden="true">
            <defs>
              <linearGradient id="mLensFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#fff" /><stop offset=".66" stopColor="#fff" /><stop offset=".84" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
              <mask id="mLensMask" maskUnits="userSpaceOnUse" x="-180" y="-180" width="360" height="360">
                <rect x="-180" y="-180" width="360" height="360" fill="url(#mLensFade)" />
              </mask>
            </defs>
            <g mask="url(#mLensMask)">
              <circle className="m-lens-disc" r="158" />
              <g className="m-lens-ring">
                <circle r="174" />
                {Array.from({ length: 72 }).map((_, i) => (
                  <line key={i} x1="0" y1={-174} x2="0" y2={i % 6 === 0 ? -161 : -168} transform={`rotate(${i * 5})`} />
                ))}
              </g>
              <circle className="m-lens-inner" r="146" />
            </g>
          </svg>
        )}
        <div className="m-blob">
          <span className="m-blob-shine" />
          {slides.map((s, i) => (
            <img key={s.src} src={thumb(s.src)} alt={s.label} className={i === index ? 'on' : ''} loading={i === 0 ? 'eager' : 'lazy'} />
          ))}
        </div>
        <span className="m-ball b1" /><span className="m-ball b2" /><span className="m-ball b3" /><span className="m-ball b4" />
        <div className="m-chip"><span>Photo<br />Studio</span><Sparkle width="16" height="16" className="m-twinkle" /></div>
        <span className="m-slide-label" key={index}>{slides[index].label}</span>
      </div>

      {/* Social dock */}
      <nav className="m-dock m-in" style={{ '--d': 2 }} aria-label="Social links">
        {socials.map(({ icon: Icon, href, label, hot }, i) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={hot ? 'hot' : ''} style={{ '--i': i }}>
            <Icon width="19" height="19" />
          </a>
        ))}
        <span className="m-dock-line" />
        <a href={`tel:${site.phone.replace(/\s/g, '')}`} aria-label="Call ESM" style={{ '--i': 5 }}><Phone width="18" height="18" /></a>
      </nav>

      {/* Name + intro */}
      <div className="m-intro m-in" style={{ '--d': 2 }}>
        <h1>Ecotop Silent Media <span className="m-verified"><Check width="12" height="12" strokeWidth="3" /></span></h1>
        <p className="m-sub">Weddings • Portraits • Events</p>
        <p className="m-text">Your imagination, our technology. We capture the moments you&apos;ll want to relive.</p>
        <div className="m-actions">
          <Link href="/#contact" className="m-btn m-btn-dark m-shine"><Calendar width="18" height="18" /> Book a Session <ArrowRight width="16" height="16" /></Link>
          <Link href="/#about" className="m-btn m-btn-light"><Users width="18" height="18" /> Our Story</Link>
        </div>
      </div>

      {/* Featured + shortcuts */}
      <div className="m-grid">
        <Link href="/gallery/#weddings" className="m-featured m-in" style={{ '--d': 3 }}>
          <img src="/images/thumbs/w8.webp" alt="" loading="lazy" />
          <span className="m-tag"><Sparkle width="13" height="13" /> Featured</span>
          <div className="m-featured-body">
            <h2>Wedding<br />Stories</h2>
            <p>Every little detail.</p>
          </div>
          <span className="m-round"><ArrowRight width="18" height="18" /></span>
        </Link>
        <div className="m-list">
          {shortcuts.map(({ icon: Icon, title, sub, href, dark }, i) => (
            <Link href={href} className="m-row m-in" style={{ '--d': 3 + i * 0.6 }} key={title}>
              <span className={`m-row-ic ${dark ? 'dark' : ''}`}><Icon width="19" height="19" /></span>
              <span className="m-row-text"><b>{title}</b><small>{sub}</small></span>
              <ChevronRight width="16" height="16" />
            </Link>
          ))}
        </div>
      </div>

      {/* Now booking bar */}
      <Link href="/#contact" className="m-now m-in" style={{ '--d': 5 }}>
        <img src="/images/thumbs/photo21.webp" alt="" loading="lazy" />
        <div className="m-now-text"><small>Now Booking</small><b>Your date, our lens</b><span>Weddings · Shoots · Events</span></div>
        <div className="m-wave" aria-hidden="true">{Array.from({ length: 16 }).map((_, i) => <i key={i} style={{ '--i': i }} />)}</div>
        <span className="m-round light"><ArrowRight width="16" height="16" /></span>
      </Link>

      {/* Quote card */}
      <div className="m-quote m-in" style={{ '--d': 6 }}>
        <span className="m-row-ic"><Award width="19" height="19" /></span>
        <div><b>Get a Free Quote</b><small>Tell us your date. We reply on WhatsApp.</small></div>
        <a href={waLink('Hello ESM, I would like a quote.')} target="_blank" rel="noopener noreferrer" className="m-pill">Chat <ArrowRight width="14" height="14" /></a>
      </div>

      {/* Photo strip */}
      <div className="m-strip-head m-in" style={{ '--d': 7 }}>
        <b>Recent moments</b>
        <Link href="/gallery/">See all <ArrowRight width="14" height="14" /></Link>
      </div>
      <div className="m-strip m-in" style={{ '--d': 7 }}>
        {strip.map((f) => (
          <Link href="/gallery/" key={f}><img src={`/images/thumbs/${f}`} alt="" loading="lazy" /></Link>
        ))}
      </div>

    </section>
  );
}
