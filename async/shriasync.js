const _wrap = (fn, cb) => {
  setTimeout(() => {
    cb(fn());
  }, Math.random() * 20);
};

const AsyncArray = function (initial) {
  if (initial && !(initial instanceof Array)) {
    throw new Error('initial value is not an array');
  }

  const a = initial ? Array.from(initial) : [];

  this.set = (index, value, cb) =>
    _wrap(() => {
      a[index] = value;
    }, cb);

  this.push = (value, cb) =>
    _wrap(() => {
      a.push(value);
    }, cb);

  this.get = (index, cb) => _wrap(() => a[index], cb);
  this.pop = (cb) => _wrap(() => a.pop(), cb);
  this.length = (cb) => _wrap(() => a.length, cb);

  this.print = () => {
    console.log(a.toString());
  };
};

const add = (a, b, cb) => _wrap(() => a + b, cb);
const subtract = (a, b, cb) => _wrap(() => a - b, cb);
const multiply = (a, b, cb) => _wrap(() => a * b, cb);
const divide = (a, b, cb) => _wrap(() => a / b, cb);
const mod = (a, b, cb) => _wrap(() => a % b, cb);

const less = (a, b, cb) => _wrap(() => a < b, cb);
const equal = (a, b, cb) => _wrap(() => a === b, cb);
const lessOrEqual = (a, b, cb) => _wrap(() => a <= b, cb);
const sqrt = (x, cb) => _wrap(() => Math.sqrt(x), cb);

const promisify = (f) => (...args) =>
  new Promise((resolve) => {
    const cb = (result) => {
      resolve(result);
    };

    f(...args, cb);
  });

const maxElementInArray = (array, cb) => {
  return (async () => {
    try {
      const getValue = promisify(array.get);
      const getLength = promisify(array.length);
      const sum = promisify(add);
      const promisifyLess = promisify(less);
      let len = await getLength();
      let index = 0;
      let result = 0;

      while (await promisifyLess(index, len)) {
        const item = await getValue(index);

        if (await promisifyLess(result, item)) {
          result = item;
        }
        index = await sum(index, 1);
      }

      return result;
    } catch (e) {}
  })().then((result) => cb(result));
};

const array = new AsyncArray([-1, -2, 0, 1, 2, 5, 3, 4]);
maxElementInArray(array, (res) => {
  console.log(res);
});
