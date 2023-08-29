import { controls } from "./elements.js";
import { elements } from "./elements.js";
import * as el from "./elements.js";
import * as actions from "./actions.js";
import state from "./state.js";
import * as timer from "./timer.js"

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] != "function") {
      return;
    }
    actions[action]();
  });
}

export function registerControlsElements() {
  elements.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] != "function") {
      return;
    }
    actions[action]();
  });
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  });
  el.minutes.onkeypress = (event) => /\d/.test(event.key);

  el.minutes.addEventListener("blur", (Event) => {
    //blur é contrario de focus
    let time = Event.currentTarget.textContent;
    time = time > 60 ? 60 : time;
    state.minutes = time;
    state.seconds = 0;
    timer.updateDisplay();
    el.minutes.removeAttribute("contenteditable");
  });
}
