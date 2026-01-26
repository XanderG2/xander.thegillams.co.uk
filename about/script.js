const deutsch = document.getElementById("deutsch");

deutsch.addEventListener("change", () => {
  if (deutsch.checked) {
    document.querySelector(".deutsch").style.display = "block";
    document.querySelector(".english").style.display = "none";
  } else {
    document.querySelector(".deutsch").style.display = "none";
    document.querySelector(".english").style.display = "block";
  }
});
