# Forge Energy Solutions — website (light)

Converted from the "Forge Website — Light" design canvas (homepage artboard). One responsive page covers desktop, tablet and phone.

| File | What it is |
| --- | --- |
| `index.html` | The full page. Open it in a browser to review. |
| `forge-light.css` | All styles, scoped under `.fl` so they don't clash with the Squarespace theme. |
| `forge-light.js` | The interactions: crosshair readouts, supply-map highlight, product accordion, scroll-in drawings. Plain JavaScript, no libraries. |
| `assets/` | Images, resized for the web. |

## Putting it on Squarespace (7.1)

1. **Plan check.** Custom HTML Code Blocks and Code Injection need a paid plan above the entry tier. The interactions need Code Injection.
2. **Fonts.** Settings → Developer Tools → Code Injection → Header: paste the Google Fonts `<link>` lines from the top of `index.html`.
3. **Styles.** Website → Pages → Custom Code → Custom CSS: paste all of `forge-light.css`. If the panel reports an error, put it in the Header Code Injection inside `<style> … </style>` instead.
4. **Script.** Code Injection → Footer: paste `forge-light.js` inside `<script> … </script>`.
5. **Images.** Upload everything in `assets/` to Squarespace and replace each `assets/…` path in the HTML with the uploaded image's URL.
6. **Page content.** The page is split by `<!-- ===== … ===== -->` comments. Add one full-width section per block, each with a Code Block, and wrap each pasted block in `<div class="fl"> … </div>`. Set section padding to zero.
7. **Header and footer.** The design's own nav and footer are in the HTML. Either paste them as the first and last blocks and hide Squarespace's header and footer, or skip them and style Squarespace's header and footer to match.

## Before going live

All photos are placeholders (see the "Photo shoot needed" note on the design canvas). `line-hero.jpg`, `line-coating-2.jpg` and others are crops from a TV news clip, and `lab-engineer.jpg` shows GUS staff. Replace them before the site is public.
