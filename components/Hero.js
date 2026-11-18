import Link from 'next/link';
import BookingBar from './BookingBar';
import HeroSlideshow from './HeroSlideshow';
import { ArrowRight, Heart, Camera, Users, Award, Plus } from './Icons';
import { waLink } from '@/lib/site';

// What ESM shoots — each opens the gallery on that category.
const stats = [
  { icon: Heart, value: 'Weddings', label: 'Ceremonies &\nreceptions', href: '/gallery/#weddings' },
  { icon: Camera, value: 'Portraits', label: 'Studio &\noutdoor', href: '/gallery/#portraits' },
  { icon: Award, value: 'Maternity', label: 'Bumps &\nbaby showers', href: '/gallery/#maternity' },
  { icon: Users, value: 'Corporate', label: 'Events &\nbrands', href: '/gallery/#corporate' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Capture <span /> Create <span /> Tell <span /> Remember</p>
        <h1 className="hero-title">
          <span className="accent">Your Imagination,</span>
          <br />
          Our Technology.
        </h1>
        <p className="hero-sub">
          Photography for weddings, portraits, maternity, events and brands across Kenya.
          We don&apos;t just take pictures. We tell the story you&apos;ll want to relive.
        </p>
        <div className="hero-ctas">
          <Link href="/gallery/" className="btn btn-dark btn-lg">
            View Our Work <ArrowRight width="18" height="18" />
          </Link>
          <Link href="/#contact" className="play-link">
            <span className="play-circle"><ArrowRight width="16" height="16" /></span>
            Talk to Us
          </Link>
        </div>
      </div>

      <HeroSlideshow />

      <ul className="hero-side" aria-hidden="true">
        <li>Photography</li>
        <li>Videography</li>
        <li>Storytelling</li>
        <li>Nairobi, Kenya</li>
      </ul>

      <BookingBar />

      <div className="hero-cards">
        <article className="card card-featured">
          <div className="card-featured-img">
            <img src="/images/thumbs/w8.webp" alt="Featured wedding story" />
            <span className="chip">Featured Story</span>
            <button className="heart" aria-label="Save"><Heart width="16" height="16" /></button>
          </div>
          <div className="card-featured-body">
            <div>
              <h3>A Garden Wedding Story</h3>
              <p className="rating"><span>Wedding · Nairobi</span></p>
              <p className="muted">A garden ceremony captured from first look to last dance.</p>
            </div>
            <Link href="/gallery/" className="round-btn" aria-label="View story"><ArrowRight width="18" height="18" /></Link>
          </div>
        </article>

        <article className="card card-stats">
          <div className="stats">
            {stats.map(({ icon: Icon, value, label, href }) => (
              <Link href={href} className="stat" key={value}>
                <Icon width="22" height="22" />
                <strong>{value}</strong>
                <span>{label}</span>
              </Link>
            ))}
          </div>
          <div className="stats-quote">
            <Link href="/gallery/" className="avatars" aria-label="Open the gallery">
              {['photo21', 'slide-2', 'photo24'].map((n) => <img key={n} src={`/images/thumbs/${n}.webp`} alt="" />)}
              <span className="avatar-plus"><Plus width="16" height="16" /></span>
            </Link>
            <div>
              <p className="quote">Trusted by couples, families and brands across Kenya.</p>
              <a className="quote-by quote-link" href={waLink('Hello ESM, I would like to check availability.')} target="_blank" rel="noopener noreferrer">Check your date on WhatsApp →</a>
            </div>
          </div>
        </article>

        <Link href="/gallery/" className="card card-video">
          <img src="/images/thumbs/w6.webp" alt="" />
          <span className="play-circle play-circle-light"><ArrowRight width="18" height="18" /></span>
          <div>
            <h3>Real Moments.<br />Real Stories.</h3>
            <p>Explore the gallery</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
