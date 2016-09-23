let Sudoku   = require('./app/models/sudoku');
let AIPlayer = require('./app/models/ai_player');

let sudoku = new Sudoku();
let aiPlayer = new AIPlayer(sudoku);

