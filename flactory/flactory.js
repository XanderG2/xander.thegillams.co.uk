/* eslint-disable no-console */
let canvas;
let map;
let x = 2;
let y = 2;
let zoom = 1;
const MAXZOOM = 3;
const MINZOOM = 0.25;
const NORMALTILESTOSHOW = 10;
const WORLDSIZE = 50;
const MINX = -WORLDSIZE;
const MAXX = WORLDSIZE;
const MINY = -WORLDSIZE;
const MAXY = WORLDSIZE;

const SQUARES = (MAXX - MINX + 1) * (MAXY - MINY + 1);
const IRONPERCENT = 1 / 100;
const COPPERPERCENT = 1 / 350;
const LIMESTONEPERCENT = 1 / 105;

const DIRT = 0;
const IRON = 1;
const COPPER = 2;
const LIMESTONE = 3;

function start() {
  canvas = document.getElementById("canvas");
  init();
  render();
}

function init() {
  map = {};
  for (let mx = MINX; mx <= MAXX; mx++) {
    map[mx] = {};
    for (let my = MINY; my <= MAXY; my++) {
      map[mx][my] = DIRT;
    }
  }

  assignResources(IRON, Math.floor(IRONPERCENT * SQUARES));
  assignResources(COPPER, Math.floor(COPPERPERCENT * SQUARES));
  assignResources(LIMESTONE, Math.floor(LIMESTONEPERCENT * SQUARES));
}

function assignResources(resource, quantity) {
  for (let i = 0; i < quantity; i++) {
    putresource(resource);
  }
}

function putresource(resource) {
  for (let attempt = 0; attempt < 100; attempt++) {
    const rX = Math.floor(Math.random() * (MAXX - MINX + 1)) + MINX;
    const rY = Math.floor(Math.random() * (MAXY - MINY + 1)) + MINY;
    map[rX][rY] = resource;
    return;
  }
}

function size() {
  const screensize = Math.max(window.innerWidth, window.innerHeight);
  const xOffset = Math.floor(window.innerWidth / 2);
  const yOffset = Math.floor(window.innerHeight / 2);
  const tilesize = (screensize / NORMALTILESTOSHOW) * zoom;
  return { xOffset, yOffset, tilesize };
}

function render() {
  let $ = canvas.getContext("2d");

  canvas.width = window.innerWidth;

  canvas.height = window.innerHeight;
  const { xOffset, yOffset, tilesize } = size();

  const left = Math.floor(x - NORMALTILESTOSHOW / zoom / 2);
  const bottom = Math.floor(y - NORMALTILESTOSHOW / zoom / 2);
  const numberoftiles = Math.ceil(NORMALTILESTOSHOW / zoom + 2);
  console.log(left, bottom);
  $.fillStyle = "#00AA00";
  $.fillRect(0, 0, canvas.width, canvas.height);

  for (let a = 0; a < numberoftiles; a++) {
    const tX = a + left;
    if (tX < MINX || tX > MAXX) {
      continue;
    }
    for (let b = 0; b < numberoftiles; b++) {
      const tY = b + bottom;
      if (tY < MINY || tY > MAXY) {
        continue;
      }
      //const c = (((tX + tY) % 3) + 3) % 3;
      const c = map[tX][tY] - 1;
      $.fillStyle =
        //tX === 0 && tY === 0
        c === -1
          ? `rgb(255,255,255)`
          : `rgb(${c === 0 ? 255 : 0}, ${c === 1 ? 255 : 0}, ${
              c === 2 ? 255 : 0
            })`;
      $.fillRect(
        xOffset + (tX - x) * tilesize,
        yOffset + (tY - y) * tilesize,
        tilesize,
        -tilesize
      );
    }
  }
}
// 0 = nothing, 2 = middle mouse drag
let mousemode = 0;
let mousex = 0;
let mousey = 0;

function mousemove(event) {
  event.preventDefault();
  if (mousemode === 2) {
    const xdif = event.clientX - mousex;
    const ydif = event.clientY - mousey;
    mousex = event.clientX;
    mousey = event.clientY;
    const { tilesize } = size();
    x -= xdif / tilesize;
    y -= ydif / tilesize;
    x = Math.max(MINX, Math.min(MAXX, x));
    y = Math.max(MINY, Math.min(MAXY, y));
    render();
    //console.log(event);
  }
}
function mousedown(event) {
  event.preventDefault();
  if (event.which === 2) {
    mousemode = 2;
    mousex = event.clientX;
    mousey = event.clientY;
  }
}
function mouseup(event) {
  event.preventDefault();
  mousemode = 0;
}
function wheel(event) {
  if (event.deltaY > 0) {
    zoom = Math.min(MAXZOOM, Math.max(MINZOOM, zoom / 1.25));
  } else if (event.deltaY < 0) {
    zoom = Math.min(MAXZOOM, Math.max(MINZOOM, zoom * 1.25));
  }
  render();
}
window.addEventListener("DOMContentLoaded", start);
window.addEventListener("mousemove", mousemove);
window.addEventListener("mousedown", mousedown);
window.addEventListener("mouseup", mouseup);
window.addEventListener("wheel", wheel);
window.addEventListener("resize", render);
