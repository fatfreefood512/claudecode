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

## Content to-do

- **Rewrite the line caption.** "8 steps · one line · every development batch" under the production-line table (section "One line, mixing to formation") is placeholder copy.
- **Foundry messaging.** Add a line about the foundry model later (for example in the hero label or the services section). "Lab-to-fab" stays for now.
- **One photo per line step.** The line section shows a single photo today (coating). Get a still for each of the 8 steps:

| Step | What we have now | Status |
| --- | --- | --- |
| 01 Mixing | none | needs a shot |
| 02 Coating | `line-coating.jpg`, library `electrode-web-closeup.jpg` | TV clip crop / library still |
| 03 Pressing | TV clip crop on the design canvas | needs a clean shot |
| 04 Notching | none | needs a shot |
| 05 Stacking | TV clip crop; library `pouch-cell-gripper.jpg` | library still may work |
| 06 Assembly | library `assembly-line-wide.jpg` | library still may work |
| 07 Injection | none | needs a shot |
| 08 Formation | TV clip crop; library `wrapped-cells-fixture.jpg` | library still may work |

Library stills are in the design canvas under `assets/library/`. The canvas's "Photo shoot needed" note has the full shot list.

## Before going live

All photos are placeholders (see the "Photo shoot needed" note on the design canvas). `line-hero.jpg`, `line-coating-2.jpg` and others are crops from a TV news clip, and `lab-engineer.jpg` shows GUS staff. Replace them before the site is public.
