var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.total = 0;
  someInstance.peopleleft = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this['storage'][this.total] = value;
    this.total++;
  },
  dequeue: function() {
    if (this.size() > 0) {
      var first = this['storage'][this.peopleleft];
      delete this['storage'][this.peopleleft];
      this.peopleleft++;
      return first;
    }

  },
  size: function() {
    return this.total - this.peopleleft;
  }
};


