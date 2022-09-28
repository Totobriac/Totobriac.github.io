import { Up } from "./up.js";
import { Down } from "./down.js";
import { drawTrack, upDist } from "./track.js";
import { Controls } from "./controls.js";
import { ctx } from "../../script.js";

var rightLeftKeys = new Image();
rightLeftKeys.src = "./assets/11_race/intro.png";

var up;
var down;
var controls;


window.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
    if (!up) up = new Up(ctx, runningElefant, idleElefant, 266,171,133,85, 200);
    if (!down) down = new Down(ctx, runningHipo, idleHipo, 198,175,133,117, 270);
    if (!controls) controls = new Controls();

    startGame();
  } else if(e.code === "ArrowRight") {
    startGame();
    if (!up) up = new Up(ctx, runningHipo, idleHipo, 198,175,133,117, 180);
    if (!down) down = new Down(ctx, runningElefant, idleElefant, 266,171,133,85, 300);
    if (!controls) controls = new Controls();

  }
})

var runningHipo = new Image();
runningHipo.src = "./assets/11_race/hipo.png";

var idleHipo = new Image();
idleHipo.src = "./assets/11_race/idleH.png";

var runningElefant = new Image();
runningElefant.src = "./assets/11_race/ele.png";

var idleElefant = new Image();
idleElefant.src = "./assets/11_race/idleEle.png";

var circleD = 0;
var start = false;

var raceStarted = false;

var speed = 0;

function startLevel(ctx, game, dino) {
  if (circleD < 260 && !start) circleD += 0.5;
  if (circleD >= 0.5 && start) circleD -= 0.5;
  if (circleD === 0 && start) game.start = true;

  ctx.drawImage(rightLeftKeys, 515, 130, 222 * 0.8, 140 * 0.8);
  ctx.save();
  ctx.globalCompositeOperation = "destination-in";
  ctx.beginPath();
  ctx.arc(602, 203, circleD, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();

  if (game.start) {

    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
        raceStarted = true;
      }
    });

    canvas.height = 400;
    canvas.width = 1200;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (speed > 0) speed = speedReg(speed);
    ctx.fillStyle = "rgb(72, 206,222)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawTrack(ctx);

    up.draw();
    down.draw();
    upDist(speed);
  }
}

function speedReg(speed) {
  switch (true) {
    case speed < 50:
      return (speed -= 0.04);
    case speed < 60:
      return (speed -= 0.06);
    case speed < 70:
      return (speed -= 0.08);
    case speed < 80:
      return (speed -= 0.12);
    case speed < 90:
      return (speed -= 0.14);
    case speed < 100:
      return (speed -= 0.16);
    case speed > 100:
      return 100;
  }
}

function speedUp() {
  speed += 0.5;
}

function startGame() {
  start = true;
};

export { speedUp, speed, raceStarted, up, startLevel };
