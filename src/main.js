import * as FocusTimer from "./FocusTimer/index.js";
import { controls } from "./FocusTimer/elements.js";
import * as sounds from "./FocusTimer/sounds.js";

FocusTimer.start(0, 50);

// controls.addEventListener("click", (event) => {
//   const action = event.target;
//   console.log(action);
// });

// songs.addEventListener("click", (event) => {
//   const classeClicada = event.target.className;

//   switch (classeClicada) {
//     case "forest":
//     case "card forest":
//       sounds.rain.pause();
//       sounds.store.pause();
//       sounds.fireplace.pause();
//       sounds.forest.play();
//       break;
//     case "rain":
//     case "card rain":
//       sounds.forest.pause();
//       sounds.store.pause();
//       sounds.fireplace.pause();
//       sounds.rain.play();
//       break;
//     case "store":
//     case "card store":
//       sounds.forest.pause();
//       sounds.rain.pause();
//       sounds.fireplace.pause();
//       sounds.store.play();
//       break;
//     case "fireplace":
//     case "card fireplace":
//       sounds.forest.pause();
//       sounds.rain.pause();
//       sounds.store.pause();
//       sounds.fireplace.play();
//       break;

//     default:
//       break;
//   }
// });
