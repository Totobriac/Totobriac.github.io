var loaded = new Array(11).fill(false);
import { chooseLevel } from "../js/levels/level_choice.js";

var path = [
  "./levels/0_desert_level/startLevel0.js",
  "./levels/1_plane_level/startLevel1.js",
  "./levels/2_restaurant_level/startLevel2.js",
  "./levels/3_kitchen_level/startLevel3.js",
  "./levels/4_submarine_level/startLevel4.js",
  "./levels/5_bridge_level/startLevel5.js",
  "./levels/6_race_level/startLevel6.js",
  "./levels/7_mansion_level/startLevel7.js",
  "./levels/8_zeldouille_level/startLevel8.js",
  "./levels/9_dinoStein_level/startLevel9.js",
  "./levels/10_tv_level/startLevel10.js",
  "./levels/11_race_level/startLevel11.js",
];

let start;

export function anim(game, dino, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (game.level === undefined) chooseLevel(ctx);

  game.frame++;

  switch (game.level) {
    case 0:
      loadLevel(0, ctx, game, dino);
      break;
    case 1:
      loadLevel(1, ctx, game, dino);
      break;
    case 2:
      loadLevel(2, ctx, game, dino);
      break;
    case 3:
      loadLevel(3, ctx, game, dino);
      break;
    case 4:
      loadLevel(4, ctx, game, dino);
      break;
    case 5:
      loadLevel(5, ctx, game, dino);
      break;
    case 6:
      loadLevel(6, ctx, game, dino);
      break;
    case 7:
      loadLevel(7, ctx, game, dino);
      break;
    case 8:
      loadLevel(8, ctx, game, dino);
      break;
    case 9:
      loadLevel(9, ctx, game, dino);
      break;
    case 10:
      loadLevel(10, ctx, game, dino);
      break;
    case 11:
      loadLevel(11, ctx, game, dino);
      break;
  }

  async function loadLevel(level, ctx, game, dino) {
    if (!loaded[level]) {
      start = await import(path[level]);
      loaded[level] = true;
    }
    start.startLevel(ctx, game, dino);
  }
}
