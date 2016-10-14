let _ = require('lodash');

module.exports = function Board(height = 9, width = 9) {
  this.board = _.range(height).map(v => _.range(width).map(n => 0));
  this.height = height;
  this.width = width;
  this.row = index => this.board[index];
  this.column  = index => _.map(this.board, row => row[index]);
  this.cell = (row, column) => this.board[row][column];
  this.isEmpty = (row, column) => this.board[row][column] === 0;
  this.isFinished = () => !_.some(this.board, row => _.some(row, n => n === 0));

  this.set = (row, column, value) => { 
    this.board[row][column] = value
  };

  this.show = show;
  this.initBoard = initBoard;
}

function show() {
  console.log("\n\n\n");
  console.log("    1 2 3 4 5 6 7 8 9");
  console.log("    -----------------");
  let rowNumber = 1;
  this.board.forEach(function (row) {
    console.log(`${rowNumber++} | ${row.join('|')}`);
  });
  console.log("");
}

function initBoard(configuration) {
  _.each(_.range(9), row => {
    _.each(_.range(9), col => {
      this.set(row, col, configuration[row][col]);
    })
  })
}
