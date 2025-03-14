function inputIsNaN() {
  return (inp.value = inp.value == "NaN" ? "error" : inp.value);
}

function inputIsInfinity() {
  return (inp.value = inp.value == "Infinity" ? "\u221E" : inp.value);
}

function inputIsMinusInfinity() {
  return (inp.value = inp.value == "-Infinity" ? "-\u221E" : inp.value);
}

function insert(str) {
  inp.value += str;

  if (inp.value.substr(0, 1) == "0" && inp.value.length < 3) {
    inp.value = str;
  }
}

function clearValue() {
  inp.value = "0";
}

function equal() {
  try {
    if (inp.value) {
      inp.value = eval(inp.value);
    }

    if (inp.value.length > 17) {
      let num = +inp.value;
      num = num.toFixed(10);
      inp.value = num;
    }

    if (inp.value == "undefined") {
      inp.value = "error";
    }

    inputIsNaN();
    inputIsInfinity();
    inputIsMinusInfinity();
  } catch (e) {
    inp.value = "error";
  }
}

function showPercent() {
  inp.value = eval(inp.value / 100);

  inputIsNaN();
}

function deleteNumber() {
  let str = inp.value.slice(0, inp.value.length - 1);

  inp.value = str;
}

function factorial() {
  let result = 1;

  if (inp.value < 0) result = "error";
  if (inp.value == 0) result = 1;

  for (let i = 1; i <= inp.value; i++) {
    result = result * i;
  }

  if (
    inp.value.includes("*") ||
    inp.value.includes("/") ||
    inp.value.includes("-") ||
    inp.value.includes("+") ||
    inp.value.includes(".")
  ) {
    result = "error";
  }

  if (result == "Infinity") {
    result = "\u221E";
  }

  if (
    inp.value == "\u221E" ||
    inp.value.includes("error") ||
    inp.value.includes("(") ||
    inp.value.includes(")")
  ) {
    result = "error";
  }

  inp.value = result;
}

function fib(n) {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  if (
    inp.value.includes("*") ||
    inp.value.includes("/") ||
    inp.value.includes("-") ||
    inp.value.includes("+") ||
    inp.value.includes(".")
  ) {
    b = "error";
  }

  if (b == "Infinity") {
    b = "\u221E";
  }

  if (
    inp.value == "\u221E" ||
    inp.value.includes("error") ||
    inp.value.includes("(") ||
    inp.value.includes(")")
  ) {
    b = "error";
  }

  inp.value = b;

  inputIsInfinity();
}

function showMathPI() {
  inp.value = Math.PI;
}

function showMathE() {
  inp.value = Math.E;
}

function powMathE() {
  inp.value = Math.E ** inp.value;

  inputIsInfinity();
  inputIsNaN();
}

function showMathRandom() {
  inp.value = Math.random();
}

function xPowTwo() {
  inp.value = inp.value ** 2;

  inputIsInfinity();
  inputIsNaN();
}

function xPowThree() {
  inp.value = inp.value ** 3;

  inputIsInfinity();
  inputIsMinusInfinity();
  inputIsNaN();
}

function xPowY() {
  if (inp.value.startsWith("-")) {
    inp.value = "(" + inp.value + ")";
  }

  inp.value = inp.value + "**";
}

function tenPowX() {
  inp.value = 10 ** inp.value;

  inputIsInfinity();
  inputIsNaN();
}

function twoPowX() {
  inp.value = 2 ** inp.value;

  inputIsInfinity();
  inputIsNaN();
}

function threePowX() {
  inp.value = 3 ** inp.value;

  inputIsInfinity();
  inputIsNaN();
}

function oneDivByX() {
  inp.value = 1 / inp.value;

  inputIsInfinity();
  inputIsNaN();
}

function showMaxInteger() {
  try {
    let numbers = inp.value.split(".");
    inp.value = eval(`Math.max(${numbers})`);
    inputIsMinusInfinity();
  } catch (e) {
    inp.value = "error";
  }
}

function showMinInteger() {
  try {
    let numbers = inp.value.split(".");
    inp.value = eval(`Math.min(${numbers})`);
    inputIsInfinity();
  } catch (e) {
    inp.value = "error";
  }
}

function showLog2() {
  inp.value = Math.log2(inp.value);

  inputIsMinusInfinity();
  inputIsNaN();
}

function showLog10() {
  inp.value = Math.log10(inp.value);

  inputIsMinusInfinity();
  inputIsNaN();
}

function showLn() {
  inp.value = Math.log(inp.value);

  inputIsMinusInfinity();
  inputIsNaN();
}

