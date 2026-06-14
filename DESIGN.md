# DESIGN.md — Raffaello Salon
# Generated: 2026-06-13 | Studio v3.1

tokens:
  color:
    salon-black: "#1A1A1A"
    parchment: "#F4F0E8"
    raffaello-red: "#C41E1E"
    warm-white: "#FAFAF7"
    stone: "#9E9E9E"
  font:
    display: "Cormorant Garamond"
    body: "Outfit"
    display-weights: "300, 400, 400i, 600, 700"
    body-weights: "300, 400, 500"
  spacing:
    section-v-desktop: "120px"
    section-v-mobile: "80px"
    content-max: "1100px"
    gutter: "40px"
  radius:
    all: "0px"
  shadow:
    all: "none"
  easing:
    primary: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  duration:
    micro: "200ms"
    standard: "600ms"
    dramatic: "900ms"
    cinematic: "1200ms"

do:
  - Use Raffaello Red (#C41E1E) ONCE per page — booking CTA only
  - Use Cormorant Garamond for all display text (h1–h3), italics for pull quotes
  - Use 120px section vertical padding desktop, 80px mobile
  - Use text-wrap balance on all headings
  - Use cubic-bezier(0.25, 0.46, 0.45, 0.94) for all easing
  - Elements enter from bottom, 30px distance, 600ms
  - Include prefers-reduced-motion override on every animation
  - Dark hero sections use data-hero="dark" on body for nav detection
  - Use ::selection { background: #C41E1E; color: #F4F0E8 }
  - All images: aspect-ratio 3/4 for portraits, 16/9 for interiors, object-fit cover

dont:
  - No border-radius anywhere — 0px on all elements, buttons, cards, images
  - No box-shadow anywhere
  - No purple, blue gradients, coral, salmon colors
  - No Inter or Space Grotesk as display font
  - No centered hero with centered CTA stack
  - No 3-column equal grid for services
  - No fade-up on EVERY section — only hero and key moments
  - No parallax below the hero
  - No "Get Started" CTA language
  - No rounded pill buttons
  - No card shadows or borders
  - Raffaello Red appears ONCE per page maximum
