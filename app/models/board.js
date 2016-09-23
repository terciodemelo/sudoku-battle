let _ = require('lodash');

module.exports = function Board(height = 9, width = 9) {
  this.board = _.range(height).map(v => _.range(width).map(n => null));
  this.height = height;
  this.width = width;
  this.row = index => this.board[index];
  this.column  = index => _.map(this.board, row => row[index]);
  this.cell = (row, column) => this.board[row][column];
  this.isEmpty = (row, column) => this.board[row][column] === null;

  this.set = (row, column, value) => { 
    this.board[row][column] = value
  };
}
