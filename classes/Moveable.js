var directions = require("./directions.js");

class Moveable {

  constructor(position = [0,0], board) {
    this.position = position;
    this.board = board;
  }

  move(dir) {
    if (!directions[dir]) return null;
    this.board.move(this, dir);
    this.board.empty(this.position);
    this.position = this.position.map(function (num, idx) {
      return num + directions[dir][idx];
    });
    console.log(this.board);
  }
}

// let newM = new Moveable();
// newM.move("LEFT")
// newM.move("RIGHT");
module.exports = Moveable;
