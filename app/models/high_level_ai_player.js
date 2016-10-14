let _ = require('lodash');
let LowLevelAIPlayer = require('./low_level_ai_player');


module.exports = function HighLeverAIPlayer() {
  this.play = play;
  this.lowLevelPlayer = new LowLevelAIPlayer();
}

// board: a Sudoku object
function play(game) {
  let moveDone = this.lowLevelPlayer.play(game);

  if (moveDone) return true;

  _.each(_.range(9), row => {
    _.each(_.range(9), col => {
      if (!moveDone && game.get(row, col) === 0) {
        let values = _.difference(
          _.difference(
            _.range(1, 10), 
            _.map(_.range(9), r => game.get(r, col))
          ),
          _.map(_.range(9), c => game.get(row, c))
        );

        let col2 = (col + 1) % 3, col3 = (col + 2) % 3;
        let row2 = (row + 1) % 3, row3 = (row + 2) % 3;

        let common = _.intersection(
          _.map(_.range(9), r => game.get(r, col - (col%3) + col2)),
          _.map(_.range(9), r => game.get(r, col - (col%3) + col3)),
          _.map(_.range(9), c => game.get(row - (row%3) + row2, c)),
          _.map(_.range(9), c => game.get(row - (row%3) + row3, c))
        );

        values = _.intersection(values, common);

        if (values.length === 1) {
          game.set(row, col, values[0]);
          moveDone = true;
        }
      }
    });
  });

  _.each(_.range(9), row => {
    _.each(_.range(9), col => {
      if (!moveDone && game.get(row, col) === 0) {
        let values = _.difference(
          _.range(1, 10), 
          _.map(_.range(9), c => game.get(row, c))
        );

        let row2 = (row + 1) % 3, row3 = (row + 2) % 3;
        let common = _.intersection(
          _.map(_.range(9), c => game.get(row - (row%3) + row2, c)),
          _.map(_.range(9), c => game.get(row - (row%3) + row3, c))
        );

        values = _.intersection(values, common);

        if (values.length === 1) {
          game.set(row, column, values[0]);
          moveDone = true;
        }
      }
    });
  });

  return moveDone;
}
