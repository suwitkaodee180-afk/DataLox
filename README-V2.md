# DataLox V2

V2 continues directly from the V1 prototype.

## Added in V2
- High-fidelity homepage closer to the supplied DataLox mockup
- Improved responsive design and mobile navigation
- Entity-centric profile/role presentation
- Official-source evidence UI
- JSON-LD structured data for WebSite, WebPage, Person, ProfilePage, and NewsArticle
- Seed structured content in `data/content-v2.json`
- `llms.txt` as an optional discovery aid (not a replacement for SEO)
- Improved news article metadata and source layout

## Before production deploy
Replace `https://www.datalox.example` in HTML/JSON-LD/sitemap with the real production domain. Then validate Schema, canonical URLs, robots.txt, sitemap.xml and submit the sitemap to Google Search Console.
