/* eslint-disable no-console */
//foundationmap
let canvas;
let ironimg;
let copperimg;
let limestoneimg;
let minerMk1img;
let minerMk2img;
let foundationimg;
let ironno;
let copperno;
let limestoneno;
let map;
let buildingmap;
let foundationmap;
let contextdenu;
let x = 0;
let y = 0;
let zoom = 1;
let iron = 0;
let copper = 0;
let limestone = 0;
let dx = 0,
  dy = 0;
let ticknumber = 0;
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

const MACHINES = {
  minerMk1: {
    type: "miner",
    btnlbl: "mk1",
    tickinterval: 4,
    amount: 1,
    iron: 100,
  },
  minerMk2: {
    type: "miner",
    btnlbl: "mk2",
    tickinterval: 2,
    amount: 1,
    iron: 1000,
    copper: 100,
  },
};

const FOUNDATIONS = {
  gray: {
    type: "gray",
    btnlbl: "fg",
    iron: 10,
    limestone: 5,
  },
};
function save() {
  localStorage.setItem("x", x);
  localStorage.setItem("y", y);
  localStorage.setItem("zoom", zoom);
  localStorage.setItem("map", JSON.stringify(map));
  localStorage.setItem("buildingmap", JSON.stringify(buildingmap));
  localStorage.setItem("foundationmap", JSON.stringify(foundationmap));
  localStorage.setItem("iron", iron);
  localStorage.setItem("copper", copper);
  localStorage.setItem("limestone", limestone);
}
function load() {
  try {
    x = parseFloat(localStorage.getItem("x")) || 0;
    y = parseFloat(localStorage.getItem("y")) || 0;
    zoom = parseFloat(localStorage.getItem("zoom")) || 1;
    iron = parseInt(localStorage.getItem("iron"), 10) || 0;
    copper = parseInt(localStorage.getItem("copper"), 10) || 0;
    limestone = parseInt(localStorage.getItem("limestone"), 10) || 0;
    map = JSON.parse(localStorage.getItem("map"));
    buildingmap = JSON.parse(localStorage.getItem("buildingmap"));
    foundationmap = JSON.parse(localStorage.getItem("foundationmap"));
  } catch (e) {
    x = 0;
    y = 0;
    zoom = 1;
    iron = 0;
    copper = 0;
    limestone = 0;
    map = null;
    buildingmap = null;
    foundationmap = null;
  }
}

function start() {
  canvas = document.getElementById("canvas");
  ironimg = document.getElementById("iron");
  copperimg = document.getElementById("copper");
  limestoneimg = document.getElementById("limestone");
  minerMk1img = document.getElementById("minerMk1");
  minerMk2img = document.getElementById("minerMk2");
  foundationimg = document.getElementById("foundation");
  ironno = document.getElementById("ironno");
  copperno = document.getElementById("copperno");
  limestoneno = document.getElementById("limestoneno");
  contextdenu = document.getElementById("contextmenu");
  load();
  if (!map || !buildingmap || !foundationmap) {
    generateMap();
  }
  setInterval(save, 10000);
  setInterval(tick, 250);
  render();
}

function tick() {
  ticknumber++;
  for (let mx = MINX; mx <= MAXX; mx++) {
    for (let my = MINY; my <= MAXY; my++) {
      const machineid = buildingmap[mx][my];
      const resource = map[mx][my];
      const machine = MACHINES[machineid];
      if (machine) {
        if (machine.type === "miner") {
          if (ticknumber % machine.tickinterval === 0) {
            if (resource === IRON) {
              iron += machine.amount;
            } else if (resource === COPPER) {
              copper += machine.amount;
            } else if (resource === LIMESTONE) {
              limestone += machine.amount;
            }
          }
        }
      }
    }
  }

  render();
}

