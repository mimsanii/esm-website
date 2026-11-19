'use client';
import { useEffect, useState } from 'react';
import { site, waLink } from '@/lib/site';
import { Camera, Heart, Users, Award, Calendar, WhatsApp, Pin } from './Icons';

// Phone & tablet booking (Concept C): 1 shoot type, 2 date, 3 details, then WhatsApp.
const CapIcon = (p) => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" {...p}><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></svg>);
const BagIcon = (p) => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>);

const shoots = [
  { label: 'Wedding', icon: Heart },
  { label: 'Portrait', icon: Camera },
  { label: 'Maternity', icon: Award },
  { label: 'Family', icon: Users },
  { label: 'Graduation', icon: CapIcon },
  { label: 'Corporate', icon: BagIcon },
];

const DAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const pretty = (s) => { if (!s) return ''; const d = new Date(`${s}T12:00:00`); return `${DAY[d.getDay()].slice(0, 1)}${DAY[d.getDay()].slice(1).toLowerCase()} ${d.getDate()} ${MONTH[d.getMonth()]}`; };

export default function MobileBook() {
  const [shoot, setShoot] = useState('');
  const [date, setDate] = useState('');
  const [days, setDays] = useState([]);
  const [f, setF] = useState({ name: '', phone: '', location: '', message: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  // Next 7 days, worked out in the visitor's browser
  useEffect(() => {
    const out = [];
    const now = new Date();
    for (let i = 1; i <= 7; i++) { const d = new Date(now); d.setDate(now.getDate() + i); out.push(d); }
    setDays(out);
  }, []);

  const step = shoot ? (date ? 3 : 2) : 1;
  const text = [
    `Hello ESM, my name is ${f.name || '…'}.`,
    shoot && `I'd like to book: ${shoot}`,
    date && `Date: ${pretty(date)}`,
    f.location && `Location: ${f.location}`,
    f.phone && `My phone: ${f.phone}`,
    f.message && `\n${f.message}`,
  ].filter(Boolean).join('\n');

  return (
    <div className="c-book">
      <span className="c-eyebrow c-eyebrow-red">CONTACT &amp; BOOKING</span>
      <h2 className="c-book-title">Book a <em>session</em></h2>
      <div className="c-progress" aria-hidden="true">
        {[1, 2, 3].map((n) => <i key={n} className={n <= step ? 'on' : ''} />)}
      </div>

      <h3>1. What are we shooting?</h3>
      <div className="c-shoots">
        {shoots.map(({ label, icon: Icon }) => (
          <button type="button" key={label} className={shoot === label ? 'on' : ''} aria-pressed={shoot === label} onClick={() => setShoot(label)}>
            <Icon width="22" height="22" />{label}
          </button>
        ))}
      </div>

      <h3>2. Pick a date</h3>
      <div className="c-days">
        {days.map((d) => {
          const v = iso(d);
          return (
            <button type="button" key={v} className={date === v ? 'on' : ''} aria-pressed={date === v} onClick={() => setDate(v)}>
              {DAY[d.getDay()]}<b>{d.getDate()}</b>
            </button>
          );
        })}
      </div>
      <label className="c-field c-field-date">
        <span><Calendar width="16" height="16" /> Or choose another date</span>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>

      <h3>3. Your details</h3>
      <div className="c-fields">
        <label className="c-field">Name<input value={f.name} onChange={set('name')} placeholder="e.g. Faith Mwangi" /></label>
        <div className="c-row2">
          <label className="c-field">Phone<input value={f.phone} onChange={set('phone')} placeholder="07xx xxx xxx" inputMode="tel" /></label>
          <label className="c-field">Location<input value={f.location} onChange={set('location')} placeholder="Venue or area" /></label>
        </div>
        <label className="c-field">Message (optional)<textarea rows={3} value={f.message} onChange={set('message')} placeholder="Number of guests, ideas, questions…" /></label>
      </div>

      <div className="c-summary">
        <div className="c-summary-line">
          <span>Your request</span>
          <b>{shoot || 'Choose a shoot'}{date ? ` · ${pretty(date)}` : ''}</b>
        </div>
        <a className="c-btn c-btn-gold" href={waLink(text)} target="_blank" rel="noopener noreferrer">
          <WhatsApp width="18" height="18" /> Send on WhatsApp
        </a>
        <a className="c-summary-mail" href={`mailto:${site.email}?subject=${encodeURIComponent(`Booking enquiry – ${shoot || 'Photography'}`)}&body=${encodeURIComponent(text)}`}>
          or send by email
        </a>
      </div>

      <div className="c-contacts">
        <a href={`tel:${site.phone.replace(/\s/g, '')}`}><small>CALL</small>{site.phone}</a>
        <div><small><Pin width="12" height="12" /> STUDIO</small>{site.address}</div>
      </div>
    </div>
  );
}
