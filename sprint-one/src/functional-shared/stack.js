var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.stacksize = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.stacksize++;
    this['storage'][this['stacksize']] = value;
  },
  pop: function() {
    if (this.stacksize > 0) {
      var top = this['storage'][this['stacksize']];
      delete this['storage'][this['stacksize']];
      this['stacksize']--;
      return top;
    }
  },
  size: function() {
    return this['stacksize'];
  }
};


