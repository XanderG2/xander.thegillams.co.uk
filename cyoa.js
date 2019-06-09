// const controlsEl = document.getElementById("controls");
const logEl = document.getElementById("log");
const buttonsEl = document.getElementById("buttons");

let state;
try {
  state = JSON.parse(localStorage.getItem("state"));
} catch (e) {
  // Nothing;
}

let lastStateString = null;
function saveState() {
  const newStateString = JSON.stringify(state);
  if (newStateString !== lastStateString) {
    localStorage.setItem("state", newStateString);
    lastStateString = newStateString;
  }
}

function load() {
  if (!state) {
    state = { pageName: "start" };
  }
  logEl.innerHTML = "";
  setActions([]);
  go(state.pageName || "start");
  saveState();
}

function restart() {
  state = null;
  load();
}
window.restart = restart;

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
      buttonEl.onclick = () => {
        button.action();
        saveState();
      };
      buttonEl.textContent = button.text;
      buttonsEl.appendChild(buttonEl);
    }
  } else {
    buttonsEl.innerHTML = "There are no further actions to take.";
  }
}

/* Xander */
const story = {
  start: {
    message:
      "you awaken in a dark room. By the bed is an enchient, dusty lamp. The door way leeds to a corridor.",
    actions: [
      {
        text: "go to corridor",
        action() {
          go("corridor");
        },
      },
    ],
  },

  hi: {
    message: "hi",
    actions: [
      {
        text: "go back to start",
        action() {
          restart();
        },
      },
    ],
  },
  corridor: {
    message:
      "you come to the corridor. You have two options one go left one go right wich one do you choose?",
    actions: [
      {
        text: "go left",
      },
      {
        text: "go right",
        action() {
          go("right");
        },
      },
    ],
  },
  right: {
    message:
      "you go right you see one more door. You can either go back or go into the other door. Do you choose to keep going or not?",
    actions: [
      {
        text: "go back",
        action() {
          go("corridor");
        },
      },
    ],
  },
};

function go(pageName) {
  const page = story[pageName];
  if (!page) {
    alert(`page ${pageName} not found`);
    return;
  }
  state.pageName = pageName;
  addLog(page.message);
  setActions(page.actions);
}

load();
