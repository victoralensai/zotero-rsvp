const fs = require('fs');
let code = fs.readFileSync('content/rsvp.js', 'utf8');

code = code.replace(
  `  const panel = doc.createElement("div");
  panel.id = "zrsvp-panel";
  panel.innerHTML = \``,
  `  const panel = doc.createElement("div");
  panel.id = "zrsvp-panel";
  panel.tabIndex = -1; // make focusable
  panel.innerHTML = \``
);

code = code.replace(
  `function openPanel(reader, doc, selectionText) {
  const panel = doc.getElementById("zrsvp-panel");
  const btn   = doc.getElementById("zrsvp-toolbar-btn");
  if (!panel) return;
  panel.classList.add("open");
  if (btn) btn.classList.add("active");`,
  `function openPanel(reader, doc, selectionText) {
  const panel = doc.getElementById("zrsvp-panel");
  const btn   = doc.getElementById("zrsvp-toolbar-btn");
  if (!panel) return;
  panel.classList.add("open");
  if (btn) btn.classList.add("active");
  panel.focus();`
);

fs.writeFileSync('content/rsvp.js', code);
