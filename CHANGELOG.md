# Changelog — Blessed To Bless Website

All notable changes to this project will be documented in this file.
Format follows [Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH`

- **MAJOR** — full site launches, major redesigns
- **MINOR** — new sections, features, layout changes
- **PATCH** — bug fixes, copy tweaks, small style adjustments

---

## [0.2.0] — 2026-03-10

### Changed
- Switched from dark theme to white background (per Neo's feedback)
- Primary accent shifted from yellow (#F4E167) to orange (#E25C29) for headings, highlights, tags, and quote borders — yellow washed out on white
- Cards and type blocks now sit on light grey (#F5F5F5) instead of dark (#1A1A1A)
- Navigation restyled for light theme with subtle border and shadow
- All body/secondary text colours updated from white-on-dark to dark-on-white
- Button secondary and ghost variants updated for light background contrast
- Footer remains dark (#111111) as a visual anchor
- Selection colour updated to orange tint

### Fixed
- TypeScript build error (missing `typescript` dev dependency)
- Vercel 404 deployment issue (framework preset was set to "Other" instead of "Next.js")
- Double-nested zip folder structure causing empty repo push

---

## [0.1.0] — 2026-03-10

### Added
- Initial Next.js 16 project (App Router, TypeScript)
- Design system preview page with 9 sections:
  01. Colour Palette (#F4E167, #E25C29, #EDAB8A, #111111, #FFFFFF) + gradient applications
  02. Typography — Nunito (headings, 700-900) + DM Sans (body, 400-700)
  03. Buttons & Actions — primary (yellow), orange, secondary (outline), ghost
  04. Navigation bar preview
  05. Focus Area Cards — Child Welfare, Education Support, Youth Development
  06. Founders Section — Neo Kobe, Mahlatse Mokoena, Khutso Mtsweni
  07. Mission Quote block
  08. Get Involved cards — Donate, Partner, Mentor, Offer Skills
  09. Footer preview
- Google Fonts loaded via CDN link tags
- CSS Modules for component styling
- Responsive layout (mobile breakpoint at 768px)
- Fade-up entry animations on hero section
- Deployed to Vercel at blessedtobless.vercel.app
- GitHub repo at github.com/ignTlangi/blessedtobless

### Design Decisions
- **Font**: Nunito chosen over Syne (too techy) and Playfair Display / Lora (considered but Nunito's rounded, friendly feel best matched the youth-focused, community-driven mission)
- **Theme**: Started dark, switched to white per client feedback
- **Stack**: Next.js on Vercel free tier — Neo covers domain only

---

## Upcoming

### [0.3.0] — Target: week of 2026-03-03
- Content collection from Neo (photos, documentary link, logo SVG)
- Timeline and content checklist finalised

### [1.0.0] — Target: 2026-03-07
- Full site launch with real content, images, and contact form
- Domain (blessedtobless.africa pending) connected
