// const controlsEl = document.getElementById("controls");
const logEl = document.getElementById("log");
const buttonsEl = document.getElementById("buttons");

function reset() {
  logEl.innerHTML = "";
  setActions([]);
}

function addLog(html) {
  const divEl = document.createElement("div");
  divEl.className = "entry";
  divEl.innerHTML = html;
  logEl.prepend(divEl);
}

function setActions(buttons) {
  buttonsEl.innerHTML = "";
  if (buttons.length) {
    for (const button of buttons) {
      const buttonEl = document.createElement("button");
      buttonEl.onclick = button.action;
      buttonEl.textContent = button.text;
      buttonsEl.appendChild(buttonEl);
    }
  } else {
    buttonsEl.innerHTML = "There are no further actions to take.";
  }
}

reset();

/* Xander */
const story = {
  start: {
    message: "welcome to the story!",
    actions: [
      {
        text: "hi",
        action: function() {
          goToPage("hi");
        },
      },
    ],
  },

  hi: {
    message: "hi",
    actions: [
      {
        text: "go back to start",
        action: function() {
          reset();
          goToPage("start");
        },
      },
    ],
  },
};

function goToPage(pageName) {
  const page = story[pageName];
  if (!page) {
    alert(`page ${pageName} not found`);
    return;
  }
  addLog(page.message);
  setActions(page.actions);
}

goToPage("start");
