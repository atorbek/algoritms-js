const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

function transformArr(func) {
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

console.time('time');
console.log(transformArr(join)(1)(2)(3)); // x * 2 * 3;
console.timeEnd('time');
