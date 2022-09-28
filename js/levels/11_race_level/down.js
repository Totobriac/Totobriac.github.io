import { speed } from "./startLevel11.js";

class Down {
  constructor(ctx, running, idle, colSize, lineSize, realH, realW, yOff, type) {
    this.ctx = ctx;
    this.maxTick = 4;
    this.tick = 0;
    this.frame = 0;
    this.xOffset = 0;
    this.sprite = idle;
    this.running = running;
    this.idle = idle;
    this.colSize = colSize;
    this.lineSize = lineSize;
    this.realW = realW;
    this.realH = realH;
    this.yOff = yOff;
    this.hasWon = false;
    this.type = type;
  }
  draw() {
    this.update();
    this.ctx.drawImage(
      this.sprite,
      this.col * this.colSize,
      this.line * this.lineSize,
      this.colSize,
      this.lineSize,
      this.xOffset,
      this.yOff,
      this.realH,
      this.realW
    );
  }
  update() {
    if (speed > 0) {
      this.sprite = this.running;
      this.maxFrame = 15;
    } else {
      this.sprite = this.idle;
      this.maxFrame = 19;
    }

    if (speed < 20) {
      this.maxTick = 4;
    } else if (speed < 30) {
      this.maxTick = 3;
    } else if (speed < 40) {
      this.maxTick = 2;
    } else if (speed < 50) {
      this.maxTick = 1;
    }
    if (this.tick < this.maxTick) {
      this.tick++;
    } else {
      this.tick = 0;
      this.frame < this.maxFrame ? this.frame++ : (this.frame = 0);
    }
    this.line = Math.floor(this.frame / 5);
    this.col = this.frame - this.line * 5;
    this.xOffset < speed * 10 ? (this.xOffset += 0.5) : (this.xOffset -= 0.5);
  }
  won() {
    this.hasWon = true;
  }
}

export { Down };
