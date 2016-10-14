let _      = require('lodash');
let prompt = require('prompt-sync')();

module.exports = function UserPlayer() {
  this.play = play;
}

// board: a Board object
function play(board) {
  let inputLine = prompt("You move (row, column, value): ").trim().split(/\s+/);

  let row    = parseInt(inputLine[0]);
  let column = parseInt(inputLine[1]);
  let value  = parseInt(inputLine[2]);

  if (row && column && value) {
    board.set(row - 1, column - 1, value);
  }
}
