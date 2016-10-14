let Sudoku     = require('./app/models/sudoku');
let AIPlayer   = require('./app/models/ai_player');
let UserPlayer = require('./app/models/user_player');

let player1 = new UserPlayer();
let player2 = new UserPlayer();
let sudoku  = new Sudoku(player1, player2);

