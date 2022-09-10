import { Dino } from "./levels/character/dino.js"
import { Game } from "./game.js";
import { anim } from "./animate.js"
import { Control } from "./controls.js";

var icon0 = "../assets/icon/0.png";
var icon1 = "../assets/icon/1.png";
var icon2 = "../assets/icon/2.png";
var icon3 = "../assets/icon/3.png";

var favicon_images = [
  icon0, icon1, icon2, icon3
];

var image_counter = 0;

setInterval(function () {
  
  if (document.querySelector("link[rel='icon']") !== null)
    document.querySelector("link[rel='icon']").remove();
  
  document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/png">');

   
  if (image_counter == favicon_images.length - 1)
    image_counter = 0;
  else
    image_counter++;

}, 200);


var position = 0;

var msg = [" 💾 auto"," 🪲 F5", "👏 ❓: 📧contact@vincentcailly.com" ]

function scrolltitle() {  
  
  document.title = msg[position];

  position++;

  if(position > msg.length - 1) position = 0

  window.setTimeout(scrolltitle, 1500);

}

scrolltitle();


let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.height = 400;
canvas.width = 1200;

var winHeight = window.innerHeight;
var winWidth = window.innerWidth;

let top = (winHeight - 400) / 2;
let left = (winWidth - 1200) / 2;

var canvasStyle = document.body.style;
canvasStyle.setProperty('--canvas-height', '400px');
canvasStyle.setProperty('--canvas-top', top + 'px');
canvasStyle.setProperty('--canvas-left', left + 'px');


var dino = new Dino();
var game = new Game();
var control = new Control(game);

var fps = 60;
var now;
var then = Date.now();
var interval = 1000 / fps;
var delta;

function animate() {
  requestAnimationFrame(animate);
  now = Date.now();
  delta = now - then;
  if (delta > interval) {
    anim(game, dino, ctx);
    then = now - (delta % interval);
  }
}

animate();

export { dino, game, ctx, control, top, left };
