import { c as createComponent, b as addAttribute, d as renderHead, e as renderSlot, a as renderTemplate, f as createAstro } from './astro/server_BKaehDWP.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title,
    description = "Raffaello Salon \u2014 Yorkville's original salon since 1968. Hair, colour, and spa services at 132 Cumberland Street, Toronto.",
    hasDarkHero = false
  } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-5hce7sga> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title} | Raffaello Salon</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Outfit:wght@300;400;500&display=swap" rel="stylesheet">${renderHead()}</head> <body${addAttribute(hasDarkHero ? "dark" : "light", "data-hero")} data-astro-cid-5hce7sga> <!-- NAV --> <header id="site-nav" data-astro-cid-5hce7sga> <nav class="container" data-astro-cid-5hce7sga> <a href="/" class="nav-logo" aria-label="Raffaello Salon home" data-astro-cid-5hce7sga> <img src="https://irp.cdn-website.com/be09994b/dms3rep/multi/Raffaello+Logo+-+Red.png" alt="Raffaello Salon" width="140" height="40" loading="eager" data-astro-cid-5hce7sga> </a> <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false" data-astro-cid-5hce7sga> <span data-astro-cid-5hce7sga></span><span data-astro-cid-5hce7sga></span><span data-astro-cid-5hce7sga></span> </button> <ul class="nav-links" role="list" data-astro-cid-5hce7sga> <li data-astro-cid-5hce7sga><a href="/services" data-astro-cid-5hce7sga>Services</a></li> <li data-astro-cid-5hce7sga><a href="/team" data-astro-cid-5hce7sga>The Team</a></li> <li data-astro-cid-5hce7sga><a href="/contact" data-astro-cid-5hce7sga>Contact</a></li> <li data-astro-cid-5hce7sga><a href="tel:4169290021" class="nav-cta" data-astro-cid-5hce7sga>(416) 929-0021</a></li> </ul> </nav> </header> <!-- PAGE CONTENT --> <main id="main" data-astro-cid-5hce7sga> ${renderSlot($$result, $$slots["default"])} </main> <!-- FOOTER --> <footer class="site-footer dark-section" data-astro-cid-5hce7sga> <div class="container footer-grid" data-astro-cid-5hce7sga> <div class="footer-brand" data-astro-cid-5hce7sga> <img src="https://irp.cdn-website.com/be09994b/dms3rep/multi/Raffaello+Logo+-+Red.png" alt="Raffaello Salon" width="120" height="36" loading="lazy" data-astro-cid-5hce7sga> <p data-astro-cid-5hce7sga>Since 1968.</p> </div> <div class="footer-col" data-astro-cid-5hce7sga> <p class="eyebrow" data-astro-cid-5hce7sga>Location</p> <address data-astro-cid-5hce7sga>
132 Cumberland Street<br data-astro-cid-5hce7sga>
2nd Floor<br data-astro-cid-5hce7sga>
Toronto, ON M5R 1A6
</address> </div> <div class="footer-col" data-astro-cid-5hce7sga> <p class="eyebrow" data-astro-cid-5hce7sga>Hours</p> <p data-astro-cid-5hce7sga>Tue — Wed — Fri: 9am – 5pm</p> <p data-astro-cid-5hce7sga>Thursday: 9am – 7pm</p> <p data-astro-cid-5hce7sga>Saturday: 8:30am – 5pm</p> <p data-astro-cid-5hce7sga>Sun — Mon: Closed</p> </div> <div class="footer-col" data-astro-cid-5hce7sga> <p class="eyebrow" data-astro-cid-5hce7sga>Contact</p> <a href="tel:4169290021" data-astro-cid-5hce7sga>(416) 929-0021</a> <a href="mailto:info@raffaellosalon.com" data-astro-cid-5hce7sga>info@raffaellosalon.com</a> <div class="footer-social" data-astro-cid-5hce7sga> <a href="https://instagram.com/raffaellosalon" aria-label="Instagram" target="_blank" rel="noopener" data-astro-cid-5hce7sga>Instagram</a> <a href="https://facebook.com/raffaellosalon" aria-label="Facebook" target="_blank" rel="noopener" data-astro-cid-5hce7sga>Facebook</a> </div> </div> </div> <div class="container footer-bottom" data-astro-cid-5hce7sga> <p class="caption" data-astro-cid-5hce7sga>© 2026 Raffaello Salon. All rights reserved.</p> </div> </footer>   </body> </html>`;
}, "/sessions/exciting-inspiring-galileo/mnt/outputs/raffaello-salon/src/layouts/Base.astro", void 0);

export { $$Base as $ };
