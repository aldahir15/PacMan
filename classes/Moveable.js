var directions = require("./directions.js");

class Moveable {

  constructor(position = [0,0]) {
    this.position = position;
  }

  move(dir) {
    if (!directions[dir]) return null;
    this.position = this.position.map(function (num, idx) {
      return num + directions[dir][idx];
    });
  }
}

// let newM = new Moveable();
// newM.move("LEFT")
// newM.move("RIGHT");
