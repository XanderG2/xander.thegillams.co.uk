document.querySelectorAll(".nacont").forEach(box => {
  const text = box.querySelector(".na");

  const overflow = text.scrollWidth - box.clientWidth;

  if (overflow > 0) {
    text.style.setProperty("--scroll-distance", `-${overflow}px`);
    text.classList.add("scrolling");
  }
});

// eslint-disable-next-line no-unused-vars
function toggle(section) {
  const sec = document.getElementById(section);
  if (!sec) return;
  if (sec.style.display != "none") sec.style.display = "none";
  else if (sec.style.display == "none") sec.style.display = "grid";
}

function searchGenres() {
  const toSearch = document.getElementById("genresAlbums").value.toLowerCase();
  const els = document.querySelector(".albums").querySelectorAll(".music");
  els.forEach(el => {
    const genres = Array.from(el.querySelectorAll(".genre")).map(e => e.innerText.toLowerCase());
    const contains = genres.some(txt => txt.includes(toSearch));
    if (!contains) el.style.display = "none";
    else el.style.display = "block";
  });
}

function searchSingles() {
  const toSearch = document.getElementById("genresSingles").value.toLowerCase();
  const els = document.querySelector(".albums").querySelectorAll(".music");
  els.forEach(el => {
    const genres = Array.from(el.querySelectorAll(".genre")).map(e => e.innerText.toLowerCase());
    const contains = genres.some(txt => txt.includes(toSearch));
    if (!contains) el.style.display = "none";
    else el.style.display = "block";
  });
}

document.getElementById("genresAlbums").addEventListener("keyup", searchGenres);
document.getElementById("genresSingles").addEventListener("keyup", searchSingles);
