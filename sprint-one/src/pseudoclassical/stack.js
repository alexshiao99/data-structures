var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.stackheight = 0;
};

Stack.prototype.push = function(value) {
  this.stackheight++;
  this['storage'][this.stackheight] = value;
};
Stack.prototype.pop = function() {
  if (this.size() > 0) {
    let top = this['storage'][this.stackheight];
    delete this['storage'][this.stackheight];
    this.stackheight--;
    return top;
  }
};
Stack.prototype.size = function() {
  return this.stackheight;
};
