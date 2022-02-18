const menu = document.getElementById("menu");
const menubutton = document.getElementById("menubutton");
let visible = false;
menubutton.onclick = () => {
  visible = !visible;
  if (visible) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};
