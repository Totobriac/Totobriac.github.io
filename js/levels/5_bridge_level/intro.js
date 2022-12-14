import { src } from "./lastPic.js";

var colSize = 2;
var columns = canvas.width / colSize;

var y = Array(columns).fill(0);
var yIndex = [...Array(columns).keys()];

var y2 = Array(columns).fill(0);
var yIndex2 = [...Array(columns).keys()];

var out = false;

var tempCanvas = document.createElement('canvas');
var tempContext = tempCanvas.getContext('2d');

tempCanvas.width = 1200;
tempCanvas.height = 400;

var lastPix = new Image();
lastPix.src = src;

function introIn(ctx) {

  ctx.fillStyle = "white";

  for (let i = 0; i < columns; i++) {
    if (y[i] != 0 && y[i] < 400) {
      y[i] += 6;
    }
    ctx.fillRect(i * colSize, y[i], colSize, 400);
  }

  var cols = [];
  for (let i = 0; i < 4; i++) {
    cols.push(Math.floor(Math.random() * yIndex.length));
  }

  cols.forEach((col, i) => {
    if (y[yIndex[col]] === 0) {
      y[yIndex[col]] += 6;
    }
    yIndex.splice(col, 1);
  });
}

function introOut(ctx, game) {

  if (!out) {
    tempContext.drawImage(lastPix, 0, 0);
    out = true;
  }

  var cols = [];
  var endedCol = 0;

  for (let i = 0; i < 4; i++) {
    cols.push(Math.floor(Math.random() * yIndex2.length));
  }
  cols.forEach((col, i) => {
    if (y2[yIndex2[col]] === 0) {
      y2[yIndex2[col]] += 2;
    }
    yIndex2.splice(col, 1);
  });
  for (let i = 0; i < columns; i++) {
    if (y2[i] != 0 && y2[i] < 400) {
      y2[i] += 2;      
    } else {
      endedCol ++;
    } 
    ctx.drawImage(tempCanvas, i * colSize, 0, colSize, 400, i * colSize, y2[i], colSize, 400);
  }
  if (endedCol === 600) {
    game.switchLevel(6);
  };
}

export { introIn, introOut };
