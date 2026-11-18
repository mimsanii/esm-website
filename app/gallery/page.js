import Link from 'next/link';
import Navbar from '@/components/Navbar';
import MobileTopBar from '@/components/MobileTopBar';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowRight } from '@/components/Icons';

export const metadata = {
  title: 'Gallery',
  description: 'Weddings, portraits, maternity, family and corporate photography by Ecotop Silent Media, Nairobi.',
  alternates: { canonical: '/gallery/' },
};

export default function GalleryPage() {
  return (
    <>
      <div className="g-page">
        <div className="desktop-only"><Navbar /></div>
        <div className="mobile-only g-mtop"><MobileTopBar /></div>
        <header className="g-head">
          <div>
            <p className="eyebrow">Weddings <span /> Portraits <span /> Events <span /> Brands</p>
            <h1 className="g-title">The <em>Gallery</em></h1>
          </div>
          <p className="g-intro">
            A collection of moments we&apos;ve been trusted to keep. Tap any photo to see it full size.
          </p>
        </header>
        <Gallery />
        <div className="g-cta">
          <h2>Love what you see?</h2>
          <Link href="/#contact" className="btn btn-brand btn-lg">Book your shoot <ArrowRight width="18" height="18" /></Link>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
