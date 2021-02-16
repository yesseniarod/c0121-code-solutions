/* exported calculator */
var calculator = {
  add: function (x, y) {
    var result = x + y;
    return result;
  },

  subtract: function (x, y) {
    return x - y;
  },

  multiply: function (x, y) {
    return x * y;
  },

  divide: function (x, y) {
    return x / y;
  },

  square: function (x) {
    return x * x;
  },

  sumAll: function (numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;

  },

  getAverage: function (numbers) {
    var average = 0;
    for (var j = 0; j < numbers.length; j++) {
      average += numbers[j];
    }

    return average / numbers.length;
  }
};
