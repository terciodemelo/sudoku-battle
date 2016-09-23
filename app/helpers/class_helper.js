module.exports = {
  before: function(context, method, proc) {
    let old_method = context[method];
    context[method] = function() {
      proc(...arguments);
      return old_method.apply(context, arguments);
    }
  }
}
