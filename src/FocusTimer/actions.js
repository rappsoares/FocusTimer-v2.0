import state from "./state.js";
import * as sounds from "./sounds.js";
import * as timer from "./timer.js";
import * as events from "./events.js";
import * as el from "./elements.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  timer.countDown();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  state.isMuted = true;
  pauseSongs();

  timer.updateDisplay();
}

export function plus() {
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  minutes += 5;

  timer.updateDisplay(minutes, seconds);
}

export function minus() {
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  minutes -= 5;

  if (minutes < 0) {
    return;
  }
  timer.updateDisplay(minutes);
}

export function songForest() {
  state.isMuted = false;

  if (!state.isMuted) {
    pauseSongs();
  }
  sounds.forest.play();
}

export function songRain() {
  state.isMuted = false;

  if (!state.isMuted) {
    pauseSongs();
  }
  sounds.rain.play();
}

export function songStore() {
  state.isMuted = false;

  if (!state.isMuted) {
    pauseSongs();
  }
  sounds.store.play();
}

export function songFireplace() {
  state.isMuted = false;

  if (!state.isMuted) {
    pauseSongs();
  }
  sounds.fireplace.play();
}

export function pauseSongs() {
  sounds.fireplace.pause();
  sounds.forest.pause();
  sounds.rain.pause();
  sounds.store.pause();
}
