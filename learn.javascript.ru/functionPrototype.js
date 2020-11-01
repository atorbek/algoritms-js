function obj() {
  this.foo = 'foo';
  this.bar = 'bar';
}

let obj2 = new obj.constructor();

console.log(obj2);

const o = obj2.constructor;
console.log(new o());
