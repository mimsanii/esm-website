import { waLink } from '@/lib/site';
import { WhatsApp, Plus } from './Icons';

// Edit the answers to match ESM's real policies.
const faqs = [
  {
    q: 'How do I book a session?',
    a: 'Send us a message on WhatsApp or fill in the contact form below with your date, location and the type of shoot. We confirm availability, share our packages, and your date is secured once the booking deposit is paid.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'For weddings, book as early as possible, ideally 2–3 months ahead, especially for weekends. Portrait, maternity and graduation sessions can often be booked within a week or two.',
  },
  {
    q: 'When will I receive my photos?',
    a: 'Portrait sessions are usually delivered within a few days. Weddings and large events take longer because every photo is carefully edited. We give you the exact timeline when you book.',
  },
  {
    q: 'Do you travel outside Nairobi?',
    a: 'Yes. We cover events across Kenya. Travel and accommodation costs for locations outside Nairobi are added to your package and agreed before the shoot.',
  },
  {
    q: 'How will I receive my photos?',
    a: 'You get a private online gallery to view, download and share your edited photos in high resolution. Printed photos and albums can be arranged on request.',
  },
  {
    q: 'Can we do a shoot at your studio?',
    a: 'Yes. We have a studio set-up for portraits, maternity, family and product shoots, or we can come to a location of your choice.',
  },
];

export default function FAQ() {
  return (
    <section className="section-soft faq-wrap" id="faq">
      <div className="faq">
        <div className="faq-intro">
          <p className="kicker">FAQ</p>
          <h2 className="h2">Questions, <em>answered</em>.</h2>
          <p className="faq-note">Everything you need to know before your shoot. Can&apos;t find your answer?</p>
          <a className="btn btn-dark" href={waLink('Hello ESM, I have a question.')} target="_blank" rel="noopener noreferrer">
            <WhatsApp width="18" height="18" /> Ask us on WhatsApp
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} className="faq-item" open={i === 0}>
              <summary>
                <span className="faq-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq-q">{f.q}</span>
                <span className="faq-icon"><Plus width="18" height="18" /></span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
