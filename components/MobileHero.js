'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { slides } from './HeroSlideshow';
import MobileTopBar from './MobileTopBar';
import { ArrowRight, Heart } from './Icons';

// Phone & tablet homepage top (Concept C). Desktop keeps the original hero.
const thumb = (src) => src.replace('/images/', '/images/thumbs/').replace(/\.(jpe?g|png|webp)$/i, '.webp');

// Headline for each slideshow label: "<word>, Captured."
const headline = { Weddings: 'Love', 'Live Events': 'Every Beat', Events: 'Every Beat', Portraits: 'You', Films: 'Culture', Maternity: 'New Life', Family: 'Family' };

const categories = [
  { label: 'Weddings', img: 'slide-2', href: '/gallery/#weddings' },
  { label: 'Portraits', img: 'photo6', href: '/gallery/#portraits' },
  { label: 'Maternity', img: 'photo20', href: '/gallery/#maternity' },
  { label: 'Family', img: 'photo24', href: '/gallery/#family' },
  { label: 'Events', img: 'core20', href: '/gallery/#corporate' },
];

export default function MobileHero() {
  const [index, setIndex] = useState(0);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="c-hero" id="top-mobile">
      <MobileTopBar />

      <div className="c-hero-card">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={thumb(s.src)}
            alt={s.label}
            className={i === index ? 'on' : ''}
            loading={i === 0 ? 'eager' : 'lazy'}
            style={s.focus ? { objectPosition: s.focus } : undefined}
          />
        ))}
        <div className="c-hero-shade" />
        <button className={`c-heart ${saved ? 'on' : ''}`} onClick={() => setSaved(!saved)} aria-label="Save" aria-pressed={saved}>
          <Heart width="19" height="19" />
        </button>
        <div className="c-hero-text">
          <span className="c-eyebrow" key={index}>{slides[index].label}</span>
          <h1 key={`h${index}`}>{headline[slides[index].label] || 'Moments'},<br />Captured.</h1>
          <Link href="/#contact" className="c-pill">BOOK THE DATE <ArrowRight width="13" height="13" /></Link>
        </div>
        <div className="c-dots" aria-hidden="true">
          {slides.map((s, i) => <i key={s.src} className={i === index ? 'on' : ''} />)}
        </div>
      </div>

      {/* curved strip with category circles */}
      <nav className="c-cats" aria-label="Browse by category">
        {categories.map((c, i) => (
          <Link href={c.href} key={c.label} style={{ '--i': i }}>
            <img src={`/images/thumbs/${c.img}.webp`} alt="" />
            {c.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
