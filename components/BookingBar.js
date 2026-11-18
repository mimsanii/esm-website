'use client';
import { useState } from 'react';
import { waLink } from '@/lib/site';
import { Camera, Calendar, Pin, Tag, Search, Chevron } from './Icons';

// Quick availability check. Builds a pre-filled WhatsApp message, which is how most clients book.
export default function BookingBar() {
  const [form, setForm] = useState({ service: '', date: '', location: '', pkg: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const message = [
    'Hello ESM, I would like to check availability.',
    form.service && `Service: ${form.service}`,
    form.date && `Date: ${form.date}`,
    form.location && `Location: ${form.location}`,
    form.pkg && `Package: ${form.pkg}`,
  ].filter(Boolean).join('\n');

  return (
    <form className="booking" onSubmit={(e) => e.preventDefault()}>
      <label className="field">
        <Camera />
        <span>
          <b>Service</b>
          <span className="select">
            <select value={form.service} onChange={set('service')}>
              <option value="">What do you need?</option>
              <option>Wedding Photography</option>
              <option>Wedding Film</option>
              <option>Event Coverage</option>
              <option>Portrait Session</option>
              <option>Corporate / Brand</option>
              <option>Music Video</option>
            </select>
            <Chevron width="14" height="14" />
          </span>
        </span>
      </label>
      <label className="field">
        <Calendar />
        <span>
          <b>Event Date</b>
          <input type="date" value={form.date} onChange={set('date')} />
        </span>
      </label>
      <label className="field">
        <Pin />
        <span>
          <b>Location</b>
          <input type="text" placeholder="e.g. Nairobi" value={form.location} onChange={set('location')} />
        </span>
      </label>
      <label className="field">
        <Tag />
        <span>
          <b>Package</b>
          <span className="select">
            <select value={form.pkg} onChange={set('pkg')}>
              <option value="">Any package</option>
              <option>Photo only</option>
              <option>Video only</option>
              <option>Photo + Video</option>
            </select>
            <Chevron width="14" height="14" />
          </span>
        </span>
      </label>
      <a className="btn btn-brand booking-btn" href={waLink(message)} target="_blank" rel="noopener noreferrer">
        <Search width="17" height="17" /> Check Availability
      </a>
    </form>
  );
}
