// const OWL_Y = 100;
const OWL_WIDTH = 100;
const OWL_HEIGHT = 160;

const pupils = document.querySelectorAll(".pupil");

document.addEventListener("mousemove", (e) => updateEyes(e.clientX, e.clientY));
document.addEventListener("touchmove", (e) => updateEyes(e.touches[0].clientX, e.touches[0].clientY));

function updateEyes(x, y) {
  const owlRect = document.querySelector(".eyes").getBoundingClientRect();
  const owlX = (owlRect.right + owlRect.left) / 2;
  const owlY = (owlRect.top + owlRect.bottom) / 2;
  const width = window.innerWidth;
  const height = window.innerHeight;
  pupils.forEach((pupil) => {
    const dX = x - owlX;
    const dY = y - owlY;
    const newX = (dX * 50) / width + 50 + "%";
    const newY = (dY * 50) / height + 50 + "%";
    pupil.style.left = newX;
    pupil.style.top = newY;
    pupil.style.transform = `translate( -${x}, -${y})`;
  });
}

function angle(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}
