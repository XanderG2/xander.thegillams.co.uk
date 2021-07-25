/* eslint-disable no-console */
console.log("Thing");
const message = "jryy qbar lbh penpxrq vg";
const messageg = message.toUpperCase();
const letters = messageg.split("");
console.log(letters);
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".repeat(3);
const alphabetletters = alphabet.split("");
console.log(alphabetletters);

let output = "";
for (let i = 0; i < letters.length; i = i + 1) {
  const l = letters[i];
  const n = alphabetletters.indexOf(l);
  if (n >= 0) {
    const c = n + 13;
    output = output + alphabetletters[c];
  } else {
    output = output + l;
  }
}
let outputlowercase = output.toLowerCase();
console.log(outputlowercase);
