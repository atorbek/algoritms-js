const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const curried = curry(join);

console.time('time');
console.log(curried(1)(2)(3)); // x * 2 * 3;
console.timeEnd('time');
