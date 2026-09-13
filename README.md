# Ilma Bano Portfolio V2

## Structure
- index.html — main portfolio
- blog/index.html — first SEO-friendly article
- images/ — 14 project images, normalized to 800x800 WebP
- robots.txt / sitemap.xml — basic SEO files

## Adding a future blog post
1. Create a folder under `blog/`, e.g. `blog/seo-for-instagram/`.
2. Copy the existing article HTML as a template.
3. Change the title, description, canonical URL, headings and article content.
4. Add the new URL to sitemap.xml.
5. Commit/push to GitHub. Vercel will deploy the update when the repository is connected.

Note: Rank Math is a WordPress SEO plugin. This static site cannot run Rank Math itself; its key SEO practices are implemented manually in the HTML.
