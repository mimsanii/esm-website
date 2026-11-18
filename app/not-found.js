import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <main className="nf">
      <img src="/logo.png" alt="Ecotop Silent Media" className="nf-logo" />
      <p className="kicker">404</p>
      <h1>This moment <em>wasn&apos;t captured</em>.</h1>
      <p className="nf-text">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="nf-actions">
        <Link href="/" className="btn btn-brand btn-lg">Back to home <ArrowRight width="18" height="18" /></Link>
        <Link href="/gallery/" className="btn btn-outline btn-lg">View the gallery</Link>
      </div>
    </main>
  );
}