function showSQRT() {
  inp.value = Math.sqrt(inp.value);

  inputIsNaN();
}

function showCBRT() {
  inp.value = Math.cbrt(inp.value);

  inputIsNaN();
}

function showRoot() {
  let result = inp.value.split(".");
  inp.value = Math.pow(result[0], 1 / result[1]);

  inputIsNaN();
  inputIsInfinity();

  if (result.length > 2) {
    inp.value = "error";
  }
}

function showSinDeg() {
  let deg = inp.value;
  deg = deg / (180 / Math.PI);
  let sin = Math.sin(deg);

  if (isNaN(deg)) {
    sin = "error";
  }

  if (deg % Math.PI == 0) {
    sin = 0;
  }

  if (
    ((deg / Math.PI).toString().includes(".16666") &&
      deg > 0 &&
      Math.floor(deg / Math.PI) % 2 == 0) ||
    ((deg / Math.PI).toString().includes(".833333") &&
      deg > 0 &&
      Math.floor(deg / Math.PI) % 2 == 0) ||
    ((deg / Math.PI).toString().includes(".16666") &&
      deg < 0 &&
      Math.floor(-(deg / Math.PI)) % 2 == 1) ||
    ((deg / Math.PI).toString().includes(".833333") &&
      deg < 0 &&
      Math.floor(-(deg / Math.PI)) % 2 == 1)
  ) {
    sin = 0.5;
  }

  if (
    ((deg / Math.PI).toString().includes(".16666") &&
      deg < 0 &&
      Math.floor(-deg / Math.PI) % 2 == 0) ||
    ((deg / Math.PI).toString().includes(".833333") &&
      deg < 0 &&
      Math.floor(-(deg / Math.PI)) % 2 == 0) ||
    ((deg / Math.PI).toString().includes(".16666") &&
      deg > 0 &&
      Math.floor(deg / Math.PI) % 2 == 1) ||
    ((deg / Math.PI).toString().includes(".833333") &&
      deg > 0 &&
      Math.floor(deg / Math.PI) % 2 == 1)
  ) {
    sin = -0.5;
  }

  inp.value = sin;
}

function showCosDeg() {
  let deg = inp.value;
  deg = deg / (180 / Math.PI);
  let cos = Math.cos(deg);

  if (isNaN(deg)) {
    cos = "error";
  }

  if (
    ((deg / Math.PI).toString().includes(".33333") &&
      deg > 0 &&
      Math.floor(deg / Math.PI) % 2 == 0) ||
    ((deg / Math.PI).toString().includes(".66666") &&
      deg > 0 &&
      Math.floor(deg / Math.PI) % 2 == 1) ||
    ((deg / Math.PI).toString().includes(".33333") &&
      deg < 0 &&
      Math.floor(-(deg / Math.PI)) % 2 == 0) ||
    ((deg / Math.PI).toString().includes(".66666") &&
      deg < 0 &&
      Math.floor(-(deg / Math.PI)) % 2 == 1)
  ) {
    cos = 0.5;
  }

  if (
    ((deg / Math.PI).toString().includes(".33333") &&
      deg > 0 &&
      Math.floor(deg / Math.PI) % 2 == 1) ||
    ((deg / Math.PI).toString().includes(".66666") &&
      deg > 0 &&
      Math.floor(deg / Math.PI) % 2 == 0) ||
    ((deg / Math.PI).toString().includes(".66666") &&
      deg < 0 &&
      Math.floor(-(deg / Math.PI)) % 2 == 0) ||
    ((deg / Math.PI).toString().includes(".33333") &&
      deg < 0 &&
      Math.floor(-(deg / Math.PI)) % 2 == 1)
  ) {
    cos = -0.5;
  }

  if (
    ((deg / Math.PI)
      .toFixed(5)
      .toString()
      .includes(".50000") &&
      deg > 0 &&
      Math.floor((deg / Math.PI).toFixed(5)) % 2 == 1) ||
    (-(deg / Math.PI)
      .toFixed(5)
      .toString()
      .includes(".50000") &&
      deg < 0 &&
      Math.floor(-(deg / Math.PI).toFixed(5)) % 2 == 1)
  ) {
    cos = 0;
  }

  inp.value = cos;
}

