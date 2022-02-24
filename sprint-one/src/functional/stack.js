var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var stackheight = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    stackheight++;
    storage[stackheight] = value;
  };

  someInstance.pop = function() {
    if (stackheight > 0) {
      var top = storage[stackheight];
      delete storage[stackheight];
      stackheight--;
      return top;
    }
  };

  someInstance.size = function() {
    return stackheight;
  };

  return someInstance;
};
