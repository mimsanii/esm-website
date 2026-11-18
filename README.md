# Ecotop Silent Media website

Next.js 15 (App Router) with plain CSS. Built as a static site, so it can be hosted anywhere.

## Work on it
    npm install       # first time only
    npm run dev       # http://localhost:3000 (or http://<your-ip>:3000 on your phone)

## Build for upload
    npm run build

This creates an **`out`** folder. That folder IS the website. Upload what's inside it.

### Option A: cPanel hosting (e.g. HostAfrica, Truehost, Safaricom)
1. Run `npm run build`.
2. In cPanel open **File Manager → public_html** and delete the default files there (e.g. `index.html`, `default.php`).
3. Compress the **contents** of `out` into a zip (select all files inside `out` → Compress), upload the zip to `public_html`, then right-click → **Extract**.
4. Make sure the hidden `.htaccess` file is in `public_html` (File Manager → Settings → Show hidden files).
5. After the SSL certificate is active (cPanel → SSL/TLS Status → Run AutoSSL), open `.htaccess` and remove the `#` from the three "Force HTTPS" lines.

### Option B: Vercel (free)
1. Push the project to GitHub.
2. On vercel.com → Add New Project → import the repo → Deploy (no settings needed).
3. Add your domain under Project → Settings → Domains.

## Before going live: check these
- `lib/site.js`
  - `url`: the real website address (used for Google and link previews)
  - `whatsapp`: the WhatsApp number (currently 0712 307 732)
  - `socials`: paste Instagram / TikTok / Facebook links (empty ones are hidden)
  - `hours`: opening hours (empty = hidden)
- `components/Testimonials.js`: add **real** client reviews; the section stays hidden until you do
- `components/FAQ.js`: make the answers match ESM's real policies

## Where things live
| What | File |
|---|---|
| Business details, menu | `lib/site.js` |
| Gallery photos & categories | `lib/gallery.js` (photos in `public/images/`, previews in `public/images/thumbs/`) |
| Desktop hero slideshow | `components/HeroSlideshow.js` |
| Phone & tablet homepage top | `components/MobileHero.js` |
| Colours & all styling | `app/globals.css` (colours at the top in `:root`) |
| Page title, Google info | `app/layout.js` |
| Share image (WhatsApp/Facebook preview) | `public/og-image.jpg` |
| Browser tab icon | `app/icon.png`, `app/apple-icon.png` |

## Adding a gallery photo
1. Resize it to about 2000px on the long side (squoosh.app works well) and save it in `public/images/`.
2. Add a small copy (about 800px) with the same name, as `.webp`, in `public/images/thumbs/`. If you skip this, the full photo is used.
3. Add the file name to a category in `lib/gallery.js`.

`unused-photos/` holds photos that aren't on the site. It isn't uploaded.
