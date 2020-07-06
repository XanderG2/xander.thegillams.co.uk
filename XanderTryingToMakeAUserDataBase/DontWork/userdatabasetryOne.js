const objPeople = [
  {
    username: "xander",
    password: "Trunki5113",
  },
];

const writeHere = document.getElementById("writeHere");
function getInfo() {
  const username = document.getElementById("username").nodeValue;
  const password = document.getElementById("password").value;

  for (i = 0; i < objPeople.length; i++) {
    if (
      username == objPeople[i].username &&
      password == objPeople[i].password
    ) {
      writeHere.innerHTML = "you are logged in";
      return;
    }
  }
  writeHere.innerHTML = "no";
}
