import Link from 'next/link';
import { ArrowRight } from './Icons';

const services = [
  { no: '01', title: 'Wedding Photography', text: 'Candid, timeless coverage from preparations to the reception.', img: '/images/w9.webp' },
  { no: '02', title: 'Wedding & Event Films', text: 'Cinematic highlight films and full-length edits with clean sound.', img: '/images/wedd8.webp' },
  { no: '03', title: 'Portraits & Family', text: 'Studio or outdoor sessions for individuals, couples and families.', img: '/images/photo26.webp' },
  { no: '04', title: 'Baby Showers', text: 'Sweet, joyful coverage of the décor, the games, the guests and the glowing mum-to-be.', img: '/images/photo21.webp' },
];


export default function Services() {
  return (
    <section className="section" id="services">
      <div className="section-head">
        <div>
          <p className="kicker">What we do</p>
          <h2 className="h2">Every story deserves to be <em>seen</em>.</h2>
        </div>
        <Link href="/#contact" className="text-link">Get a quote <ArrowRight width="16" height="16" /></Link>
      </div>
      <div className="services">
        {services.map((s) => (
          <Link href="/#contact" className="service" key={s.no}>
            <img src={s.img} alt="" />
            <div className="service-body">
              <span className="service-no">{s.no}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </Link>
        ))}
      </div>
      <p className="services-hint" aria-hidden="true"><i /><i /><i /> Swipe to see more</p>
    </section>
  );
}
