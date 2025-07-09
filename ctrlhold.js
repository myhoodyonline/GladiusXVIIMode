document.addEventListener("keydown", e => {
  if (e.ctrlKey) ctrlPressed = true;
});

document.addEventListener("keyup", e => {
  if (!e.ctrlKey) {
    ctrlPressed = false;
    swingTime = 0; // reset swing
  }
});

