/* eslint-disable no-shadow */
/* eslint-disable no-console */
const ul = document.getElementById("ul");
const message = "twppm sv cmg ajw jwaxsnu htsi";
const messageg = message.toUpperCase();
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".repeat(3);

function log(m) {
  const el = document.createElement("li");
  el.innerText = m;
  ul.appendChild(el);
}
function decipher(message, callback) {
  let output = "";
  for (let i = 0; i < message.length; i = i + 1) {
    const l = message[i];
    const n = alphabet.indexOf(l);
    if (n >= 0) {
      const c = callback(n);
      output = output + alphabet[c];
    } else {
      output = output + l;
    }
  }
  const outputlowercase = output.toLowerCase();
  log(outputlowercase);
}
for (let j = 0; j < 26; j = j + 1) {
  decipher(messageg, function(n) {
    return -n + 26 + j;
  });
}
console.log("29x57 is");
console.log(29 * 57);
