let _      = require('lodash');
let prompt = require('prompt-sync')();

module.exports = function UserPlayer() {
  this.play = play;
}

// board: a Sudoku object
function play(game) {
  let inputLine = prompt("You move (row, column, value): ").trim().split(/\s+/);

  let row    = parseInt(inputLine[0]);
  let column = parseInt(inputLine[1]);
  let value  = parseInt(inputLine[2]);

  if (row && column && value) {
    game.set(row - 1, column - 1, value);
  }
}
