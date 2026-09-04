# Variant — "spin landing"

A saved alternative for the home page opening. **Not live.** The live site uses the
simpler version: the surfer rides straight across and exits right, then the photo
slides in and the line types out after it.

## What this variant does instead

1. **0–3s** — she rides a *hooked* path: right along the line under "Hi, I'm Ella",
   then a clockwise sweep down the right and back left, landing centred in the photo box.
   The words still appear one at a time as she clears each.
2. **3s** — she lands dead centre in the photo box.
3. **3.05s** — "And this is me" starts typing **while she is still spinning**
   (i.e. before the photo is settled).
4. **3–5s** — she spins clockwise through 720° (two full turns), decelerating.
5. **~4s** — she hands over to the graduation photo *mid-spin*. Both run the same
   rotation on the same clock, so it reads as one continuous motion.
6. **5s** — back upright, photo stationary.

## To restore it

Copy the three files back over the live ones:

```bash
cp variants/spin-landing/index.html index.html
cp variants/spin-landing/style.css assets/style.css
cp variants/spin-landing/app.js assets/app.js
```

Then bump the `?v=` numbers on `style.css` / `app.js` in the HTML so browsers pick
up the change.

## One gotcha worth keeping

The spin **must** live on its own element (`.surfer-spin`), nested inside the element
that carries `offset-path` (`.surfer-fly`). Putting `rotate` and `offset-path` on the
same node makes the browser compose the two transforms, so she orbits the wrong
origin — mid-turn she flies right off the top of the screen. It only looks correct at
exact multiples of 360°, so it is easy to miss in a screenshot.
