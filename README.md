# kalunge.io

Personal portfolio for Titus Muthomi — senior software engineer (fintech, payments, distributed systems).

Built with **Astro 5** + **React islands** + **Tailwind v4**. Case studies are
Markdown files in `src/content/work/` (one file per project).

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Edit content

- **Case studies** — add or edit a Markdown file in `src/content/work/`.
  Frontmatter schema is in `src/content.config.ts`. The filename is the URL slug.
  Set `isPublic: false` for client work (hides demo/repo links, shows a
  "client work" note). Use `client:` for the pseudonymized label.
- **About / hero copy** — `src/pages/about.astro`, `src/pages/index.astro`.
- **Accent color & theme** — change `--color-accent` in `src/styles/global.css`
  (one place re-skins the whole site).

## Résumé

The résumé is an HTML page at `/resume` (`src/pages/resume.astro`) — phone-free
by design, no PDF download to keep PII off a public site. To offer a PDF later,
export a phone-free version from your résumé tool, drop it in `public/`, and add
a download link to `src/pages/resume.astro`.

## Still to add

- [ ] **Contact form endpoint** — paste a Formspree ID in
      `src/components/ContactForm.tsx` (`FORMSPREE_ID`). Until then the form
      falls back to opening the visitor's mail client.
- [ ] **Architecture diagrams / screenshots** for the case studies (optional polish).

## Deploy

Static output — host anywhere. See the deployment notes shared separately;
Vercel or Netlify are the recommended zero-config options.
