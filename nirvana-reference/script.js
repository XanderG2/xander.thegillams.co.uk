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

getJSON().then((data) => {
  if (data) {
    datas = data;
  }
});

function check() {
  const input = inp.value.toLowerCase().split(" ");
  let allOccurances = {};
  if (datas) {
    allLyrics = datas.songs;
    for (song of allLyrics) {
      lyrics = song.lyrics;
      title = song.title;
      album = song.album;
      if (!allOccurances[album]) {
        allOccurances[album] = {};
      }
      allOccurances[album][title] = 0;
      words = lyrics.split(" ");
      let currentindex = 0;
      for (word of words) {
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
  fullText =
    "Results for the word(s) '" +
    input +
    "':\n" +
    JSON.stringify(allOccurances)
      .replaceAll(/[{},]/g, "\n")
      .replaceAll(/["]/g, "");
  resultDiv.innerText = fullText;
}
