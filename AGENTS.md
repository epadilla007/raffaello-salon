# AGENTS.md — Raffaello Salon

## Project
Astro 6 static site for Raffaello Salon, 132 Cumberland Street, Yorkville, Toronto.
Founded 1968. Luxury independent hair salon.

## Stack
- Astro 6 (static output)
- GSAP 3.15 via CDN (ScrollTrigger + SplitText)
- CSS custom properties for all design tokens
- Google Fonts: Cormorant Garamond (display) + Outfit (body)
- Vercel deploy

## Key Files
- DESIGN.md — all tokens, do/don't rules
- src/layouts/Base.astro — shared layout, fonts, GSAP, nav, footer
- src/pages/index.astro — Home (5-beat narrative)
- src/pages/services.astro — Hair / Colour / Spa
- src/pages/team.astro — Raffaello / Christopher / Mellissa
- src/pages/contact.astro — Address, hours, map

## Design Rules
Read DESIGN.md before any edit. Palette is locked. Raffaello Red (#C41E1E) appears once per page maximum — on the booking CTA only. Zero border-radius everywhere. Zero shadows.

## Content Facts
- Phone: (416) 929-0021
- Email: info@raffaellosalon.com
- Address: 132 Cumberland Street, 2nd Floor, Toronto, ON M5R 1A6
- Hours: Tue/Wed/Fri 9am–5pm | Thu 9am–7pm | Sat 8:30am–5pm
- Founded: 1968
- Team: Raffaello Marrello (Founder), Christopher Marrello (Creative Director), Mellissa Marrello (Colour Director)

## Never Change
- Color palette (locked to DESIGN.md)
- Font pairing (Cormorant Garamond + Outfit)
- Contact info without client confirmation
- Raffaello Red usage (stays on CTA only)
