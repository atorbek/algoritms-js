function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (x) => {
    count = x;
    return count;
  };

  counter.decrease = () => {
    return count--;
  };

  return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11)

/*-----------------------------------------------------*/

// sum(a)(b)(c)

function sum(a) {
  let sum = a;

  function makeSum(b) {
    sum += b;
    return makeSum;
  }

  makeSum.toString = function () {
    return sum;
  };

  return makeSum;
}

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6;
sum(6)(-1)(-2)(-3) == 0;
sum(0)(1)(2)(3)(4)(5) == 15;
