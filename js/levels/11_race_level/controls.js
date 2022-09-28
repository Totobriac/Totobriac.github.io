import { speedUp } from "./startLevel11.js";

var key1;
var key2;

class Controls {
  constructor() {
    window.addEventListener("keydown", (e) => {
      if (!key2) {
        key2 = "ArrowRight";
      } else {
        key1 = e.key;
        if (key1 === "ArrowLeft" && key2 === "ArrowRight") {
          speedUp();
          key2 = "ArrowLeft";
        } else if (key2 === "ArrowLeft" && key1 === "ArrowRight") {
          speedUp();
          key2 = "ArrowRight";
        }
      }
    });
  }
}

export { Controls };
