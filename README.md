# ⚡ Zotero RSVP Reader

A Zotero plugin that adds **Rapid Serial Visual Presentation (RSVP)** speed reading to the built-in PDF reader.

Words flash one at a time at your chosen speed, using the **Optimal Recognition Point (ORP)** technique — a small orange highlight sits slightly left of centre on each word, anchoring your eye so you can read without moving it.

![License: PolyForm Noncommercial](https://img.shields.io/badge/license-PolyForm%20Noncommercial-orange)
![Zotero 9](https://img.shields.io/badge/Zotero-9.0%2B-red)

---

## Features

- **Starts from your current page** — opens at the page you're on, not page 1
- **Selection → RSVP** — highlight any text, click ⚡ RSVP in the popup to read just that passage
- **Jump to page** — press `P` or ⤴ at any time to resync to where you've scrolled
- **Speed range** — 150 to 900 WPM in steps (150 / 200 / 250 / 300 / 350 / 400 / 450 / 500 / 600 / 700 / 800 / 900)
- **ORP rendering** — focus character highlighted in orange for faster recognition
- **Progress bar** — shows position through the document or selection
- **Source badge** — shows whether you're reading the full doc or a selection, and which page you started from
- **Keyboard-first controls**

### Keyboard shortcuts

| Key | Action |
|-----|--------|
| `Space` | Play / Pause |
| `←` `→` | Step one word back / forward |
| `↑` `↓` | Increase / decrease speed |
| `P` | Jump to current page |
| `Esc` | Close panel |

Click the WPM display to speed up, right-click to slow down.

---

## Installation

### From release (recommended)

1. Download `zotero-rsvp.xpi` from the [latest release](../../releases/latest)
2. In Zotero: **Tools → Add-ons → gear icon → Install Add-on From File…**
3. Select the downloaded `.xpi`
4. Restart Zotero if prompted

### Requirements

- Zotero 7.0 or later (tested on Zotero 9)
- PDF must have a text layer (not a scanned image)

---

## Usage

1. Open any PDF in the Zotero built-in reader
2. Click the **⚡ RSVP** button in the top toolbar
3. The panel opens and begins loading text from your current page
4. Press `Space` to start reading

**To read a specific passage:** select text in the PDF → click **⚡ RSVP** in the selection popup.

**If no text is found:** the PDF likely has no text layer (scanned image). Right-click the item in your library → **Retrieve Metadata**, which will trigger OCR. Then try again.

---

## How it works

Text is extracted via `Zotero.PDFWorker.getFullText()`, which returns per-page data. This lets the plugin track page boundaries and seek directly to the word where your current page begins. If PDFWorker fails, it falls back to the FullText index, then triggers indexing, then reads the DOM text layers directly.

The ORP positioning is based on research from [spritzinc](https://github.com/pasky/speedread) — for a word of length N, the focus character sits at a fixed offset slightly left of centre, which minimises eye movement and maximises comprehension at speed.

---

## Building from source

The plugin has no build step — it's plain JavaScript. To package it as an `.xpi`:

```bash
chmod +x build.sh
./build.sh
```

Or manually:

```bash
zip -r ../zotero-rsvp.xpi bootstrap.js manifest.json content/
```

---

## Contributing

Issues and PRs welcome. Some ideas for future improvements:

- [ ] Sentence-level mode (read sentence by sentence instead of word by word)
- [ ] Configurable font size and panel position
- [ ] Remember WPM per document
- [ ] Chunk mode (show 2–3 words at a time)
- [ ] EPUB support

---

## License

**Free for individuals, researchers, students, and noncommercial organisations.**
Commercial use (corporations, for-profit companies) requires a separate license.

Licensed under the [PolyForm Noncommercial License 1.0.0](LICENSE).

This means:
- ✅ Free for personal use, research, education, and academic work
- ✅ Free for nonprofits, universities, public institutions, and government
- ✅ Free to modify and share for noncommercial purposes
- ❌ Commercial use by for-profit companies requires a paid license

For commercial licensing enquiries, please open an issue or contact via GitHub.
