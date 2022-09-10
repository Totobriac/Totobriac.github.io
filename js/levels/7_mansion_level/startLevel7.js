import { pointNClick } from "./gameMecanic.js";
import { drawIntro, drawEnding } from "./intro.js";
import { msg } from "../../script.js"

var mouseKeys = new Image();
mouseKeys.src = "./assets/3_kitchen/left_mouse.png";

var circleD = 0;
var start = false;
var gameBegun = false;
var ended = false;

var cleared = false;
var deleteMsg = false;

window.addEventListener('mousedown', function () {
  startGame();
})

export function startLevel(ctx, game, dino) {
 
  if (circleD < 60 && !start) circleD += 0.5;
  if (circleD >= 0.5 && start) circleD -= 0.5;
  if (circleD === 0 && start) game.start = true;

  if (!cleared) {
    console.clear();
    cleared = true;
    msg.push("🤔 ? Verifiez la console");
    console.log(
      "Ouvrir / Prendre le couvercle de la poubelle", "\n",
      "Fouiller la poubelle", "\n",
      "Prendre la boite de conserve", "\n",
      "Regarder le poster", "\n",
      "Regarder l'annonce", "\n",
      "Prendre le scotch", "\n",
      "Utiliser le scotch sur la tête de lion", "\n",
      "Utiliser la boite de conserve sur le bassin", "\n",
      "Pousser/tirer la poubelle", "\n",
      "Prendre la plante grimpante", "\n",
      "Utiliser la plante grimpante avec la lampe", "\n", 
      "Attacher la boite de conserve à la corde ", "\n",
      "Attacher le couvercle de la poubelle à la corde ", "\n",
      "Mettre le poisson dans la poubelle", "\n",
      "Enlever la boite de conserve quand le chat est au bord de cell-ci", "\n",
      "Utiliser la sonette."
    );
  }

  var canvasDiv = document.getElementById("canvas");
  canvasDiv.setAttribute("style", "cursor: url('./assets/7_mansion/pointer.png'), auto");

  ctx.drawImage(mouseKeys, 545, 130, 160 * 0.7, 164 * 0.7);
  ctx.save();
  ctx.globalCompositeOperation = 'destination-in';
  ctx.beginPath();
  ctx.arc(602, 203, circleD, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore(); 

  if (game.start) {
    pointNClick(ctx, game, gameBegun);
    gameBegun = drawIntro(ctx, game);
    if (ended) drawEnding(ctx);
  }
}

function startGame() {
  start = true; 
};

export function endLevel() {
  ended = true;
  if (!deleteMsg) {
    msg.splice(3,1);
    deleteMsg = true;
  }
}
