let hockey1;
let hockey2;
let ball;
let point1 = 0;
let point2 = 0;
let myScore;
let myScore1;
let ctx;
const fps = 30;

const P1_UP = 87; // 'w'
const P1_DOWN = 83; // 's'
const P2_UP = 38; //Up arrow
const P2_DOWN = 40; // Down arrow

const BALL_SPEED_X = 8;
const BALL_SPEED_Y = 4;
const HOCKEY_MOVEMENT = 10;
const WIN_SCORE = 5;

window.startGame = () => {
  myGameArea.start();
  hockey1 = new Component(8, 60, "yellow", 20, 150);
  hockey2 = new Component(8, 60, "lime", 670, 150);
  ball = new Component(7, 7, "green", 350, 170);
  ball.speedX = BALL_SPEED_X;
  myScore = new Component("16px", "Consolas", "yellow", 200, 25, "text");
  myScore1 = new Component("16px", "Consolas", "lime", 410, 25, "text");
};

const myGameArea = {
  canvas: document.createElement("canvas"),
  keys: {},
  start() {
    this.canvas.width = 700;
    this.canvas.height = 390;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, Math.floor(1000 / fps));
    window.addEventListener("keydown", e => {
      myGameArea.keys[e.keyCode] = true;
    });
    window.addEventListener("keyup", e => {
      myGameArea.keys[e.keyCode] = false;
    });
  },

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  stop() {
    clearInterval(this.interval);
  },
};

class Component {
  constructor(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.color = color;
  }

  update() {
    ctx = myGameArea.context;
    if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = this.color;
      ctx.fillText(this.text, this.x, this.y);
    } else {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  crashWith(otherobj) {
    const myleft = this.x;
    const myright = this.x + this.width;
    const mytop = this.y;
    const mybottom = this.y + this.height;
    const otherleft = otherobj.x;
    const otherright = otherobj.x + otherobj.width;
    const othertop = otherobj.y;
    const otherbottom = otherobj.y + otherobj.height;
    let crash = true;
    if (
      mybottom < othertop ||
      mytop > otherbottom ||
      myright < otherleft ||
      myleft > otherright
    ) {
      crash = false;
    }
    return crash;
  }
}

function updateGameArea() {
  //Keyboard control

  /* NOTE: if you hit the ball on a corner whilst
   moving in that direction, the ball gets spinned. */
  if (myGameArea.keys[P1_UP]) {
    hockey1.y -= HOCKEY_MOVEMENT;
    if (ball.crashWith(hockey1)) {
      ball.speedY += -BALL_SPEED_Y;
      ball.speedX = BALL_SPEED_X;
    }
  }
  if (myGameArea.keys[P1_DOWN]) {
    hockey1.y += HOCKEY_MOVEMENT;
    if (ball.crashWith(hockey1)) {
      ball.speedY += BALL_SPEED_Y;
      ball.speedX = BALL_SPEED_X;
    }
  }
  if (myGameArea.keys[P2_UP]) {
    hockey2.y -= HOCKEY_MOVEMENT;
    if (ball.crashWith(hockey2)) {
      ball.speedY += -BALL_SPEED_Y;
      ball.speedX = -BALL_SPEED_X;
    }
  }
  if (myGameArea.keys[P2_DOWN]) {
    hockey2.y += HOCKEY_MOVEMENT;
    if (ball.crashWith(hockey2)) {
      ball.speedY += BALL_SPEED_Y;
      ball.speedX = -BALL_SPEED_X;
    }
  }

  //Hockey Control

  if (hockey1.y <= 0) {
    hockey1.y = 0;
  }
  if (hockey1.y >= 350) {
    hockey1.y = 350;
  }
  if (hockey2.y <= 0) {
    hockey2.y = 0;
  }
  if (hockey2.y >= 350) {
    hockey2.y = 350;
  }

  //BALL MOVEMENTS
  ball.newPos();

  if (ball.crashWith(hockey1)) {
    //ball.speedY = 0;
    ball.speedX = BALL_SPEED_X;
  } else if (ball.crashWith(hockey2)) {
    //ball.speedY = 0;
    ball.speedX = -BALL_SPEED_X;
  } else {
    //ball.x += -4;
  }

  if (ball.y <= 0) {
    ball.speedY = Math.abs(ball.speedY);
  }
  if (ball.y >= 390) {
    ball.speedY = -Math.abs(ball.speedY);
  }
  if (ball.x <= 2) {
    ball.x = 690;
    point2 += 1;
    ball.speedY = 0;
    ball.y = 170;
    if (point2 >= WIN_SCORE) {
      myGameArea.stop();
      alert("P2 wins");
    }
  }
  if (ball.x >= 700) {
    ball.x = 0;
    point1 += 1;
    ball.speedY = 0;
    ball.y = 170;
    if (point1 >= WIN_SCORE) {
      myGameArea.stop();
      alert("P1 wins");
    }
  }
  // if you want
  //			console.log(point1);
  //			console.log(point2);

  //ball.x -= 4;
  myGameArea.clear();
  hockey1.update();
  hockey2.update();
  ball.update();
  myScore.text = "SCORE: " + point1;
  myScore.update();
  myScore1.text = "SCORE: " + point2;
  myScore1.update();
}
