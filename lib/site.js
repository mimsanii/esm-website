// One place to edit ESM's business details (taken from the ESM business card).
export const site = {
  name: 'Ecotop Silent Media',
  short: 'ESM',
  tagline: 'Your Imagination, Our Technology',
  description: 'Ecotop Silent Media (ESM) is a Nairobi photography studio for weddings, portraits, maternity, graduations and corporate events. Your Imagination, Our Technology.',
  whatsapp: '254712307732', // WhatsApp number, international format, no "+". Check this is the WhatsApp line.
  phone: '+254 712 307 732',
  phone2: '+254 736 642 182',
  email: 'ecotopsilentmedia@gmail.com',
  address: 'Pioneer House, Kenyatta Avenue',
  location: 'Nairobi, Kenya',
  hours: '', // e.g. 'Mon – Sat, 8:00am – 6:00pm'. Leave empty to hide it.
  director: 'Rajiv Makau',
  // Paste a Google Maps "Embed a map" src here to show a map in the Contact section.
  mapEmbed: '',
  // Website address once it's live (used for Google and link previews).
  url: 'https://ecotopsilentmedia.co.ke',
  // Social links: paste the full link to show an icon. Empty ones are hidden everywhere.
  socials: {
    youtube: 'https://youtube.com/@ecotopsilentmedia', // from the business card
    instagram: '',
    tiktok: '',
    facebook: '',
  },
};

// Links starting with "/#" scroll to a section on the homepage.
export const nav = [
  { label: 'Home', href: '/', id: 'top' },
  { label: 'Services', href: '/#services', id: 'services' },
  { label: 'Gallery', href: '/gallery/', id: 'gallery' },
  { label: 'About', href: '/#about', id: 'about' },
  { label: 'FAQ', href: '/#faq', id: 'faq' },
  { label: 'Contact', href: '/#contact', id: 'contact' },
];

// Only the social links that have been filled in
export const activeSocials = () => Object.entries(site.socials).filter(([, v]) => v);

export const waLink = (text = '') =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
