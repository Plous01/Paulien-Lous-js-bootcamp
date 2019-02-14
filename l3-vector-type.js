class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vector) {
    let sumx = this.x + vector.x;
    let sumy = this.y + vector.y;
    return new Vec(sumx, sumy);
  }

  minus(vector) {
    let diffx = this.x - vector.x;
    let diffy = this.y - vector.y;
    return new Vec(diffx, diffy);
  }

  get length() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
