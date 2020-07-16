let inp = document.querySelector("input");
let spans = document.querySelectorAll(
  "#leftBr, #rightBr, #factorial, #fibonacci, #xPow2, #twoPowX, #log2, #PI, #E, #min, #xPowY, #tenPowX, #powE, #oneDiv, #max, #sqrt, #cbrt, #root, #ln, #random"
);
let Toogle = document.querySelector("#toogle");
let elements = document.querySelectorAll(
  "#sin, #cos, #tan, #ctg, #xPow3, #threePowX, #log10, #sinh, #cosh, #tanh, #ctgh, #arcsin, #arccos, #arctan, #arcctg, #asinh, #acosh, #atanh, #actgh, #rad"
);
let Sup = document.querySelector("#sup");
let Rad = document.querySelector("#rad");

Toogle.style.background = "#3a3a3a";
Rad.style.display = "none";

for (let el of elements) {
  el.style.display = "none";
}

Toogle.addEventListener("click", function(e) {
  for (let span of spans) {
    span.style.display = span.style.display == "none" ? "inline-block" : "none";
  }

  for (let el of elements) {
    el.style.display = el.style.display == "none" ? "inline-block" : "none";
  }

  Toogle.style.background = Sup.style.background =
    e.target.style.background === "gray" ? "" : "gray";
  Toogle.style.color = Sup.style.color =
    e.target.style.color === "black" ? "" : "black";
});

Rad.addEventListener("click", function(e) {
  Rad.innerHTML = Rad.innerHTML == "Rad" ? "Deg" : "Rad";

  if (Rad.innerHTML == "Deg") {
    elements[0].onclick = function() {
      inp.value = Math.sin(inp.value);
      inputIsNaN();
    };

    elements[1].onclick = function() {
      inp.value = Math.cos(inp.value);
      inputIsNaN();
    };

    elements[2].onclick = function() {
      inp.value = Math.tan(inp.value);
      inputIsNaN();
    };

    elements[3].onclick = function() {
      inp.value = Math.cos(inp.value) / Math.sin(inp.value);
      inputIsNaN();
      inputIsInfinity();
    };

    elements[7].onclick = function() {
      inp.value = Math.asin(inp.value);
      inputIsNaN();
    };

    elements[8].onclick = function() {
      inp.value = Math.acos(inp.value);
      inputIsNaN();
    };

    elements[9].onclick = function() {
      inp.value = Math.atan(inp.value);
      inputIsNaN();
    };

    elements[10].onclick = function() {
      inp.value = Math.atan(1 / inp.value);
      inputIsNaN();
    };
  }

  if (Rad.innerHTML == "Rad") {
    elements[0].onclick = showSinDeg;
    elements[1].onclick = showCosDeg;
    elements[2].onclick = showTanDeg;
    elements[3].onclick = showCtgDeg;
    elements[7].onclick = showArcsinDeg;
    elements[8].onclick = showArccosDeg;
    elements[9].onclick = showArctanDeg;
    elements[10].onclick = showArcctgDeg;
  }
});
