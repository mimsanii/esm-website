'use client';
import { useEffect, useState } from 'react';

// Replace these with real ESM photos (keep landscape, about 1600px wide or more).
// Every slide fills the curved area (object-fit: cover). Optional `focus` sets
// object-position to choose which part stays in view, e.g. focus: 'center top' or '30% 50%'.
export const slides = [
  { src: '/images/slide-1.webp', label: 'Weddings' },
  { src: '/images/B1.webp', label: 'Live Events' },
  { src: '/images/photo6.webp', label: 'Portraits' },
  { src: '/images/p1.webp', label: 'Films' },
];

const INTERVAL = 5000; // time per slide in ms

// The S-curve edge, in a 0–100 box that stretches to the hero's size.
const CURVE = 'M60,0 C55,14 49,24 50,40 C51,56 44,67 24,70 C10,72 3,79 0,90';

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="slideshow">
      <div className="slideshow-mask">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.label}
            className={`slide ${i === index ? 'is-active' : ''}`}
            loading="lazy"
            style={s.focus ? { objectPosition: s.focus } : undefined}
          />
        ))}
        <div className="slideshow-shade" />
      </div>

      {/* thin gold line that follows the curve */}
      <svg className="slideshow-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d={CURVE} />
      </svg>

      <div className="slide-dots">
        <span className="slide-label">{slides[index].label}</span>
        {slides.map((s, i) => (
          <button
            key={s.src}
            className={i === index ? 'is-active' : ''}
            onClick={() => setIndex(i)}
            aria-label={`Show ${s.label}`}
          />
        ))}
      </div>
    </div>
  );
}
