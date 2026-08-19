# DataLox V2.1 — Local-ready build

This build fixes root-absolute asset and internal links so the site can be opened directly from the extracted folder (file://) without a web server.

Open `index.html` after extracting the ZIP. CSS, JavaScript, images, and internal navigation use relative paths.

For production deployment, canonical URLs and sitemap domain placeholders still need to be replaced with the real domain.
