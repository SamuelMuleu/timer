import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";
import * as el from "./elements.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  timer.countdown();
}

export function stop() {
  state.isRunning = false;
  timer.updateDisplay();
}

export function addFiveMinutes() {
  let novoValor = (state.minutes += 5);

  timer.updateDisplay(novoValor);
}

export function decreaseFiveMinutes() {
  let novoValor = (state.minutes -= 5);

  if (novoValor < 0) {
    novoValor = 0;
  }

  timer.updateDisplay(novoValor);
}

export function reset() {
  state.isRunning = false;

  !state.isRunning;
}
export function set() {
  el.minutes.setAttribute("contenteditable", true);

  el.minutes.focus();
}
export function soundTree(soundToControl) {
  const allSounds = [
    sounds.buttonForest,
    sounds.buttonRain,
    sounds.buttonCoffeShop,
    sounds.buttonFlame,
  ];

  // Pausa todos os sons, exceto o que está sendo controlado
  for (const sound of allSounds) {
    if (sound !== sounds.buttonForest && !sound.paused) {
      sound.pause();
    }
  }

  // Verifica se o som controlado está pausado
  if (sounds.buttonForest.paused) {
    // Pausa todos os sons e reproduz o som controlado
    for (const sound of allSounds) {
      sound.pause();
    }
    sounds.buttonForest.play();
  } else {
    // Pausa o som controlado se estiver tocando
    sounds.buttonForest.pause();
  }
}

export function soundRain(soundToControl) {
  const allSounds = [
    sounds.buttonForest,
    sounds.buttonRain,
    sounds.buttonCoffeShop,
    sounds.buttonFlame,
  ];

  for (const sound of allSounds) {
    if (sound !== sounds.buttonRain && !sound.paused) {
      sound.pause();
    }
  }

  if (sounds.buttonRain.paused) {
    for (const sound of allSounds) {
      sound.pause();
    }
    sounds.buttonRain.play();
  } else {
    sounds.buttonRain.pause();
  }
}

export function soundCoffeShop(soundToControl) {
  const allSounds = [
    sounds.buttonForest,
    sounds.buttonRain,
    sounds.buttonCoffeShop,
    sounds.buttonFlame,
  ];

  for (const sound of allSounds) {
    if (sound !== sounds.buttonCoffeShop && !sound.paused) {
      sound.pause();
    }
  }

  if (sounds.buttonCoffeShop.paused) {
    for (const sound of allSounds) {
      sound.pause();
    }
    sounds.buttonCoffeShop.play();
  } else {
    sounds.buttonCoffeShop.pause();
  }
}

export function soundFlame(soundToControl) {
  const allSounds = [
    sounds.buttonForest,
    sounds.buttonRain,
    sounds.buttonCoffeShop,
    sounds.buttonFlame,
  ];

  for (const sound of allSounds) {
    if (sound !== sounds.buttonFlame && !sound.paused) {
      sound.pause();
    }
  }

  if (sounds.buttonFlame.paused) {
    for (const sound of allSounds) {
      sound.pause();
    }
    sounds.buttonFlame.play();

    sounds.buttonFlame.pause();
  }
}



