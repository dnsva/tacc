<font face="Fira Code">

### TACC - The Academy Programming Competition

Website for the annual in-house programming competition at Académie Ste. Cécile. Static HTML/CSS/JS. No framework, no build step, no dependencies (fonts load from
Google Fonts).

### Run locally

Any static server works, e.g.: `python3 -m http.server` and then open http://localhost:8000. However, you can also just find the site at https://dnsva.github.io/tacc

### Files

| File | Purpose |
|------|---------|
| `index.html` | The site (single page: hero, sponsors, steps, about, gallery, footer) |
| `404.html` | Not-found page |
| `reset.css` | Browser reset + base typography (shared by both pages) |
| `style.css` | Design tokens (`:root` variables) and utility classes (`.card`, `.button-filled`, `.heading-2`, `.grid-3`, …) |
| `index.css` | Styles specific to `index.html` |
| `404.css` | Styles specific to `404.html` |
| `script.js` | Mobile burger-menu toggle |
| `photos-2023/`, `photos-2024/`, `photos-2025/` | Gallery images |
| `rules.pdf`, `how-to-submit.pdf`, `Sponsorship Pkg 2026.pdf` | Linked documents |
| `centerline.png`, `windsor.png` | Sponsor logos |

Stylesheets load in the order **reset → style → page** (`index.css` / `404.css`).

### Editing content

Everything is hand-editable in `index.html`:

- **Event details** (date, room, questions, times) — the info cards in the hero section.
- **Steps** to enter - the four step cards.
- **Prizes / about** - the two About cards.
- **Sponsors** - the sponsors section (logos + text).
- **Gallery** - one `<div id="gallery-YYYY">` block per year; images come from the
  matching `photos-YYYY/` folder.
- **Contact email** - the footer.

### To do

- Add 2026 photos + contest link.
</font>