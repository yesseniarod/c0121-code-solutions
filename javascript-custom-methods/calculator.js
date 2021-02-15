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
    var i = 0;
    var total;
    if (numbers.length === 2) {
      total = numbers[i++] + numbers[i];
    } else if (numbers.length === 3) {
      total = numbers[i++] + numbers[i++] + numbers[i++];
    } else if (numbers.length === 4) {
      total = numbers[i++] + numbers[i++] + numbers[i++] + numbers[i++];
    }
    return total;

  },

  getAverage: function (numbers) {
    var j = 0;
    var average;
    if (numbers.length === 2) {
      average = (numbers[j++] + numbers[j]) / numbers.length;
    } else if (numbers.length === 3) {
      average = (numbers[j++] + numbers[j++] + numbers[j++]) / numbers.length;
    } else if (numbers.length === 4) {
      average = (numbers[j++] + numbers[j++] + numbers[j++] + numbers[j++]) / numbers.length;
    }
    return average;
  }
};
