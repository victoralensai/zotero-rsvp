const fs = require('fs');
let code = fs.readFileSync('content/rsvp.js', 'utf8');

code = code.replace(
  `  // Add keydown handler to both document and window for maximum compatibility
  const handleKeydown = (e) => {
    if (!panel.classList.contains("open")) return;
    
    // Prevent default for all our shortcuts to stop PDF.js from handling them
    const shortcuts = new Set([
      " ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown",
      "p", "P", "c", "C", "t", "T", "Escape"
    ]);
    
    if (shortcuts.has(e.key)) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Don't handle if user is typing in an input field
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;`,
  `  // Add keydown handler to both document and window for maximum compatibility
  const handleKeydown = (e) => {
    if (!panel.classList.contains("open")) return;
    
    // Prevent default for all our shortcuts to stop PDF.js from handling them
    const shortcuts = new Set([
      " ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown",
      "p", "P", "c", "C", "t", "T", "Escape"
    ]);
    
    // Don't handle if user is typing in an input field
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    
    if (shortcuts.has(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
    
    if (e.type !== "keydown") return;`
);

code = code.replace(
  `  // Add to both document and window in capture phase
  doc.addEventListener("keydown", handleKeydown, true);
  win.addEventListener("keydown", handleKeydown, true);`,
  `  // Add to both document and window in capture phase
  const events = ["keydown", "keypress", "keyup"];
  for (const ev of events) {
    doc.addEventListener(ev, handleKeydown, true);
    win.addEventListener(ev, handleKeydown, true);
    if (win.parent) win.parent.addEventListener(ev, handleKeydown, true);
  }`
);

fs.writeFileSync('content/rsvp.js', code);
