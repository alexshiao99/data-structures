var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.peopleleft = 0;
  someInstance.total = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  size: function() {
    return this.total - this.peopleleft;
  },
  enqueue: function(value) {
    this['storage'][this.total] = value;
    this.total++;
  },
  dequeue: function() {
    if ((this.total - this.peopleleft) > 0) {
      var first = this['storage'][this.peopleleft];
      delete this['storage' ][this.peopleleft];
      this.peopleleft++;
      return first;
    }
  }
};


