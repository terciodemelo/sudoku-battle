let Sudoku   = require('./app/models/sudoku');
let AIPlayer = require('./app/models/ai_player');

let aiPlayer1 = new AIPlayer();
let aiPlayer2 = new AIPlayer();
let sudoku = new Sudoku(aiPlayer1, aiPlayer2);

