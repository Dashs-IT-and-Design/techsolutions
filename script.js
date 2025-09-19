// Shimmer / spotlight effect
document.addEventListener("mousemove", e => {
  const { clientX: x, clientY: y } = e;
  document.body.style.setProperty("--mouse-x", `${x}px`);
  document.body.style.setProperty("--mouse-y", `${y}px`);
});

// Optional: little parallax on hero text
const heroTitle = document.querySelector(".h-title");
if (heroTitle) {
  document.addEventListener("mousemove", e => {
    const offsetX = (window.innerWidth / 2 - e.clientX) / 80;
    const offsetY = (window.innerHeight / 2 - e.clientY) / 80;
    heroTitle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
}
