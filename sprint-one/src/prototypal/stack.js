var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.stackheight = 0;
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.stackheight++;
    this.storage[this.stackheight] = value;
  },
  pop: function() {
    if (this.size() > 0) {
      var top = this.storage[this.stackheight];
      delete this.storage[this.stackheight];
      this.stackheight--;
      return top;
    }
  },
  size: function() {
    return this.stackheight;
  }
};


