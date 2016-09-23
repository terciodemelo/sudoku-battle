let _            = require('lodash');
let Exceptions   = require('../errors/sudoku_errors');
let SudokuHelper = require('../helpers/sudoku_helper');
let ClassHelper  = require('../helpers/class_helper');
let Board        = require('./board')

module.exports = function Sudoku() {
  this.board = new Board();
  this.set = setCell;
  this.evalRow = evalRow;
  this.evalColumn = evalColumn;

  let before = ClassHelper.before;

  before(this, 'set', SudokuHelper.verifyParamsRange);
  before(this, 'evalRow', SudokuHelper.verifyParamsRange);
  before(this, 'evalColumn', SudokuHelper.verifyParamsRange);
}

function evalRow(row) {
  return _.reduce(this.board.row(row), (sum, cell) => sum + (cell === null), 0);
}

function evalColumn(col) {
  return _.reduce(this.board.column(col), (sum, cell) => sum + (cell === null), 0);
}

function setCell(row, column, value) {
  if (this.board.cell(row, column)) {
    throw Exceptions.BOARD_CELL_NOT_EMPTY;
  } 

  this.board.set(row, column, value);
}


