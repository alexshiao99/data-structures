class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.stackheight = 0;
  }
  push(value) {
    this.stackheight++;
    this['storage'][this.stackheight] = value;
  }
  pop() {
    if (this.size() > 0 ) {
      let top = this['storage'][this.stackheight];
      delete this['storage'][this.stackheight];
      this.stackheight--;
      return top;
    }
  }
  size() {
    return this.stackheight;
  }

}