Function.prototype.defer1 = function (ms) {
  setTimeout(this, ms);
};

function f1() {
  console.log('Hello!');
}

f1.defer1(1000); // выведет "Hello!" через 1 секунду

/*--------------------------------------------- */

Function.prototype.defer2 = function (ms) {
  return (a, b) => setTimeout(this, ms, a, b);
};

function f2(a, b) {
  console.log(a + b);
}

f2.defer2(1000)(1, 2);
