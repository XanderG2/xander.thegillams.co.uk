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

let timeout = null;
function afterDelay(fn) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  timeout = setTimeout(() => {
    timeout = null;
    fn();
  }, 5000);
}

function load() {
  if (!state) {
    state = { pageName: "start" };
  }
  logEl.innerHTML = "";
  logEl.className = "";
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
  divEl.innerHTML = typeof html === "function" ? html() : html;
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
    message: "you awaken in a dark room.",
    actions: [
      {
        text: "look around",
        action() {
          go("lookAround");
        },
      },
    ],
  },

  lookAround: {
    message: function() {
      if (state.lampOn) {
        return "By the bed is an enchient, dusty lamp, which is on. The door way leeds to a corridor.";
      } else {
        return "By the bed is an enchient, dusty lamp, which is off. The door way leeds to a corridor.";
      }
    },
    actions: [
      {
        text: "go to corridor",
        action() {
          go("corridor");
        },
      },
      {
        text: "toggle lamp",
        action() {
          state.lampOn = !state.lampOn;
          go("lamp");
        },
      },
    ],
  },

  lamp: {
    message: function() {
      if (state.lampOn) {
        return "The lamp is on";
      } else {
        return "The lamp is off";
      }
    },
    actions: [
      {
        text: "look around",
        action() {
          go("lookAround");
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
        action() {
          go("left");
        },
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
  left: {
    message:
      "you go left you hear screams you look around and see a hallway. You can't see whats at the end. Do you take a peek or go back",
    actions: [
      {
        text: "take a peek",
        action() {
          go("takeAPeek");
        },
      },
      {
        text: "go back",
        action() {
          go("corridor");
        },
      },
    ],
  },
  takeAPeek: {
    message:
      "You go to the end of the hallway. You see a door. Do you go into the door or go back?",
    actions: [
      {
        text: "go into door",
        action() {
          go("dooratendofhallway");
        },
      },
      {
        text: "go back",
        action() {
          go("hallway");
        },
      },
    ],
  },
  dooratendofhallway: {
    message:
      "you go though you see a person playing a game. You think the screams come from the game. Do you tab the person?",
    actions: [
      {
        text: "tap the person",
        action() {
          afterDelay(() => {
            logEl.className = "DED";
          });
          go("tapperson");
        },
      },
    ],
  },
  tapperson: {
    message:
      "you tap the person on the shoulder. they turn round. You regret that. You <strong>DIE</strong>! ",
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
