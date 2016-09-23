let _            = require('lodash');
let Exceptions   = require('../errors/sudoku_errors');
let SudokuHelper = require('../helpers/sudoku_helper');

module.exports = function Sudoku() {
  this.board = _.range(10).map(v => _.range(10).map(n => null));
  this.set = setCell;
  this.evalLine = evalLine;

  SudokuHelper.before(this, 'set', SudokuHelper.verifyParamsRange);
  SudokuHelper.before(this, 'evalLine', SudokuHelper.verifyParamsRange);
}

function evalLine(line) {
  return _.reduce(this.board[line], (sum, cell) => sum + (cell === null), 0);
}

function setCell(line, column, value) {
  if (this.board[line][column]) {
    throw Exceptions.BOARD_CELL_NOT_EMPTY;
  } 

  this.board[line][column] = value;
}

