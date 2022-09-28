import { raceStarted } from "./startLevel11.js";

class Up {
  constructor(ctx, running, idle) {
    this.ctx = ctx;
    this.maxTick = 4;
    this.tick = 0;
    this.frame = 0;
		this.sprite = idle;
		this.running = running;
    this.maxTick = 4;
		this.idle = idle;
    this.speed = 0;
    this.xOffset = 0;
  }
  draw() {
    this.update();
    this.ctx.drawImage(
      this.sprite,
      this.col * 266,
      this.line * 171,
      266,
      171,
      this.xOffset,
      200,
      133,
      85
    );
  }
  update() {

    if (this.speed < 10) {
			this.maxTick = 3
		} else if (this.speed < 20) {
			this.maxTick = 2
		} else if (this.speed <+ 30) {
			this.maxTick = 1
		} 

    if (raceStarted && this.speed < 30) this.speed += 0.1;
		if(this.speed > 0) {
			this.sprite = this.running;
			this.maxFrame = 15;
		} else {
			this.sprite = this.idle;
			this.maxFrame = 19;
		}

    if (this.tick < this.maxTick) {
      this.tick++;
    } else {
      this.tick = 0;
      this.frame < this.maxFrame ? this.frame++ : (this.frame = 0);
    }
    this.line = Math.floor(this.frame / 5);
    this.col = this.frame - this.line * 5;

    this.xOffset < this.speed * 10 ? this.xOffset += 0.5 : this.xOffset -= 0.5;

  }
}

export { Up };