function showTanDeg() {
  let deg = inp.value;
  deg = deg / (180 / Math.PI);
  let tan = Math.tan(deg);

  if (isNaN(deg)) {
    tan = "error";
  }

  if (deg % Math.PI == 0) {
    tan = 0;
  }

  if (
    ((deg / Math.PI)
      .toFixed(5)
      .toString()
      .includes(".25000") &&
      deg > 0) ||
    (-(deg / Math.PI)
      .toFixed(5)
      .toString()
      .includes(".75000") &&
      deg < 0)
  ) {
    tan = 1;
  }

  if (
    ((deg / Math.PI)
      .toFixed(5)
      .toString()
      .includes(".25000") &&
      deg < 0) ||
    ((deg / Math.PI)
      .toFixed(5)
      .toString()
      .includes(".75000") &&
      deg > 0)
  ) {
    tan = -1;
  }

  if (
    (deg / Math.PI)
      .toFixed(5)
      .toString()
      .includes(".50000") &&
    deg > 0
  ) {
    tan = "\u221E";
  }

  if (
    -(deg / Math.PI)
      .toFixed(5)
      .toString()
      .includes(".50000") &&
    deg < 0
  ) {
    tan = "-\u221E";
  }

  inp.value = tan;
}

function showCtgDeg() {
  let deg = inp.value;
  deg = deg / (180 / Math.PI);
  let tan = Math.tan(deg);
  let ctg = 1 / tan;

  if (isNaN(deg)) {
    ctg = "error";
  }

  if ((-deg % Math.PI == 0 && deg < 0) || ctg == "-Infinity") {
    ctg = "-\u221E";
  }

  if ((deg % Math.PI == 0 && deg > 0) || ctg == "Infinity") {
    ctg = "\u221E";
  }

  if (
    ((deg / Math.PI)
      .toFixed(5)
      .toString()
      .includes(".25000") &&
      deg > 0) ||
    (-(deg / Math.PI)
      .toFixed(5)
      .toString()
      .includes(".75000") &&
      deg < 0)
  ) {
    ctg = 1;
  }

  if (
    (-(deg / Math.PI)
      .toFixed(5)
      .toString()
      .includes(".25000") &&
      deg < 0) ||
    ((deg / Math.PI)
      .toFixed(5)
      .toString()
      .includes(".75000") &&
      deg > 0)
  ) {
    ctg = -1;
  }

  if (
    -(deg / Math.PI)
      .toFixed(5)
      .toString()
      .includes(".50000")
  ) {
    ctg = 0;
  }

  inp.value = ctg;
}

function showSinh() {
  inp.value = Math.sinh(inp.value);

  inputIsNaN();
  inputIsInfinity();
  inputIsMinusInfinity();
}

function showCosh() {
  inp.value = Math.cosh(inp.value);

  inputIsNaN();
  inputIsInfinity();
}

function showTanh() {
  inp.value = Math.tanh(inp.value);

  inputIsNaN();
}

function showCtgh() {
  inp.value = Math.cosh(inp.value) / Math.sinh(inp.value);

  inputIsNaN();
  inputIsInfinity();
  inputIsMinusInfinity();
}

function showArcsinDeg() {
  let sin = inp.value;
  let arcsin = Math.asin(sin);
  arcsin = arcsin * (180 / Math.PI);

  if (isNaN(arcsin)) {
    arcsin = "error";
  }

  if (sin == 0.5) arcsin = 30;
  if (sin == -0.5) arcsin = -30;

  inp.value = arcsin;
}

function showArccosDeg() {
  let cos = inp.value;
  let arccos = Math.acos(cos);
  arccos = arccos * (180 / Math.PI);

  if (isNaN(arccos)) {
    arccos = "error";
  }

  if (cos == 0.5) arccos = 60;
  if (cos == -0.5) arccos = -60;

  inp.value = arccos;
}

function showArctanDeg() {
  let tan = inp.value;
  let arctan = Math.atan(tan);
  arctan = arctan * (180 / Math.PI);

  if (isNaN(arctan)) {
    arctan = "error";
  }

  inp.value = arctan;
}

function showArcctgDeg() {
  let ctg = inp.value;
  let arcctg = Math.atan(1 / ctg);
  arcctg = arcctg * (180 / Math.PI);

  if (isNaN(arcctg)) {
    arcctg = "error";
  }

  inp.value = arcctg;
}

function showAsinh() {
  let asinh = Math.asinh(inp.value);
  inp.value = asinh;

  inputIsNaN();
}

function showAcosh() {
  let acosh = Math.acosh(inp.value);
  inp.value = acosh;

  inputIsNaN();
}

function showAtanh() {
  let atanh = Math.atanh(inp.value);
  inp.value = atanh;

  inputIsNaN();
  inputIsInfinity();
  inputIsMinusInfinity();
}

function showActgh() {
  let actgh = Math.atanh(1 / inp.value);
  inp.value = actgh;

  inputIsNaN();
  inputIsInfinity();
  inputIsMinusInfinity();
}
