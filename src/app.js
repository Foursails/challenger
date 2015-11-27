export class Challenger {

  gamepads;

  active;

  constructor() {
    this.gamepads = [];
  }

  activate() {
    this.active = true;
    this.watchGamepads();
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
