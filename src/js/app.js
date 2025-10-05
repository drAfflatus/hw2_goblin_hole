// TODO: write code here

export class Game {
  constructor() {
    this.index_goblin = -1;
    this.field_game = document.querySelector(".hole-game");
    this.holeNone = "hole";
    this.holeGoblin = "hole hole-goblin";
    this.random = Number;
    this.create_game_field();
  }

  create_game_field() {
    for (let i = 0; i < 16; i++) {
      let div = document.createElement("div");
      div.className = "hole";
      this.field_game.append(div);
    }
  }

  generator() {
    do {
      this.random = Math.floor(
        Math.random() * this.field_game.children.length + 1,
      );
    } while (this.random === this.index_goblin);
  }

  moving_goblin() {
    let child = this.field_game.firstElementChild;
    let cont = 1;
    while (child) {
      if (child.className === this.holeGoblin && this.random != cont) {
        child.className = this.holeNone;
      }
      if (this.random === cont && child.className === this.holeNone) {
        this.index_goblin = cont;
        child.className = this.holeGoblin;
      }
      cont++;
      child = child.nextElementSibling;
    }
  }

  start_game() {
    setInterval(() => {
      this.generator();
      this.moving_goblin();
    }, 700);
  }
}

let DDD = new Game();

DDD.start_game();
