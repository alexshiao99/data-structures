var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var back = 0;
  var front = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[back] = value;
    back++;
  };

  someInstance.dequeue = function() {
    // var firstkey = Object.keys(someInstance)[0];
    // var firstvalue = Object.keys(someInstance)[0];
    // delete someInstance(firstkey);
    // i--;
    // return firstvalue;
    if ((back - front) > 0) {
      var teller = storage[front];
      delete storage[front];
      front++;
      return teller;
    }
  };

  someInstance.size = function() {
    return back - front;
  };

  return someInstance;
};
