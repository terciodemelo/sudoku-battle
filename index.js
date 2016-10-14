let Sudoku            = require('./app/models/sudoku');
let LowLevelAIPlayer  = require('./app/models/low_level_ai_player');
let HighLeverAIPlayer = require('./app/models/high_level_ai_player');
let UserPlayer        = require('./app/models/user_player');

let player1 = new LowLevelAIPlayer();
let player2 = new HighLeverAIPlayer();
let sudoku  = new Sudoku(player1, player2);

