/*
Даны 3 асинхронные функции со случайным setTimeout
Нужно написать код, который выведет в консоль:
A
B
C
*/
function foo(callback) {
  setTimeout(function () {
    callback('A');
  }, Math.random() * 100);
}

function bar(callback) {
  setTimeout(function () {
    callback('B');
  }, Math.random() * 100);
}

function baz(callback) {
  setTimeout(function () {
    callback('C');
  }, Math.random() * 100);
}

const promisify = (f) => (...args) => {
  return new Promise((resolve) => {
    const cb = (result) => {
      resolve(result);
    };

    f(...args, cb);
  });
};

const promisifedFoo = promisify(foo);
const promisifedBar = promisify(bar);
const promisifedBaz = promisify(baz);

Promise.all([promisifedFoo(), promisifedBar(), promisifedBaz()]).then(
  (values) => {
    values.forEach((item) => {
      console.log(item);
    });
  }
);
