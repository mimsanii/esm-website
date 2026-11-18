'use client';
import { useState } from 'react';
import { site, waLink, activeSocials } from '@/lib/site';
import { WhatsApp, Pin, Calendar, ArrowRight } from './Icons';

const services = ['Wedding', 'Portrait Session', 'Maternity / Baby Shower', 'Family', 'Graduation', 'Corporate Event', 'Other'];

// No server needed: the form opens WhatsApp (or email) with the details filled in.
export default function Contact() {
  const [f, setF] = useState({ name: '', phone: '', service: '', date: '', location: '', message: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const text = [
    `Hello ESM, my name is ${f.name || '…'}.`,
    f.service && `I'm interested in: ${f.service}`,
    f.date && `Date: ${f.date}`,
    f.location && `Location: ${f.location}`,
    f.phone && `My phone: ${f.phone}`,
    f.message && `\n${f.message}`,
  ].filter(Boolean).join('\n');

  const mail = `mailto:${site.email}?subject=${encodeURIComponent(`Booking enquiry – ${f.service || 'Photography'}`)}&body=${encodeURIComponent(text)}`;

  return (
    <section className="contact" id="contact">
      <div className="contact-panel">
        <div className="contact-info">
          <p className="kicker kicker-light">Contact &amp; booking</p>
          <h2>Let&apos;s create something <em>beautiful</em>.</h2>
          <p className="contact-lead">Tell us about your day and we&apos;ll get back to you with availability and packages.</p>

          <ul className="contact-list">
            <li>
              <span className="contact-ic"><WhatsApp width="18" height="18" /></span>
              <div><b>Call or WhatsApp</b><span>{site.phone}</span><span>{site.phone2}</span></div>
            </li>
            <li>
              <span className="contact-ic">@</span>
              <div><b>Email</b><span>{site.email}</span></div>
            </li>
            <li>
              <span className="contact-ic"><Pin width="18" height="18" /></span>
              <div><b>Studio</b><span>{site.address}</span><span>{site.location}</span></div>
            </li>
            {site.hours && (
              <li>
                <span className="contact-ic"><Calendar width="18" height="18" /></span>
                <div><b>Open</b><span>{site.hours}</span></div>
              </li>
            )}
          </ul>

          <div className="contact-socials">
            {activeSocials().map(([k, v]) => (
              <a key={k} href={v} target="_blank" rel="noopener noreferrer" className="cap">{k}</a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <label>Your name<input value={f.name} onChange={set('name')} placeholder="e.g. Faith Mwangi" /></label>
            <label>Phone<input value={f.phone} onChange={set('phone')} placeholder="07xx xxx xxx" /></label>
          </div>
          <div className="form-row">
            <label>Type of shoot
              <select value={f.service} onChange={set('service')}>
                <option value="">Choose one</option>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
            <label>Date<input type="date" value={f.date} onChange={set('date')} /></label>
          </div>
          <label>Location<input value={f.location} onChange={set('location')} placeholder="Venue or area" /></label>
          <label>Message<textarea rows={4} value={f.message} onChange={set('message')} placeholder="Tell us a little about your event…" /></label>

          <div className="form-actions">
            <a className="btn btn-brand btn-lg" href={waLink(text)} target="_blank" rel="noopener noreferrer">
              <WhatsApp width="18" height="18" /> Send on WhatsApp
            </a>
            <a className="btn btn-outline btn-lg" href={mail}>
              Send by email <ArrowRight width="16" height="16" />
            </a>
          </div>
        </form>
      </div>

      {site.mapEmbed && (
        <div className="contact-map">
          <iframe src={site.mapEmbed} title="ESM studio location" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      )}
    </section>
  );
}
