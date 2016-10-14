let _ = require('lodash');

module.exports = function LowLevelAIPlayer() {
  this.play = play;
}

// board: a Sudoku object
function play(game) {
  let moveDone = false

  _.each(_.range(9), row => {
    if (game.evalRow(row) === 1) {
      let column = _.find(_.range(9), col => game.get(row, col) === 0);
      let value = _.difference(
        _.range(1,10), 
        _.map(_.range(9), i => game.get(row, i))
      )[0];

      game.set(row, column, value);
      moveDone = true;
    }
  });


  if (moveDone) return true;

  _.each(_.range(9), col => {
    if (game.evalColumn(col) === 1) {
      let row = _.find(_.range(9), row => game.get(row, col) === 0);
      let value = _.difference(
        _.range(1,10), 
        _.map(_.range(9), i => game.get(i, col))
      )[0];

      game.set(row, col, value);
      moveDone = true;
    }
  });

  if (moveDone) return true;

  _.each([0, 3 , 6], row => {
    _.each([0, 3 , 6], col => {
      if (game.evalQuadrant(row, col) == 1) {
        console.log (`boo 1`);
        let value = _.difference(
          _.range(1, 10),
          _.map(_.range(9), n => game.get(row + Math.floor(n/3), col + n % 3))
        )[0];
        console.log (`boo 2`);

        _.each(_.range(row, row + 3), r => {
          _.each(_.range(col, col + 3), c => {
            if (game.get(r, c) === 0) {
              game.set(r, c, value);
            }
          })
        })

        moveDone = true
      }
    });
  });
  
  return moveDone;
}
