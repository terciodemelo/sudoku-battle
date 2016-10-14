let _ = require('lodash');

module.exports = function LowLevelAIPlayer() {
  this.play = play;
}

// board: a Sudoku object
function play(game) {
  _.each(_.range(9), row => {
    if (game.evalRow(row) === 1) {
      let column = _.find(_.range(9), col => game.get(row, col) === 0);
      let value = _.difference(
        _.range(1,10), 
        _.map(_.range(9), i => game.get(row, i))
      )[0];

      return game.set(row, column, value);
    }
  })

  _.each(_.range(9), col => {
    if (game.evalColumn(col) === 1) {
      let row = _.find(_.range(9), row => game.get(row, col) === 0);
      let value = _.difference(
        _.range(1,10), 
        _.map(_.range(9), i => game.get(i, col))
      )[0];

      return game.set(row, col, value);
    }
  })
}
