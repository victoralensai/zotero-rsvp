const fs = require('fs');
let code = fs.readFileSync('content/rsvp.js', 'utf8');

code = code.replace(
  `    if (shortcuts.has(e.key)) {
      e.preventDefault();
      e.stopPropagation();
    }`,
  `    if (shortcuts.has(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }`
);

code = code.replace(
  `  doc.addEventListener("keydown", handleKeydown, true);
  win.addEventListener("keydown", handleKeydown, true);`,
  `  doc.addEventListener("keydown", handleKeydown, true);
  win.addEventListener("keydown", handleKeydown, true);
  doc.addEventListener("keypress", handleKeydown, true);
  win.addEventListener("keypress", handleKeydown, true);
  doc.addEventListener("keyup", handleKeydown, true);
  win.addEventListener("keyup", handleKeydown, true);
  
  if (win.parent) {
    win.parent.addEventListener("keydown", handleKeydown, true);
    win.parent.addEventListener("keypress", handleKeydown, true);
    win.parent.addEventListener("keyup", handleKeydown, true);
  }`
);

fs.writeFileSync('content/rsvp.js', code);
