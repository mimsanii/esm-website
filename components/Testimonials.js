// Add REAL client reviews here (with the client's permission). The section stays hidden while the list is empty.
// Example:
// { quote: 'ESM made our wedding day stress-free…', name: 'Faith & Kevin', role: 'Wedding, Naivasha', img: '/images/thumbs/w8.webp' },
const reviews = [];

export default function Testimonials() {
  if (reviews.length === 0) return null;
  return (
    <section className="section">
      <div className="section-head center">
        <p className="kicker">Kind words</p>
        <h2 className="h2">Loved by the people we work with.</h2>
      </div>
      <div className="reviews">
        {reviews.map((r) => (
          <figure className="review" key={r.name}>
            <span className="stars">★★★★★</span>
            <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
            <figcaption>
              {r.img && <img src={r.img} alt="" />}
              <span><b>{r.name}</b>{r.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
