import { Dino } from "./levels/character/dino.js"
import { Game } from "./game.js";
import { anim } from "./animate.js"
import { Control } from "./controls.js";


const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

var device = (getDeviceType());

var icon0 = "../assets/icon/0.png";
var icon1 = "../assets/icon/1.png";
var icon2 = "../assets/icon/2.png";
var icon3 = "../assets/icon/3.png";

var favicon_images = [
  icon0, icon1, icon2, icon3
];

var position = 0;

var msg = [" 💾 auto", " 🪲 F5", "👏 ❓: 📧contact@vincentcailly.com"];

var image_counter = 0;

var dino = new Dino();
var game = new Game();
var control = new Control(game);

var fps = 60;
var now;
var then = Date.now();
var interval = 1000 / fps;
var delta;

let canvas;
let ctx;

canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

let top = (winHeight - 400) / 2;
let left = (winWidth - 1200) / 2;

var canvasStyle = document.body.style;

setInterval(function () {

  if (document.querySelector("link[rel='icon']") !== null)
    document.querySelector("link[rel='icon']").remove();

  document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/png">');


  if (image_counter == favicon_images.length - 1)
    image_counter = 0;
  else
    image_counter++;

}, 200);

function scrolltitle() {

  document.title = msg[position];
  position++;
  if (position > msg.length - 1) position = 0;
  window.setTimeout(scrolltitle, 1500);
}

scrolltitle();

if (device === "desktop") {

  var back = document.getElementById("back");
  back.style.display = "block";

  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  canvas.height = 400;
  canvas.width = 1200;

  var winHeight = window.innerHeight;
  var winWidth = window.innerWidth;

  canvasStyle.setProperty('--canvas-height', '400px');
  canvasStyle.setProperty('--canvas-top', top + 'px');
  canvasStyle.setProperty('--canvas-left', left + 'px');

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

} else {  
  var monkey = document.getElementById("monkey");
  monkey.style.display = "block";
}

export { dino, game, ctx, control, top, left, msg };
