let _ = require('lodash');

module.exports = function Board(height = 9, width = 9) {
  this.board = _.range(height).map(v => _.range(width).map(n => 0));
  this.height = height;
  this.width = width;
  this.row = index => this.board[index];
  this.column  = index => _.map(this.board, row => row[index]);
  this.cell = (row, column) => this.board[row][column];
  this.isEmpty = (row, column) => this.board[row][column] === 0;

  this.set = (row, column, value) => { 
    this.board[row][column] = value
  };

  this.show = show;
}

function show() {
  console.log("\n\n\n");
  this.board.forEach(function (row) {
    console.log(row.join(' '));
  });
  console.log("");
}
