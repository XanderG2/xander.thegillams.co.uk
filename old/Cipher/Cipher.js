/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
window.ul = document.getElementById("ul");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".repeat(3);

let inputElm = document.querySelector("input");

function buttonclicked() {
  let inputValue = inputElm.value;
  let messageg = inputValue.toUpperCase();
  for (let j = 0; j < 26; j = j + 1) {
    decipher(messageg, function(n) {
      return -n + 26 + j;
    });
  }
}
function log(m) {
  const el = document.createElement("li");
  el.innerText = m;
  window.ul.appendChild(el);
}
function decipher(message, callback) {
  window.output = "";
  for (let i = 0; i < message.length; i = i + 1) {
    const l = message[i];
    const n = alphabet.indexOf(l);
    if (n >= 0) {
      const c = callback(n);
      window.output = window.output + alphabet[c];
    } else {
      window.output = window.output + l;
    }
  }
  idk();
}
// eslint-disable-next-line no-unused-vars
function idk() {
  let output = window.output;
  let outputlowercase = output.toLowerCase();
  log(outputlowercase);
}
