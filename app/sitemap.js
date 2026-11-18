import { site } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap() {
  return [
    { url: `${site.url}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/gallery/`, changeFrequency: 'weekly', priority: 0.8 },
  ];
}
