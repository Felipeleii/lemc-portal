# LEMC/ALERTA Portal

Academic portal for the **Laboratory of Emerging and Resistome in Clinical Microbiology (LEMC) / ALERTA (Alert Network for Antimicrobial Resistance)** at UNIFESP.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), featuring bilingual (EN/PT) content, automatic ORCID publication sync, and Markdown-driven news and publication management.

---

## Features

- 🌐 **Bilingual (EN/PT)** — language toggle on every page, full Portuguese translation
- 📄 **Content Collections** — Markdown files for publications and news articles
- 🔬 **ORCID Integration** — fetches researcher publications at build time via the ORCID public API
- 🎨 **Academic Design** — Tailwind CSS with LEMC brand colours (deep blue, green, gold)
- ⚡ **Static Site** — zero JS by default, instant page loads
- 📱 **Responsive** — mobile-first layout with hamburger menu

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home – hero, ARIES highlight, recent pubs & news |
| `/research` | Research areas (ARIES, rapid diagnostics, molecular epi, antifungals) |
| `/publications` | Full publication list (ORCID + content collection) |
| `/news` | News & events listing |
| `/news/[slug]` | Individual news article |
| `/team` | Team members |
| `/pt/…` | Portuguese versions of all pages |

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

### Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `ORCID_CLIENT_ID` | ORCID application client ID |
| `ORCID_CLIENT_SECRET` | ORCID application client secret |
| `ORCID_RESEARCHER_ID` | ORCID iD of the researcher to sync (format: `0000-0000-0000-0000`) |

> ⚠️ **Never commit `.env` to version control.** The file is already in `.gitignore`.

For **Cloudflare Pages** or **GitHub Pages** deployment, add these variables in the platform's Environment Variables settings panel.

## Adding Content

### Publications

Create a Markdown file in `src/content/publications/`:

```markdown
---
title: "Your Publication Title"
authors:
  - "Last F"
  - "Coauthor G"
journal: "Journal Name"
year: 2025
doi: "10.xxxx/xxxxx"          # optional
abstract: "Brief abstract..."  # optional
tags: ["AMR", "WGS"]
featured: true
---

Full article body in Markdown...
```

### News Articles

Create a Markdown file in `src/content/news/`:

```markdown
---
title: "Event Title"
titlePt: "Título em Português"   # optional
date: 2025-06-01
summary: "English summary..."
summaryPt: "Resumo em português..." # optional
tags: ["Conference", "ARIES"]
featured: false
---

Full article body...
```

## Project Structure

```
src/
├── content/
│   ├── config.ts           # Content collection schemas
│   ├── publications/       # Publication Markdown files
│   └── news/               # News article Markdown files
├── i18n/
│   ├── ui.ts               # Translation strings (EN + PT)
│   └── utils.ts            # i18n helper functions
├── layouts/
│   └── Layout.astro        # Main layout (header + footer)
├── lib/
│   └── orcid.ts            # ORCID API client
├── pages/
│   ├── index.astro         # Home (EN)
│   ├── research.astro
│   ├── publications/
│   ├── news/
│   ├── team.astro
│   └── pt/                 # Portuguese versions
└── styles/
    └── global.css          # Tailwind + custom theme vars
```

## Deployment

### Cloudflare Pages

1. Connect your GitHub repository in Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variables (`ORCID_*`) in Settings → Environment Variables

### GitHub Pages

Add a workflow file `.github/workflows/deploy.yml` using `withastro/action`.

## License

MIT

