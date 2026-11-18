import './globals.css';
import { site } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Ecotop Silent Media | Photography Studio in Nairobi',
    template: '%s | Ecotop Silent Media',
  },
  description: site.description,
  keywords: ['photographer Nairobi', 'wedding photographer Kenya', 'maternity shoot Nairobi', 'portrait studio Nairobi', 'corporate event photography Kenya', 'Ecotop Silent Media', 'ESM'],
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    siteName: site.name,
    title: 'Ecotop Silent Media | Photography Studio in Nairobi',
    description: site.description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ecotop Silent Media photography' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
};

export const viewport = { themeColor: '#8e1b1b' };

// Business details for Google (shows ESM correctly in search and Maps).
const businessInfo = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  alternateName: site.short,
  description: site.description,
  url: site.url,
  image: `${site.url}/og-image.jpg`,
  logo: `${site.url}/logo.png`,
  telephone: site.phone.replace(/\s/g, ''),
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address,
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  areaServed: 'Kenya',
  sameAs: Object.values(site.socials).filter(Boolean),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessInfo) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
