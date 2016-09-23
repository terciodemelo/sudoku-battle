let _ = require('lodash');
let Exceptions = require('../errors/sudoku_errors');

module.exports = {
  verifyParamsRange: function () {
    _.forEach(arguments, param => {
      inRange(param, 10);
    })
  },
}

function inRange(value, maximum) {
  if (!_.isInteger(value)) {
    throw Exceptions.LINE_COLUMN_OR_VALUE_NOT_INTEGER;
  } else if (!_.inRange(value, maximum)) {
    throw Exceptions.LINE_COLUMN_OR_VALUE_NOT_IN_RANGE;
  }
}
