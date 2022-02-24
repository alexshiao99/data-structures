var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.total = 0;
  this.peopleleft = 0;
};

Queue.prototype.enqueue = function(value) {
  this['storage'][this.total] = value;
  this.total++;
};
Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    let first = this['storage'][this.peopleleft];
    delete this['storage'][this.peopleleft];
    this.peopleleft++;
    return first;
  }
};
Queue.prototype.size = function() {
  return this.total - this.peopleleft;
};

