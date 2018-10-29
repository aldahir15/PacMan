var directions = require("./directions.js");

class Board {
  constructor(size = 8) {
    this.size = size;
    this.board = [];
    this.fillBoard(size);
  }

  fillBoard(size) {
    let empt = [];
    for (let i = 0; i < size; i++) {
      empt.push(null);
    }
    for (let i = 0; i < size; i++) {
      this.board.push(empt.slice());
    }
  }

  add(obj, pos) {
    let x = pos[0];
    let y = pos[1];
    if (!this.valid(pos)) return false;
    if (!this.board[x][y]) {
      this.board[x][y] = obj;
    } else {
      console.log("SOMETHING IS HERE");
    }
  }

  move(obj, dir) {
    if (!directions[dir]) return null;
    let [x, y] = directions[dir];
    let newPos = [x + obj.position[0], y + obj.position[1]];
    if (!this.valid(newPos)) return false;
    this.board[newPos[0]][newPos[1]] = obj;
    return this.board[newPos[0]][newPos[1]];
  }

  empty(pos) {
    this.board[pos[0]][pos[1]] = null;
  }

  valid(pos) {
    let x = pos[0];
    let y = pos[1];
    if (x < 0 || x >= this.size || y < 0 || y >= this.size) {
      return false;
    }
    return true;
  }

  delete(obj) {
    let [x, y] = obj.position;
    this.board[x][y] = undefined;
  }

  loc(dir, pos) {
    if (!directions[dir]) return null;
    let [x,y] = directions[dir];
    let newPos = [x + pos[0], y + pos[1]];
    return this.board[newPos[0]][newPos[1]];
  }
}

module.exports = Board;