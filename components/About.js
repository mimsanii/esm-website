import Link from 'next/link';
import { site } from '@/lib/site';
import { Camera, Award, Users, ArrowRight } from './Icons';

const values = [
  { icon: Camera, title: 'Pro gear, pro eye', text: 'Professional cameras, lenses and lighting for every shoot.' },
  { icon: Users, title: 'You feel at ease', text: 'We guide every pose so you look natural, never stiff.' },
  { icon: Award, title: 'On-time delivery', text: 'Carefully edited photos, delivered when we promise.' },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about-media">
        <img className="about-main" src="/images/rajiv1.webp" alt="ESM photographer at work" />
        <img className="about-small" src="/images/thumbs/slide-2.webp" alt="Wedding couple photographed by ESM" />
        <div className="about-badge">
          <strong>ESM</strong>
          <span>Photo &amp; film<br />studio</span>
        </div>
      </div>

      <div className="about-text">
        <p className="kicker">About ESM</p>
        <h2 className="h2">We are the <em>storytellers</em> behind the lens.</h2>
        <p className="about-lead">
          Ecotop Silent Media is a Nairobi creative studio based at {site.address}. We capture weddings,
          portraits, maternity shoots, graduations and corporate events with one goal: photos that
          feel exactly like the day felt.
        </p>
        <p className="about-copy">
          Led by {site.director}, our team blends creative direction with the latest technology,
          because your imagination deserves the best tools. From a quiet portrait session to a
          conference of a thousand guests, we show up prepared, on time and ready to create.
        </p>

        <div className="values">
          {values.map(({ icon: Icon, title, text }) => (
            <div className="value" key={title}>
              <span className="value-icon"><Icon width="20" height="20" /></span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="about-sign">
          <div>
            <b>{site.director}</b>
            <span>Managing Director, ESM</span>
          </div>
          <Link href="/gallery/" className="text-link">See our work <ArrowRight width="16" height="16" /></Link>
        </div>
      </div>
    </section>
  );
}
