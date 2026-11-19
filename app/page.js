import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MobileHero from '@/components/MobileHero';
import MobileExperience from '@/components/MobileExperience';
import MobileTabBar from '@/components/MobileTabBar';
import Services from '@/components/Services';
import About from '@/components/About';
import FeaturedWork from '@/components/FeaturedWork';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      {/* Desktop hero (above 1024px) */}
      <div className="hero-frame desktop-only" id="top">
        <Navbar />
        <Hero />
      </div>
      {/* Phone & tablet hero (1024px and below) */}
      <div className="mobile-only">
        <MobileHero />
      </div>
      <main>
        <Services />
        <div className="mobile-only"><MobileExperience /></div>
        <About />
        <FeaturedWork />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileTabBar />
    </>
  );
}
