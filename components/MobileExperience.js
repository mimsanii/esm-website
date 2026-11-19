// Phone & tablet only: the dark "ESM Experience" band (Concept C).
const steps = [
  { no: '01', title: 'Plan together', text: 'We talk through your day, your venue and your ideas.' },
  { no: '02', title: 'We shoot', text: 'Guided and relaxed, so you look natural, never stiff.' },
  { no: '03', title: 'You relive it', text: 'Carefully edited photos in a private online gallery.' },
];

export default function MobileExperience() {
  return (
    <section className="c-exp">
      <img src="/images/thumbs/slide-1.webp" alt="" aria-hidden="true" />
      <div className="c-exp-inner">
        <span className="c-eyebrow">THE ESM EXPERIENCE</span>
        <h2>Timeless stories,<br /><em>honestly told.</em></h2>
        <div className="c-steps">
          {steps.map((s) => (
            <div className="c-step" key={s.no}>
              <span>{s.no}</span>
              <div><b>{s.title}</b><small>{s.text}</small></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
