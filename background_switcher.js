//set function
const h1 = document.getElementById("color");
const x = document.getElementById("Background");

window.set = function set() {
  //makes the input lowercase if they type it in uppercase
  const val = x.value.toLowerCase();
  //SetColor function
  function SetColor(input, color, label) {
    if (val == input) {
      document.body.style.backgroundColor = color;
      h1.innerHTML = label;
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
};
