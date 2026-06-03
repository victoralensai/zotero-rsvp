const fs = require('fs');
let code = fs.readFileSync('content/rsvp.js', 'utf8');

code = code.replace(
  `  // Add to both document and window in capture phase
  const events = ["keydown", "keypress", "keyup"];
  for (const ev of events) {
    doc.addEventListener(ev, handleKeydown, true);
    win.addEventListener(ev, handleKeydown, true);
    if (win.parent) win.parent.addEventListener(ev, handleKeydown, true);
  }`,
  `  // Add to document, window, and frameElement in capture phase
  const events = ["keydown", "keypress", "keyup"];
  for (const ev of events) {
    doc.addEventListener(ev, handleKeydown, true);
    win.addEventListener(ev, handleKeydown, true);
    if (win.frameElement) win.frameElement.addEventListener(ev, handleKeydown, true);
  }`
);

fs.writeFileSync('content/rsvp.js', code);
