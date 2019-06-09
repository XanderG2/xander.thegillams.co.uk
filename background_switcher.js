//set function
const h1 = document.getElementById("color");
const x = document.getElementById("Background");

window.set = function set() {
  //makes the input lowercase if they type it in uppercase
  const val = x.value.toLowerCase();
  //SetColor function
  function SetColor(input, color, label, textColor = "Black") {
    if (val == input) {
      document.body.style.backgroundColor = color;
      h1.innerHTML = label;
      h1.style.color = textColor;
    }
  }
  //Colors
  SetColor("green", "Green", "GREEN");
  SetColor("yellow", "Yellow", "YELLOW");
  SetColor("white", "White", "WHITE");
  SetColor("orange", "Orange", "ORANGE");
  SetColor("light blue", "Lightblue", "LIGHT BLUE");
  SetColor("salmon", "Salmon", "SALMON");
  SetColor(
    "options",
    "transparent",
    "orange green salmon red yellow light blue and white you can also reset"
  );
  SetColor("green", "Green", "GREEN");
  SetColor("purple", "Purple", "PURPLE");
  SetColor("oak", "#765c48", "OAK");
  SetColor("birch", "#f8dfa1", "BIRCH");
  SetColor("cream", "FEF9E2", "CREAM");
  SetColor("spruce leaves", "#4b7641", "SPRUCE LEAVES");
  SetColor("willow leaves", "#cad7c5", "WILLOW LEAVES");
  SetColor("soot", "#5d5c5e", "BLACK AS SOOT", "White");
  SetColor("black", "Black", "BLACK", "White");
  SetColor("gray", "gray", "GRAY", "White");
  SetColor("grey", "gray", "GREY");
};
