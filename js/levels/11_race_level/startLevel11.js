import { Up } from "./up.js";
import { Down } from "./down.js";
import { drawTrack, upDist } from "./track.js";
import { Controls } from "./controls.js";

var runningHipo = new Image();
runningHipo.src = "./assets/11_race/hipo.png";

var idleHipo = new Image();
idleHipo.src = "./assets/11_race/idleH.png";

var runningElefant = new Image();
runningElefant.src = "./assets/11_race/ele.png";

var idleElefant = new Image();
idleElefant.src = "./assets/11_race/idleEle.png";

var raceStarted = false;

var up;
var down;
var controls;
var speed = 0;

function startLevel(ctx) {
  if (!up) up = new Up(ctx, runningElefant, idleElefant);
  if (!down) down = new Down(ctx, runningHipo, idleHipo);
  if (!controls) controls = new Controls();

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

export { speedUp, speed, raceStarted, up, startLevel };
