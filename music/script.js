document.querySelectorAll(".nacont").forEach(box => {
  const text = box.querySelector(".na");

  const overflow = text.scrollWidth - box.clientWidth;

  if (overflow > 0) {
    text.style.setProperty("--scroll-distance", `-${overflow}px`);
    text.classList.add("scrolling");
  }
});
