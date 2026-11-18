// Gallery photos. To add one: put the photo in public/images/, then add its file name to a category.
// A small preview in public/images/thumbs/ is used if it exists, otherwise the full photo.
export const categories = {
  Weddings: [
    'slide-1.webp', 'w8.webp', 'slide-2.webp', 'w5.webp', 'w2.webp', 'w6.webp', 'w3.webp', 'w7.webp',
    'w4.webp', 'wedd16.webp', 'w10.webp', 'wedd13.webp', 'w9.webp', 'wedd14.webp', 'wedd1.webp',
    'wedd11.webp', 'wedd15.webp', 'wedd4.webp', 'wedd3.webp', 'wedd8.webp', 'wedd2.webp', 'wedd9.webp',
  ],
  Portraits: [
    'photo6.webp', 'p2.webp', 'photo2.webp', 'slide-3.webp', 'photo9.webp', 'photo3.webp', 'photo17.webp',
    'photo4.webp', 'photo22.webp', 'photo7.webp', 'photo19.webp', 'pp3.webp', 'photo26.webp',
  ],
  'Maternity & Baby Showers': ['photo21.webp', 'photo20.webp', 'photo18.webp', 'p3.webp'],
  'Family & Graduation': ['slide-4.jpg', 'photo24.webp', 'photo12.webp', 'photo23.webp'],
  'Corporate & Events': [
    'core20.webp', 'cor88.webp', 'cor33.webp', 'cor99.webp', 'core22.webp', 'cor2.webp', 'p1.webp',
    'cor44.webp', 'core18.webp', 'cor10.webp', 'cor77.webp', 'B1.webp', 'cor55.webp', 'core19.webp',
    'cor12.webp', 'core01.webp', 'cor11.webp', '1709720128987.webp', 'livestram.webp',
  ],
};

const thumb = (file) => `/images/thumbs/${file.replace(/\.(jpe?g|png|webp)$/i, '')}.webp`;

const byCategory = Object.entries(categories).map(([category, files]) =>
  files.map((file) => ({ src: `/images/${file}`, thumb: thumb(file), category }))
);

// "All" mixes the categories (one from each in turn) so the grid feels varied.
export const photos = [];
for (let i = 0; i < Math.max(...byCategory.map((c) => c.length)); i++) {
  byCategory.forEach((c) => c[i] && photos.push(c[i]));
}

// Short web addresses for each category, e.g. /gallery/#weddings
export const slugs = {
  Weddings: 'weddings',
  Portraits: 'portraits',
  'Maternity & Baby Showers': 'maternity',
  'Family & Graduation': 'family',
  'Corporate & Events': 'corporate',
};
