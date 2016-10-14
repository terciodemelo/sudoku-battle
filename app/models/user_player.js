let _      = require('lodash');
let prompt = require('prompt-sync')();

module.exports = function UserPlayer() {
  this.play = play;
}

// board: a Board object
function play(board) {
  let inputLine = prompt("You move (row, column, value): ");

}
