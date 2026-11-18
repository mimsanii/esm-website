'use client';
import { useEffect, useState } from 'react';
import { waLink } from '@/lib/site';
import { WhatsApp } from './Icons';

// Appears once you scroll past the top of the page (the hero already has WhatsApp buttons).
export default function WhatsAppButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      className={`wa-float ${show ? 'show' : ''}`}
      href={waLink('Hello ESM, I would like to make an enquiry.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ESM on WhatsApp"
    >
      <WhatsApp />
    </a>
  );
}
