import Link from 'next/link';
import { ArrowRight } from './Icons';

const work = [
  { img: '/images/slide-2.webp', title: 'Garden Wedding', cat: 'Weddings', size: 'tall' },
  { img: '/images/B1.webp', title: 'Worship Night Live', cat: 'Events', size: 'wide' },
  { img: '/images/photo9.webp', title: 'Golden Hour Portraits', cat: 'Portraits' },
  { img: '/images/cor88.webp', title: 'Co-operate', cat: 'Commercial' },
  { img: '/images/wedd11.webp', title: 'Ruracio Ceremony', cat: 'Weddings', size: 'wide' },
];

export default function FeaturedWork() {
  return (
    <section className="section section-soft">
      <div className="section-head">
        <div>
          <p className="kicker">Featured work</p>
          <h2 className="h2">Moments we&apos;re proud of.</h2>
        </div>
        <Link href="/gallery/" className="btn btn-outline">Open Gallery <ArrowRight width="16" height="16" /></Link>
      </div>
      <div className="work-grid">
        {work.map((w) => (
          <Link href="/gallery/" className={`work ${w.size || ''}`} key={w.title}>
            <img src={w.img} alt={w.title} />
                        <div className="work-caption">
              <span>{w.cat}</span>
              <h3>{w.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
