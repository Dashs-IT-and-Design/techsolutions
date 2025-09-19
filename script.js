// Mouse-light shimmer effect
document.addEventListener("mousemove", (e) => {
  const root = document.documentElement;
  root.style.setProperty("--x", e.clientX + "px");
  root.style.setProperty("--y", e.clientY + "px");
});
