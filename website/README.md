# Forge Energy Solutions — home page (sample)

Built from the Forge Energy Design System (`project/site/` draft), adapted to run inside Squarespace.

| File | What it is |
| --- | --- |
| `index.html` | Full preview of the home page. Open it in a browser to review. |
| `forge.css` | All styles, scoped under `.forge` so they don't fight the Squarespace theme. |
| `assets/` | Logos and product images, resized for the web. |

## Putting it on Squarespace (7.1)

Squarespace can't host this as a standalone site. You paste it into a normal Squarespace page instead:

1. **Plan check.** Code Blocks with custom HTML and Code Injection need a paid plan above the entry tier (Business on the older plans, Core or higher on the current ones). Confirm on your plan's billing page.
2. **Fonts.** Settings → Developer Tools → Code Injection → Header: paste the three `<link>` lines for Google Fonts from the top of `index.html`.
3. **Styles.** Website → Pages → Custom Code → Custom CSS: paste all of `forge.css`.
4. **Images.** Upload each file in `assets/` to Squarespace (Custom CSS → Manage Custom Files, or an Image Block), copy each image's URL, and replace the `assets/…` paths in the HTML.
5. **Sections.** On the home page, add one full-width section per `CODE BLOCK` comment in `index.html` (7 in total). In each, add a Code Block and paste that section wrapped in `<div class="forge"> … </div>`. Set section padding to zero.
6. **Header and footer.** Skip the NAV and FOOTER parts of `index.html`. Use Squarespace's own header and footer, set to the same black (#121212) and yellow (#E6A700) in Site Styles.

If the Custom CSS panel reports an error, put the CSS inside `<style> … </style>` in the Header Code Injection instead.
