var Moveable = require("./Moveable.js");
var Board = require("./Board.js");

class PacMan extends Moveable {
  eat(pellet) {
    this.board.delete(pellet);
  }

  movePac(dir) {
    if (typeof this.board.loc(dir, this.position) === Pellet) {
      this.eat(this.board.loc(dir, this.position));
      this.move(dir);
    } else if (typeof this.board.loc(dir, this.position) === Ghost) {
      // this.game.end();
    } else {
      this.move(dir);
    }
  }
}

let newM = new PacMan([0,0], new Board);
console.log(newM.move("RIGHT"));
console.log(newM.move("RIGHT"));