var periscoSprite = new Image();
periscoSprite.src = "./assets/4_submarine/peri_icon.png";
import { score } from "./startLevel4.js";


function drawCounter(game, ctx) {
  ctx.lineWidth = 2;
  ctx.drawImage(periscoSprite, 480, 5, 35, 35);

  if (score > 0) {
    ctx.fillStyle = "rgb(255,204,0)";
    ctx.fillRect(525, 12, score * 7.6, 26);  
  }

  ctx.strokeStyle = "blue";
  ctx.strokeRect(525, 10, 400, 30);
}

export { drawCounter };
