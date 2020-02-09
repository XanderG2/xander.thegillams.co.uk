const startEl = document.getElementById("start");
const gameEl = document.getElementById("game");
const cardsEl = document.getElementById("cards");
const youloseEl = document.getElementById("youlose");
const startbuttonEl = document.getElementById("startbutton");
const closebuttonEl = document.getElementById("closebutton");
const scoreEl = document.getElementById("score");

const BOARD_MAX_SIZE = 12;
const PICKED_MAX_SIZE = 3;
const INTERVAL = 1000;
const TARGET = 10;

const pickedList = [];
const boardList = [];
let timer = null;
let score = 0;

function show(el) {
  startEl.style.display = "none";
  gameEl.style.display = "none";
  youloseEl.style.display = "none";
  el.style.display = "block";
}

function selectCard(pos) {
  if (pickedList.includes(pos)) {
    return;
  }
  pickedList.push(pos);
  let total = 0;
  pickedList.forEach(function(pos) {
    const number = boardList[pos];
    total += number;
  });
  if (total > TARGET) {
    youlose();
  } else if (total === TARGET) {
    score += 1;
    pickedList.sort(function(a, b) {
      return b - a;
    });
    pickedList.forEach(function(pos) {
      boardList.splice(pos, 1);
    });
    pickedList.splice(0, pickedList.length);
  } else if (pickedList.length === PICKED_MAX_SIZE) {
    youlose();
  }
  render();
}

function render() {
  let html = "";
  boardList.forEach(function(cardNumber, pos) {
    html += `<div class="card ${
      pickedList.includes(pos) ? "selected" : ""
    }" onclick="selectCard(${pos})">${cardNumber}</div>`;
  });
  cardsEl.innerHTML = html;
}

function youlose() {
  clearInterval(timer);
  show(youloseEl);
  scoreEl.innerHTML = score;
}

function addCard() {
  if (boardList.length === BOARD_MAX_SIZE) {
    youlose();
    return;
  }
  const number = 1 + Math.floor(Math.random() * (TARGET - 1));
  boardList.push(number);
  render();
}

function start() {
  pickedList.splice(0, pickedList.length);
  boardList.splice(0, boardList.length);
  score = 0;
  show(gameEl);
  render();
  timer = setInterval(addCard, INTERVAL);
}
function cancel() {
  show(startEl);
}
function main() {
  startbuttonEl.onclick = start;
  closebuttonEl.onclick = cancel;
  show(startEl);
}

main();
