---
name: project-esmaapart
description: EsmaApart tourism booking website — tech stack, design system, and page structure for Adrasan property
metadata:
  type: project
---

EsmaApart is a premium Turkish tourism/booking website for a luxury property in Adrasan, Antalya.

**Why:** Owner wants a high-converting direct-booking site to capture WhatsApp and form leads from Turkish and international luxury tourists.

**Stack:** Next.js 14 App Router, Tailwind CSS v4, Framer Motion v12, react-hook-form, lucide-react. No shadcn/ui (not installed).

**Design System:**
- Colors: pine-900 `#1B3A2D` (primary), amber-600 `#C4873A` (accent), sand-50 `#FAF7F2` (bg), turquoise-400 `#3DA8B2` (sea accent)
- Fonts: Cormorant Garamond (display), Playfair Display (headings), DM Sans (body) — loaded via Google Fonts in globals.css
- Font classes: `font-display`, `font-heading`, `font-body` defined in globals.css

**Pages:**
- `/` — Home: Hero → PropertyHighlightStrip → FeaturedAccommodations → NatureLocation → AmenitiesGrid → Testimonials → CTABanner
- `/konaklama` — Accommodations: PageHero → VillaShowcase → AFrameSection → CabinSection → CTABanner
- `/iletisim` — Contact: PageHero → ContactInfo+WhatsApp+ReservationForm → Map

**Property units:** 1 Luxury Villa (private pool, 2-storey, large garden), 2 A-Frame cabins (private jacuzzi), 4 standard wooden cabins (private small garden)

**Booking flow:** WhatsApp placeholder `+90 500 000 00 00` (owner will update). No payment/calendar integration — inquiry only.

**Language:** Turkish (primary).

**How to apply:** When adding features, follow the pine/amber/sand color palette and Cormorant/Playfair/DM Sans font hierarchy. All pages are statically generated (SSG).
