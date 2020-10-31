let calculator = {
  a: 0,
  b: 0,
  read(a = 0, b = 0) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read(2, 3);
console.log(calculator.sum());
console.log(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    console.log(this.step);
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

ladder.up().up().down().showStep(); // 1

function CalculatorNew() {
  this.a = 0;
  this.b = 0;
  this.read = function (a = 0, b = 0) {
    this.a = a;
    this.b = b;
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculatorNew = new CalculatorNew();
calculatorNew.read(2, 3);

console.log('Sum=' + calculatorNew.sum());
console.log('Mul=' + calculatorNew.mul());
