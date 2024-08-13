const inp = document.getElementById("text");
const resultDiv = document.getElementById("result");

async function getJSON() {
  try {
    const res = await fetch("./lyrics.json");
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Unable to fetch data:", error);
  }
}

let datas = null;

getJSON().then(data => {
  if (data) {
    datas = data;
  }
});

function check() {
  const input = inp.value
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"£\[\]@<>?+¬¦€']/g, "")
    .split(" ");
  let allOccurances = {};
  if (datas) {
    allLyrics = datas.songs;
    for (const song of allLyrics) {
      const lyrics = song.lyrics;
      const title = song.title;
      const album = song.album;
      if (!allOccurances[album]) {
        allOccurances[album] = {};
      }
      allOccurances[album][title] = 0;
      const words = lyrics.split(" ");
      let currentindex = 0;
      for (const word of words) {
        if (word === input[0]) {
          let arr = [];
          for (let i = 0; i < input.length; i++) {
            arr.push(words[currentindex + i]);
          }
          //console.log(arr);
          if (JSON.stringify(arr) == JSON.stringify(input)) {
            if (allOccurances[album][title] > 0) {
              allOccurances[album][title] += 1;
            } else {
              allOccurances[album][title] = 1;
            }
          }
        }
        currentindex++;
      }
    }
  } else {
    console.log("data not loaded yet");
  }
  resultDiv.innerHTML = "";
  const resultP = document.createElement("p");
  resultP.innerText = "Results for the word" + (input.length > 1 ? "s '" : " '") + input.join(" ") + "':";
  resultDiv.appendChild(resultP);
  for (const [sectionName, value] of Object.entries(allOccurances)) {
    const nospace = sectionName.replace(/\s/g, "");
    const sectionDiv = document.createElement("div");
    sectionDiv.id = nospace;
    sectionDiv.className = "section";
    const h2 = document.createElement("h2");
    h2.innerText = sectionName;
    const matches = document.createElement("div");
    matches.className = "matches";
    matches.innerHTML = JSON.stringify(value)
      .substring(2)
      .replaceAll(/[{},]/g, "<br/>")
      .replaceAll(/["]/g, "");
    const img = document.createElement("img");
    img.src = `img/${nospace}.jpg`;
    sectionDiv.appendChild(h2);
    sectionDiv.appendChild(matches);
    sectionDiv.appendChild(img);
    resultDiv.appendChild(sectionDiv);
  }
}
