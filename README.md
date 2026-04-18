# ☕ Pixel Café — Interactive Scene (WIP)

A work-in-progress pixel-art café scene built with vanilla HTML, CSS, and JavaScript. Click on items inside the café to explore different views — each one zooms into a part of the shop. The background and all assets were drawn by me in Piskel.

> 🔗 **[Live Demo](https://ishal-r.github.io/pixel-cafe/)** ← add once GitHub Pages is set up

> ⚠️ **This project is incomplete.** I'm still actively working on it — more scenes, text overlays, and music are planned. Uploading it anyway because the core interaction and artwork are already working.

---

## What's the idea?

I wanted to build a little interactive café you could "explore" in your browser. The home screen shows the full pixel-art shop, and clicking on different spots — the menu board, drinks on the counter, items on shelves — takes you to a closer view of that area. It's the same click-to-navigate pattern as my [birthday card project](https://github.com/YOUR-USERNAME/interactive-birthday-wish), but this time the setting is a café I designed from scratch.

The end goal is to have each item tell a small story or show a personal message, with ambient café sounds and music in the background.

---

## Current state

- ✅ Home screen (full café scene) — drawn and working
- ✅ Click navigation — 6 clickable hotspots on the scene
- ✅ Back button — resets to home correctly
- ✅ Click sound effects
- ⏳ Text overlays on each page — not yet added
- ⏳ Background music / ambient audio — not yet added
- ⏳ Remaining scenes / detail views — some still placeholder

---

## Tech used

| | |
|---|---|
| HTML / CSS / JS | Everything — no frameworks |
| [Piskel](https://www.piskelapp.com/) | Drawing the café and all assets |
| Google Fonts | Pixelify Sans for the pixel-style font |

---

## Running it locally

```bash
git clone https://github.com/YOUR-USERNAME/pixel-cafe.git
cd pixel-cafe
```

Open `index.html` in your browser — no build step needed.

> **Heads up:** If click sounds don't play, your browser might be blocking local audio. Run a quick local server instead:
> ```bash
> python -m http.server 8000
> ```
> Then visit `http://localhost:8000`.

---

## Project structure

```
pixel-cafe/
├── index.html        # Entry point
├── style.css         # Layout and button positioning
├── app.js            # Click navigation and audio logic
│
├── shop2.png         # Main café home screen
├── open2.png         # "Open" sign / detail view
├── f1.png            # Menu/scene item 1
├── f2.png            # Menu/scene item 2
├── f3.png            # Menu/scene item 3
├── f4.png            # Menu/scene item 4
├── f5.png            # Menu/scene item 5
├── back.png          # Back button asset
└── pop.mp3           # Click sound effect
```

---

## Credits

All artwork is original — drawn by me in Piskel, with visual inspiration from pixel-art café references online.

---

## Contact

**[Ishal Rahat]**
- [GitHub](https://github.com/ishal-r)
- [LinkedIn](https://www.linkedin.com/in/ishal-rahat-ba9b5830b/)
- ishalrahat15@gmail.com
