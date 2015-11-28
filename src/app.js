export class Challenger {

  gamepads;

  active = false;

  constructor() {
    this.gamepads = [];
  }

  activate() {
    if (navigator.getGamepads) {
      this.active = true;
      this.watchGamepads(); 
    } else {
      this.active = null;
    }
  }

  deactivate() {
    this.active = false;
    this.gamepads = null;
  }

  // Begins a loop, via requestAnimationFrame, that listens to the attached
  // gamepads.
  watchGamepads() {
    this.active && requestAnimationFrame(() => {
      this.gamepads.splice(0, Infinity, ...navigator.getGamepads());
      this.watchGamepads();
    });
  }
}
