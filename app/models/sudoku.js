let _            = require('lodash');
let Exceptions   = require('../errors/sudoku_errors');
let SudokuHelper = require('../helpers/sudoku_helper');
let ClassHelper  = require('../helpers/class_helper');
let BoardHelper  = require('../helpers/board_helper');

let Board        = require('./board')

module.exports = function Sudoku(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;

  this.board = new Board();
  this.board.initBoard(_.sample(BoardHelper.DEFAULT_CONFIGURATIONS));

  this.get          = getCell;
  this.set          = setCell;
  this.evalRow      = evalRow;
  this.evalColumn   = evalColumn;
  this.evalQuadrant = evalQuadrant;
  this.turn         = turn;
  this.start        = start

  let before = ClassHelper.before;

  before(this, 'get',          SudokuHelper.verifyParamsRange);
  before(this, 'set',          SudokuHelper.verifyParamsRange);
  before(this, 'evalRow',      SudokuHelper.verifyParamsRange);
  before(this, 'evalColumn',   SudokuHelper.verifyParamsRange);
  before(this, 'evalQuadrant', SudokuHelper.verifyParamsRange);
}

function turn() {
  this.board.show();
  this.player1.play(this);

  this.board.show();
  this.player2.play(this);
}

function start() {
  while (!this.board.isFinished()) {
    this.turn();
  }
}

function evalRow(row) {
  return _.reduce(this.board.row(row), (sum, cell) => sum + (cell === 0), 0);
}

function evalColumn(col) {
  return _.reduce(this.board.column(col), (sum, cell) => sum + (cell === 0), 0);
}

function evalQuadrant(row, column) {
  row = Math.floor(row / 3) * 3;
  column = Math.floor(column / 3) * 3;

  return _.reduce(
    _.range(row, row + 3),
    (rowSum, rowIdx) => { 
      return rowSum + _.reduce(
        _.range(column, column + 3), 
        (colSum, colIdx) => colSum + this.board.isEmpty(rowIdx, colIdx),
        0
      )
    },
    0
  );
}

function getCell(row, column) {
  return this.board.cell(row, column);
}

function setCell(row, column, value) {
  if (this.board.cell(row, column)) {
    throw Exceptions.BOARD_CELL_NOT_EMPTY;
  } 

  this.board.set(row, column, value);
}


