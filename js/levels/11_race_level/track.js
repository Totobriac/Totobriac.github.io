import { up, raceStarted } from "./startLevel11.js";

var dTrack = new Image();
dTrack.src = "./assets/11_race/dTrack.png";

var uTrack = new Image();
uTrack.src = "./assets/11_race/uTrack.png";

var dTrackL = new Image();
dTrackL.src = "./assets/11_race/dTrackL.png";

var uTrackL = new Image();
uTrackL.src = "./assets/11_race/uTrackL.png";

var pub = new Image();
pub.src = "./assets/11_race/public.png";

var pub2 = new Image();
pub2.src = "./assets/11_race/public.png";

var board = new Image();
board.src = "./assets/11_race/board.png";

var fLine = new Image();
fLine.src = "./assets/11_race/fl.png";

var dist = 0;

var distUp = 0;

var numbers = [...Array(10).keys()].map((i) => (i + 1) * 10);

function drawTrack(ctx) {
  if (raceStarted) {
    distUp -= up.speed / 10;
  }
  ctx.drawImage(dTrack, dist, 304, 3840, 96);
  ctx.drawImage(dTrackL, dist + 1920, 304, 3840, 96);

  ctx.drawImage(uTrack, distUp, 232, 3840, 72);
  ctx.drawImage(uTrackL, distUp + 1920, 232, 3840, 72);

  ctx.drawImage(pub, dist * 0.5, 142, 3840, 90);
  ctx.drawImage(pub, dist * 0.5 + 3840, 142, 3840, 90);

  ctx.drawImage(board, 360, 0, 480, 174);

  ctx.drawImage(fLine, 0, 0, 22, 40, 9 * 450 + 450 + dist, 320, 44, 80);

  ctx.drawImage(fLine, 0, 0, 22, 40, 9 * 450 + 450 + distUp, 224, 44, 80);

  numbers.forEach((number, i) => {
    ctx.font = "30px arcade";
    ctx.fillStyle = "black";
    ctx.fillText(number.toString(), i * 450 + 450 + dist, 390);
	ctx.fillText(number.toString(), i * 450 + 450 + distUp, 294);
  });
}

function upDist(speed) {
  dist -= speed / 10;
}

export { drawTrack, upDist };
