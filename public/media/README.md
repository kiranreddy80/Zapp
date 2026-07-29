# Brand media

Drop brand photography here and it is picked up automatically — no code change.

## Homepage banner slideshow

`src/data/media.js` → `BANNER_SLIDES` already points at these three paths. Each
slide also carries a stock `fallback`, so the banner keeps working until the
real files exist; `<Img>` tries the local file first and quietly falls back if
it 404s.

| Save as | Shows |
| --- | --- |
| `banner-fleet.jpg` | The row of SGD scooters |
| `banner-charging.jpg` | Scooter plugged into the EV charging point |
| `banner-street.jpg` | Any third fleet shot (optional) |

**Guidelines**

- Landscape, at least 1920px wide. The banner crops to fill, and the middle
  band is where the vehicles should sit — the headline overlays the top third
  and the angled edge cuts the bottom.
- JPEG, quality ~80. Keep each under ~400 KB; these load on first paint.
- The banner applies a light green wash (`brand-900/35`). Images that are
  already strongly green will deepen slightly — that is intended.

## Logo

Save the logo here or directly in `public/`, then set `LOGO_SRC` in
`src/data/site.js` to its path (e.g. `'/media/logo.svg'`). `<Logo>` switches
from the inline SVG to the file automatically.
