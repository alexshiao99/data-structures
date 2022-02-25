class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.total = 0;
    this.peopleleft = 0;
  }
  enqueue(value) {
    this['storage'][this.total] = value;
    this.total++;
  }
  dequeue() {
    if (this.size() > 0) {
      let first = this['storage'][this.peopleleft];
      delete this['storage'][this.peopleleft];
      this.peopleleft++;
      return first;
    }
  }
  size() {
    return this.total - this.peopleleft;
  }

}
