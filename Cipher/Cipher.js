/* eslint-disable no-console */

const message = "yrggre ahzore o vf ahzore 7";
const messageg = message.toUpperCase();
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".repeat(3);

let output = "";
for (let i = 0; i < messageg.length; i = i + 1) {
  const l = messageg[i];
  const n = alphabet.indexOf(l);
  if (n >= 0) {
    const c = n + 13;
    output = output + alphabet[c];
  } else {
    output = output + l;
  }
}
let outputlowercase = output.toLowerCase();
console.log(outputlowercase);
