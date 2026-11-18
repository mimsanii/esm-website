'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { categories, photos, slugs } from '@/lib/gallery';
import { ArrowRight, Close } from './Icons';

const filters = ['All', ...Object.keys(categories)];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [open, setOpen] = useState(-1); // index in `shown`, -1 = closed

  const shown = useMemo(() => (filter === 'All' ? photos : photos.filter((p) => p.category === filter)), [filter]);
  // Open on a category from the address, e.g. /gallery/#weddings
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.slice(1);
      const match = Object.keys(slugs).find((k) => slugs[k] === h);
      setFilter(match || 'All');
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  const pick = (f) => {
    setFilter(f);
    try { history.replaceState(null, '', f === 'All' ? window.location.pathname : `#${slugs[f]}`); } catch {}
  };

  const go = useCallback((step) => setOpen((i) => (i + step + shown.length) % shown.length), [shown.length]);

  // Keyboard: ← → to move, Esc to close. Lock page scroll while open.
  useEffect(() => {
    if (open < 0) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(-1);
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, go]);

  // Swipe on phones
  const [touchX, setTouchX] = useState(null);

  return (
    <>
      <div className="g-filters" role="tablist" aria-label="Gallery categories">
        {filters.map((f) => (
          <button key={f} role="tab" aria-selected={filter === f} className={filter === f ? 'active' : ''} onClick={() => pick(f)}>
            {f}
            <span>{f === 'All' ? photos.length : categories[f].length}</span>
          </button>
        ))}
      </div>

      <div className="g-grid">
        {shown.map((p, i) => (
          <button key={p.src} className="g-item" onClick={() => setOpen(i)} aria-label={`Open ${p.category} photo`}>
            <img
              src={p.thumb}
              alt={`${p.category} photography by Ecotop Silent Media`}
              loading="lazy"
              onError={(e) => { if (!e.currentTarget.dataset.full) { e.currentTarget.dataset.full = '1'; e.currentTarget.src = p.src; } }}
            />
            <span className="g-tag">{p.category}</span>
          </button>
        ))}
      </div>

      {open >= 0 && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(-1)}
          onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX === null) return;
            const dx = e.changedTouches[0].clientX - touchX;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            setTouchX(null);
          }}
        >
          <img key={shown[open].src} src={shown[open].src} alt="" onClick={(e) => e.stopPropagation()} />
          <button className="lb-btn lb-close" onClick={() => setOpen(-1)} aria-label="Close"><Close /></button>
          <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous"><ArrowRight /></button>
          <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next"><ArrowRight /></button>
          <p className="lb-count">{shown[open].category} · {open + 1} / {shown.length}</p>
        </div>
      )}
    </>
  );
}
