// TODO: write code here

// comment this to pass build
const unusedVariable = "variable";

export class Game {
  constructor() {
    this.index_goblin = -1;
    this.field_game = document.querySelector(".hole-game");
    this.holeNone = "hole";
    this.holeGoblin = "hole hole-goblin";
  }

  start_game() {
    setInterval(() => {
      let child = this.field_game.firstElementChild;
      let random;

      do {
        random = Math.floor(
          Math.random() * this.field_game.children.length + 1,
        );
      } while (random === this.index_goblin);

      let cont = 1;
      while (child) {
        if (child.className === this.holeGoblin && random != cont) {
          child.className = this.holeNone;
        }
        if (random === cont && child.className === this.holeNone) {
          this.index_goblin = cont;
          child.className = this.holeGoblin;
        }
        cont++;
        child = child.nextElementSibling;
      }
    }, 700);
  }
}

let DDD = new Game();
DDD.start_game();
