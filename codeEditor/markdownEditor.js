/*const input = document.getElementById("input");
const display = document.getElementById("display");
const displayTmp = null;
const replaceMap = new Map();
const test = document.getElementById("test");
const char = /\w/g;
let string;

replaceMap.set(/\#\#\#(\w*|[^_]*)/g, (_, string) => `<h3>${string}</h3>`);
replaceMap.set(/_(\w*|[^_]*)_/g, (_, string) => `<i>${string}</i>`);
replaceMap.set(
  /\*\*(\w*|[^_]*)\*\*/ /*g,
  (_, string) => `<strong>${string}</strong>`
);
replaceMap.set(
  /\[(\w*|[^`]*)\]/g,
  (_, string) => `<a target='_blank' href='${string}'>${string}</a>`
);

function run() {
  input.addEventListener("input", function() {
    displayTmp = input.value;

    replaceMap.forEach(function(newString, re) {
      var result = re.exec(displayTmp);
      if (result !== null) {
        displayTmp = displayTmp.replace(re, newString);
      }
      display.innerHTML = displayTmp;
    });
  });
}
run();
*/
/*function compile() {
  const markdown = document.getElementById("markdown");
  const code = document.getElementById("code").contentWindow.document;

  document.body.onkeyup = function() {
    code.open();
    code.writeln(markdown.value);
    code.close();
  };
}

compile();
*/
/*function compile() {
  const html = document.getElementById("html");
  const code = document.getElementById("code").contentWindow.document;

  document.body.onkeyup = function() {
    code.open();
    code.writeln("<html><body><script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>" + html.value + "</body></html>");
    code.close();
  };
  function markdown() {
    document.getElementsByName("body").innerHTML = marked();
  }
}

compile();*/
