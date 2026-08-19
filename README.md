# DataLox Prototype V1

Static responsive prototype created from the Phase 1 information architecture and Phase 2 UI/UX direction.

## Included
- Homepage
- Canonical person profile
- Roles hub
- Topics hub + topic detail
- Achievements hub + detail
- News hub + article template
- Documents hub + detail
- Timeline
- Media
- About / Contact
- UI Kit / Component Library
- robots.txt / sitemap.xml prototypes

## Run locally
From this folder:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Important before production
1. Replace `https://www.datalox.example` with the final domain.
2. Verify all current roles, dates, biographies, claims, and evidence before publication.
3. Replace prototype placeholders with CMS/database-driven content.
4. Generate JSON-LD from verified data records.
5. Configure redirects and canonical URLs at deployment.
6. Add Search Console / analytics after the production domain is known.
