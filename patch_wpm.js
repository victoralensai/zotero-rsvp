const fs = require('fs');
let code = fs.readFileSync('content/rsvp.js', 'utf8');

code = code.replace(
  `  wpmEl.addEventListener("click",       ()  => changeSpeed(state, doc, "up"));
  wpmEl.addEventListener("contextmenu", (e) => { e.preventDefault(); changeSpeed(state, doc, "down"); });`,
  `  wpmEl.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
      changeSpeed(state, doc, "up");
    } else if (e.button === 2) {
      e.preventDefault();
      e.stopPropagation();
      changeSpeed(state, doc, "down");
    }
  });
  wpmEl.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });`
);

fs.writeFileSync('content/rsvp.js', code);