function generateMap() {
  x = 0;
  y = 0;
  zoom = 1;
  iron = 0;
  copper = 0;
  limestone = 0;

  map = {};
  buildingmap = {};
  foundationmap = {};
  for (let mx = MINX; mx <= MAXX; mx++) {
    map[mx] = {};
    buildingmap[mx] = {};
    foundationmap[mx] = {};
    for (let my = MINY; my <= MAXY; my++) {
      map[mx][my] = DIRT;
      buildingmap[mx][my] = null;
      foundationmap[mx][my] = null;
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
    let OK = true;
    for (let offset = -4; offset <= 4; offset++) {
      const oY = rY + offset;
      if (oY < MINY || oY > MAXY) {
        continue;
      }
      if (map[rX][oY] != DIRT) {
        OK = false;
        break;
      }
    }
    if (!OK) {
      continue;
    }
    map[rX][rY] = resource;
    return;
  }
  throw new Error("Error 1: Couldn't find space for resource");
}

function size() {
  const screensize = Math.max(window.innerWidth, window.innerHeight);
  const xOffset = Math.floor(window.innerWidth / 2);
  const yOffset = Math.floor(window.innerHeight / 2);
  const tilesize = (screensize / NORMALTILESTOSHOW) * zoom;
  return { xOffset, yOffset, tilesize };
}

function render() {
  ironno.textContent = iron;
  copperno.textContent = copper;
  limestoneno.textContent = limestone;

  const $ = canvas.getContext("2d");
  $.imageSmoothingEnabled = false;
  $.webkitImageSmoothingEnabled = false;

  canvas.width = window.innerWidth;

  canvas.height = window.innerHeight;
  const { xOffset, yOffset, tilesize } = size();

  const left = Math.floor(x - NORMALTILESTOSHOW / zoom / 2);
  const bottom = Math.floor(y - NORMALTILESTOSHOW / zoom / 2);
  const numberoftiles = Math.ceil(NORMALTILESTOSHOW / zoom + 2);
  $.fillStyle = "#53f250";
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
      const resource = map[tX][tY];
      const machineid = buildingmap[tX][tY];
      const foundationid = foundationmap[tX][tY];

      const cX = xOffset + (tX - x) * tilesize;
      const cY = yOffset + (tY - y) * tilesize;

      if (resource === IRON) {
        $.drawImage(ironimg, cX, cY, tilesize, -tilesize);
      } else if (resource === COPPER) {
        $.drawImage(copperimg, cX, cY, tilesize, -tilesize);
      } else if (resource === LIMESTONE) {
        $.drawImage(limestoneimg, cX, cY, tilesize, -tilesize);
      } else if (resource === DIRT) {
        //no thing
      } else {
        $.fillStyle =
          //tX === 0 && tY === 0
          resource === DIRT
            ? `rgb(255,255,255)`
            : `rgb(${resource === IRON ? 255 : 0}, ${
                resource === COPPER ? 255 : 0
              }, ${resource === LIMESTONE ? 255 : 0})`;
        $.fillRect(cX, cY, tilesize, -tilesize);
      }

      if (foundationid === "gray") {
        $.drawImage(foundationimg, cX, cY, tilesize, -tilesize);
      }

      if (machineid === "minerMk1") {
        $.drawImage(minerMk1img, cX, cY, tilesize, -tilesize);
      } else if (machineid === "minerMk2") {
        $.drawImage(minerMk2img, cX, cY, tilesize, -tilesize);
      }

      if (tX === dx && tY === dy) {
        $.fillStyle = "rgba(255,255,255,0.3)";
        $.fillRect(cX, cY, tilesize, -tilesize);
      }
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

function mouse2tile(e) {
  const { clientX, clientY } = e;
  const { xOffset, yOffset, tilesize } = size();

  const tX = Math.floor(clientX / tilesize - xOffset / tilesize + x);
  const tY = Math.ceil(clientY / tilesize - yOffset / tilesize + y);
  return { tX, tY, clientX, clientY };
}

function click(e) {
  const { tX, tY } = mouse2tile(e);
  dx = tX;
  dy = tY;
  const resource = map[tX][tY];
  if (resource === IRON) {
    iron++;
  }
  if (resource === COPPER) {
    copper++;
  }
  if (resource === LIMESTONE) {
    limestone++;
  }

  render();
}

function menubutton(action, text, disabled) {
  const el = document.createElement("button");
  el.onclick = () => button(action);
  el.innerText = text;
  if (disabled) {
    el.disabled = true;
  }
  contextdenu.appendChild(el);
}
function canafford(thing, oldthing) {
  const effectiveiron = iron + (oldthing ? oldthing.iron || 0 : 0);
  const effectivecopper = copper + (oldthing ? oldthing.copper || 0 : 0);
  const effectivelimestone =
    limestone + (oldthing ? oldthing.limestone || 0 : 0);
  if (thing.iron && effectiveiron < thing.iron) {
    return false;
  }
  if (thing.copper && effectivecopper < thing.copper) {
    return false;
  }
  if (thing.limestone && effectivelimestone < thing.limestone) {
    return false;
  }
  return true;
}

function contextmenu(e) {
  e.preventDefault();
  const { tX, tY, clientX, clientY } = mouse2tile(e);
  dx = tX;
  dy = tY;
  render();
  console.log(tX, tY);
  contextdenu.style.left = `${clientX}px`;
  contextdenu.style.top = `${clientY}px`;
  contextdenu.innerHTML = "";

  menubutton("x", "x");
  menubutton("-", "-");

  for (const machineid in MACHINES) {
    if (ismachineallowed(machineid, tX, tY)) {
      const machine = MACHINES[machineid];

      const oldmachine = MACHINES[buildingmap[dx][dy]];
      const disabled =
        buildingmap[tX][tY] === machineid || !canafford(machine, oldmachine);
      menubutton(machineid, machine.btnlbl, disabled);
    }
  }
  for (const foundationid in FOUNDATIONS) {
    if (isfoundationallowed(foundationid, tX, tY)) {
      const foundation = FOUNDATIONS[foundationid];
      const oldfoundation = FOUNDATIONS[foundationmap[dx][dy]];

      const disabled =
        foundationmap[tX][tY] === foundationid ||
        !canafford(foundation, oldfoundation);

      menubutton(foundationid, foundation.btnlbl, disabled);
    }
  }
  contextdenu.style.display = `block`;
}

function credit(machine, multiplier = 1) {
  if (multiplier < 0) {
    if (machine.iron && iron < machine.iron) {
      throw new Error("Error 4: Not enough iron!");
    }
    if (machine.copper && copper < machine.copper) {
      throw new Error("Error 5: Not enough copper!");
    }
    if (machine.limestone && limestone < machine.limestone) {
      throw new Error("Error 6: Not enough limestone!");
    }
  }

  if (machine.iron) {
    iron = iron + multiplier * machine.iron;
  }
  if (machine.copper) {
    copper = copper + multiplier * machine.copper;
  }
  if (machine.limestone) {
    limestone = limestone + multiplier * machine.limestone;
  }
}

function ismachineallowed(machineid, x, y) {
  const machine = MACHINES[machineid];
  if (machine.type === "miner") {
    const resource = map[x][y];
    return resource !== DIRT;
  }
  console.warn("machine is not understod");
  return false;
}

function isfoundationallowed(foundationid, x, y) {
  //const foundation = FOUNDATIONS[foundationid];
  const existing = foundationmap[x][y];
  const machine = buildingmap[x][y];
  const resource = map[x][y];
  return resource === DIRT && (existing || !machine);
}

// eslint-disable-next-line no-unused-vars
function button(l) {
  if (l === "x") {
    contextdenu.style.display = `none`;
    return;
  }

  const machine = MACHINES[l];
  const foundation = FOUNDATIONS[l];
  const oldmachine = MACHINES[buildingmap[dx][dy]];
  const oldfoundation = FOUNDATIONS[foundationmap[dx][dy]];
  if (l === "-") {
    if (oldmachine) {
      credit(oldmachine);
      buildingmap[dx][dy] = null;
    } else if (oldfoundation) {
      credit(oldfoundation);
      foundationmap[dx][dy] = null;
    }
  } else if (machine) {
    if (ismachineallowed(l, dx, dy)) {
      try {
        if (oldmachine) {
          credit(oldmachine);
        }
        credit(machine, -1);
        buildingmap[dx][dy] = l;
      } catch (e) {
        if (oldmachine) {
          credit(oldmachine, -1);
        }
        console.error(e);
      }
    }
  } else if (foundation) {
    if (isfoundationallowed(l, dx, dy)) {
      try {
        if (oldfoundation) {
          credit(oldfoundation);
        }
        credit(foundation, -1);
        foundationmap[dx][dy] = l;
      } catch (e) {
        if (oldfoundation) {
          credit(oldfoundation, -1);
        }
        console.error(e);
      }
    }
  }
  contextdenu.style.display = `none`;
}

window.addEventListener("DOMContentLoaded", start);
window.addEventListener("mousemove", mousemove);
window.addEventListener("mousedown", mousedown);
window.addEventListener("mouseup", mouseup);
window.addEventListener("wheel", wheel);
window.addEventListener("click", click);
window.addEventListener("resize", render);
window.addEventListener("beforeunload", save);
window.addEventListener("contextmenu", contextmenu);
