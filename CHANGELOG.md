# Changelog — Blessed To Bless Website

All notable changes to this project will be documented in this file.
Format follows [Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH`

---

## [0.3.0] — 2026-04-15

### Added — Full Site Build
- Complete single-page scrolling site replacing the design system preview
- **Sticky navigation** with frosted glass effect, section links, and CTA button
- **Hero section** with split layout (content + image placeholder), dual CTAs
- **About section** with foundation story, mission text, and Genesis 12:2-3 quote card (dark card with decorative quotation mark)
- **Focus Areas** — all 6 from the PDF: Child Welfare, Social Welfare, Youth Mentorship, Education Support, Faith-Driven Impact, Skills Development. Each with emoji, description, and colour accent bar
- **Founders section** — Neo Kobe, Mahlatse Mokoena, Khutso Mtsweni with avatar placeholders
- **Current Drive section** — "Planting Seeds of Hope" School Donation Drive with donation items as pill tags, contact numbers, and poster placeholder
- **Documentary section** — embedded YouTube video (Genesis: Building a Sanctuary) on dark background
- **Get Involved section** — 6 ways to participate: Donate, Offer Skills, Partner, Community Service, Mentor/Speak, Sponsor a Project
- **Impact quote section** — dark background with CTA
- **Footer** — contact info (email + 3 phone numbers), Instagram (@bless.edtobless), mission tagline
- Fully responsive: 3-column → 2-column → single-column across breakpoints
- Mobile nav hides links, keeps logo + CTA
- Updated page metadata and SEO description

### Changed
- Replaced design system preview with production site
- Layout updated with full site metadata

### Design Decisions
- Single-page scroll chosen over multi-page (content volume doesn't justify separate pages, reduces maintenance)
- Contact via mailto: link — zero third-party dependencies
- Documentary embedded directly via YouTube (no hosting needed)
- Orange (#E25C29) used as primary accent throughout (yellow washes out on white)
- Dark sections (quote card, documentary, impact quote, footer) create rhythm and contrast
- Photo/image placeholders use dashed borders — TK will drop in real images manually

---

## [0.2.1] — 2026-03-10

### Fixed
- Added missing `typescript` dev dependency causing Vercel build failure

---

## [0.2.0] — 2026-03-10

### Changed
- Switched from dark theme to white background (per Neo's feedback)
- Primary accent shifted from yellow to orange for white background contrast
- Cards on light grey (#F5F5F5), footer remains dark as visual anchor
- Updated all text colours from white-on-dark to dark-on-white

### Fixed
- Vercel 404 (framework preset was "Other" instead of "Next.js")
- Double-nested zip folder structure

---

## [0.1.0] — 2026-03-10

### Added
- Initial Next.js 16 project (App Router, TypeScript)
- Design system preview with 9 sections
- Nunito (headings) + DM Sans (body) font pairing
- Deployed to Vercel at blessedtobless.vercel.app
- GitHub repo at github.com/ignTlangi/blessedtobless

---

## Upcoming

### [1.0.0] — Target: TBD
- Real photos from Neo (hero, founders headshots, outreach gallery)
- Logo SVG/PNG integration
- Campaign poster image for current drive
- Domain (blessedtobless.africa pending) connected
- Final copy review with Neo
