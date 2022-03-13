/* eslint-disable no-console */

const txtarea = document.getElementById("txtarea");
const ipt = document.getElementById("ipt");
const form = document.getElementById("form");
const formSettings = document.getElementById("formSettings");
const cipt = document.getElementById("cipt");
const wipt = document.getElementById("wipt");
const tl = document.getElementById("tl");
const MATCHED = "_";
const MATCH = "X";
const PARTIAL_MATCH = "/";
const NO_MATCH = "_";

let repeats = true;
let colors = 8;
let width = 5;
let BIRP = true;
let turnLimit = 30;
let pattern = "";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let attempts = 0;

function log(text) {
  txtarea.value = text + "\n" + txtarea.value;
}

function generatePattern() {
  log(
    "ACTUAL VALUES TESTING: " +
      "Repeats: " +
      repeats +
      ", Colours: " +
      colors +
      ", Width: " +
      width +
      ", Blacks in the Right Places: " +
      BIRP +
      ", Turn Limit: " +
      turnLimit +
      "."
  );
  pattern = "";
  let allowedletters = letters.substring(0, colors);
  for (let i = 0; i < width; i++) {
    const idx = Math.floor(Math.random() * allowedletters.length);
    pattern = pattern + allowedletters[idx];
  }
  console.log(pattern);
  log("Test");
}

function submitGuess(event) {
  event.preventDefault();
  const guess = ipt.value.toUpperCase();
  console.log("submitted " + ipt.value);
  ipt.value = "";

  if (guess.length !== width) {
    log(`Your guess should be  ${width} letters from ${allowedletters}`);
    return;
  }
  for (let i = 0; i < width; i++) {
    if (!allowedletters.includes(guess[i])) {
      log(`${guess[i]} is not an allowed letter`);
      return;
    }
  }
  attempts = attempts + 1;
  const remainingPattern = pattern.split("");

  const correctColourAndPosition = [];
  for (let i = 0; i < width; i++) {
    if (guess[i] === remainingPattern[i]) {
      remainingPattern[i] = MATCHED;
      correctColourAndPosition.push(true);
    } else {
      correctColourAndPosition.push(false);
    }
  }
  // Now the remaining correct positions:
  const correctColourOnly = [];
  for (let i = 0; i < width; i++) {
    let matches = false;
    for (let j = 0; j < width; j++) {
      if (guess[i] === remainingPattern[j]) {
        remainingPattern[j] = MATCHED;
        matches = true;
        break;
      }
    }
    correctColourOnly.push(matches);
  }

  const result = [];
  for (let i = 0; i < width; i++) {
    const letter = correctColourAndPosition[i]
      ? MATCH
      : correctColourOnly[i]
      ? PARTIAL_MATCH
      : NO_MATCH;
    result.push(letter);
  }

  if (result.every(r => r === MATCH)) {
    log(`You won! And in ${attempts} attempts! Reload page to start again.`);
    return;
  }
  log(`${guess} ${result.join(" ")}`);
  /*for (let i = 0; i < width; i++) {
  log(`${i} ${correctColourAndPosition[i]} ${correctColourOnly[i]}`);
  }*/
}

function submitSettings(event) {
  event.preventDefault();
  log(
    "Repeats: " +
      document.querySelector('input[name="repeats"]:checked').value +
      ", Colours: " +
      cipt.value +
      ", Width: " +
      wipt.value +
      ", Blacks in the Right Places: " +
      document.querySelector('input[name="repeats"]:checked').value +
      ", Turn Limit: " +
      tl.value +
      "."
  );
  repeats =
    document.querySelector('input[name="repeats"]:checked').value === "True";
  colors = parseInt(cipt.value, 10);
  width = parseInt(wipt.value, 10);
  BIRP =
    document.querySelector('input[name="repeats"]:checked').value === "True9";
  turnLimit = parseInt(tl.value, 10);
  generatePattern();
}

function Gameready(event) {
  event.preventDefault();
  generatePattern();
}

form.onsubmit = submitGuess;
formSettings.onsubmit = submitSettings;

console.log("working");
window.addEventListener("DOMContentLoaded", Gameready);
