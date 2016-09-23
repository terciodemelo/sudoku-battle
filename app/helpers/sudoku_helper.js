let _ = require('lodash');
let Exceptions = require('../errors/sudoku_errors');

module.exports = {
  verifyParamsRange: function () {
    _.forEach(arguments, param => {
      inRange(param, 10);
    })
  },

  before: function(context, method, proc) {
    let old_method = context[method];
    context[method] = function() {
      proc(...arguments);
      return old_method.apply(context, arguments);
    }
  }
}

function inRange(value, maximum) {
  if (!_.isInteger(value)) {
    console.log(value);
    throw Exceptions.LINE_COLUMN_OR_VALUE_NOT_INTEGER;
  } else if (!_.inRange(value, maximum)) {
    console.log(value);
    throw Exceptions.LINE_COLUMN_OR_VALUE_NOT_IN_RANGE;
  }
}
