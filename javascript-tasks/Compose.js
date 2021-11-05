function compose(fns) {
  return fns.reduce(
    (prevFunc, nextFunc) => (...args) => prevFunc(nextFunc(...args)),
    (value) => value
  );
}

const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

const composed = compose([times(2), plus(3)]); // x + 3 * 2

console.time('time');
console.log(composed(2)); // x * 2 * 3;
console.timeEnd('time');
